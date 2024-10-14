import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './components/LanguageSwitcher'

function App() {
  const { t } = useTranslation()

  return (
    <div className="App">
      <h1>{t('welcome_message')}</h1>
      <LanguageSwitcher />
    </div>
  )
}

export default App
