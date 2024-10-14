/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { supabase } from '../supabaseClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = supabase.auth.getSession();
    setUser(session?.user ?? null);
    if (session?.user) {
      fetchProfile(session.user.id);
    }
    setLoading(false);

    const { data: listener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        await fetchProfile(session.user.id);
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  const fetchProfile = async (userId) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error fetching profile:', error);
    } else {
      setUserProfile(data);
    }
  };

  const signUp = async (data) => {
    const { user, error } = await supabase.auth.signUp(data);
    if (error) throw error;
    
    const { error: profileError } = await supabase
      .from('profiles')
      .insert([
        { 
          id: user.id, 
          name: data.name || '', 
          role: 'production_operator',
          preferred_language: 'en'
        }
      ]);
    
    if (profileError) throw profileError;
    
    await fetchProfile(user.id);
    return { user };
  };

  const signIn = async (data) => {
    const { user, error } = await supabase.auth.signInWithPassword(data);
    if (error) throw error;
    await fetchProfile(user.id);
    return { user };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    setUserProfile(null);
  };

  const resetPassword = async (email) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) throw error;
    return data;
  };

  const updatePassword = async (newPassword) => {
    const { data, error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) throw error;
    return data;
  };

  const value = {
    signUp,
    signIn,
    signOut,
    resetPassword,
    updatePassword,
    user,
    userProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  return useContext(AuthContext);
};
