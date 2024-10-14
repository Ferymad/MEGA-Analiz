import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import { TextField, Button, Typography, Box } from '@mui/material';

const UpdatePassword = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { updatePassword } = useAuth();
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePassword(password);
      setMessage(t('password_updated'));
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <Typography component="h1" variant="h5">
        {t('update_password')}
      </Typography>
      {message && <Typography color="info">{message}</Typography>}
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label={t('new_password')}
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
        {t('update_password')}
      </Button>
    </Box>
  );
};

export default UpdatePassword;
