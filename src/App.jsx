import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import LanguageSwitcher from './components/LanguageSwitcher'
import Login from './components/Login'
import Signup from './components/Signup'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './components/Dashboard'
import Unauthorized from './components/Unauthorized'
import PasswordReset from './components/PasswordReset'
import UpdatePassword from './components/UpdatePassword'

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <AuthProvider>
        <Router>
          <div className="App">
            <header>
              <LanguageSwitcher />
            </header>
            <main>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/unauthorized" element={<Unauthorized />} />
                <Route path="/reset-password" element={<PasswordReset />} />
                <Route path="/update-password" element={<UpdatePassword />} />
                <Route element={<PrivateRoute allowedRoles={['production_operator', 'production_engineer', 'owner', 'reporting_staff', 'administrator']} />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                </Route>
              </Routes>
            </main>
            <footer>
              {/* Footer content */}
            </footer>
          </div>
        </Router>
      </AuthProvider>
    </I18nextProvider>
  )
}

export default App
