import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { userProfile } = useAuth();
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('dashboard')}</h1>
      <p>{t('welcome', { name: userProfile?.name })}</p>
      <p>{t('role', { role: userProfile?.role })}</p>
    </div>
  );
};

export default Dashboard;
