import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './components/LanguageSwitcher'

function App() {
  const { t } = useTranslation()

  return (
    <div className="App">
      <header>
        <LanguageSwitcher />
      </header>
      <main>
        <h1>{t('welcome_message')}</h1>
        {/* Other main content goes here */}
      </main>
      <footer>
        {/* Footer content if needed */}
      </footer>
    </div>
  )
}

export default App
