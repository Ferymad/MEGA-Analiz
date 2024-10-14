import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import { TextField, Button, Typography, Box } from '@mui/material';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { resetPassword } = useAuth();
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      setMessage(t('password_reset_sent'));
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <Typography component="h1" variant="h5">
        {t('reset_password')}
      </Typography>
      {message && <Typography color="info">{message}</Typography>}
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label={t('email')}
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        {t('send_reset_link')}
      </Button>
    </Box>
  );
};

export default PasswordReset;
