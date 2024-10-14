import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import { TextField, Button, Typography, Box } from '@mui/material';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signUp } = useAuth();
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const { error } = await signUp({ email, password, name });
      if (error) throw error;
      // Handle successful signup (e.g., redirect or show success message)
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <Typography component="h1" variant="h5">
        {t('signup')}
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label={t('name')}
        name="name"
        autoComplete="name"
        autoFocus
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label={t('email')}
        name="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label={t('password')}
        type="password"
        id="password"
        autoComplete="new-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        {t('signup')}
      </Button>
    </Box>
  );
};

export default Signup;
