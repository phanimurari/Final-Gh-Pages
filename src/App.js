import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const BASE_URL = 'http://phanimurari.github.io/Final-Gh-Pages'

const App = () => (
  <Switch>
    <Route exact path={`${BASE_URL}/login`} component={LoginForm} />
    <ProtectedRoute exact path={`${BASE_URL}/`} component={Home} />
    <ProtectedRoute exact path={`${BASE_URL}/products`} component={Products} />
    <ProtectedRoute
      exact
      path={`${BASE_URL}/products/:id`}
      component={ProductItemDetails}
    />
    <ProtectedRoute exact path={`${BASE_URL}/cart`} component={Cart} />
    <Route path={`${BASE_URL}/not-found`} component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
