import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { theme } from './theme'
import { Login } from './components/Login'
import { Home } from './components/Home'
import { AuthProvider } from './contexts/authContext'
function App() {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </AuthProvider>
  )
}

export default App
