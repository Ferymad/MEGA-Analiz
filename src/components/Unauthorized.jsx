import React from 'react';
import { useTranslation } from 'react-i18next';

const Unauthorized = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('unauthorized')}</h1>
      <p>{t('unauthorized_message')}</p>
    </div>
  );
};

export default Unauthorized;
