import { useState } from 'react'
import { useTranslation } from 'react-i18next'  // Import useTranslation hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LanguageSwitcher from './components/LanguageSwitcher'  // Import LanguageSwitcher component

function App() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation()  // Use the translation hook

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{t('welcome_message')}</h1>
      <LanguageSwitcher />  {/* Add the LanguageSwitcher component */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {t('count_is')} {count}
        </button>
        <p>
          {t('edit_instructions')}
        </p>
      </div>
      <p className="read-the-docs">
        {t('click_on_logos')}
      </p>
    </>
  )
}

export default App
