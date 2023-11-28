import { BrowserRouter as Router, Switch } from 'react-router-dom'

// Components
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Container from './components/layout/Container'
import Message from './components/layout/Message'

// Pages
import Login from './components/pages/Auth/Login'
import Register from './components/pages/Auth/Register'
import Home from './components/pages/Home'
import Profile from './components/pages/User/Profile'

// Context
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Message />
        <Container>
          <Switch>
            <Router path="/login">
              <Login />
            </Router>
            <Router path="/register">
              <Register />
            </Router>
            <Router path="/user/profile">
              <Profile />
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
