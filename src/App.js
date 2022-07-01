import 'bootstrap/dist/css/bootstrap.min.css';
import Component1 from './components/component1'
import Component2 from './components/component2'
import Component3 from './components/component3'
import AuthContext from './contexts/Auth'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App () {
  return (
    <Router>
    <div className='App'>
      <AuthContext>
        <Switch>
          <Route path='/component1'>
            <Component1/>
          </Route>
          <Route path='/component2'>
            <Component2/>
          </Route>
          <Route path='/component3'>
            <Component3/>
          </Route>
        </Switch>
      </AuthContext>
    </div>
    </Router>
  )
}

export default App
