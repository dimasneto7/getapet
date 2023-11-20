import { BrowserRouter as Router, Switch } from 'react-router-dom'

// Components
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Container from './components/layout/Container'

// Pages
import Login from './components/pages/Auth/Login'
import Register from './components/pages/Auth/Register'
import Home from './components/pages/Home'

// Context
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Container>
          <Switch>
            <Router path="/login">
              <Login />
            </Router>
            <Router path="/register">
              <Register />
            </Router>
            <Router path="/">
              <Home />
            </Router>
          </Switch>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  )
}

export default App
