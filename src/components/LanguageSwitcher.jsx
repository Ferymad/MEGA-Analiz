import { useTranslation } from 'react-i18next';
import { ButtonGroup, Button } from '@mui/material';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ButtonGroup aria-label={t('language')}>
      <Button 
        onClick={() => changeLanguage('en')}
        aria-label={t('english')}
      >
        {t('english')}
      </Button>
      <Button 
        onClick={() => changeLanguage('tr')}
        aria-label={t('turkish')}
      >
        {t('turkish')}
      </Button>
    </ButtonGroup>
  );
};

export default LanguageSwitcher;
