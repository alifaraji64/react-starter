import { authContext } from '../contexts/Auth'
import { Link } from "react-router-dom";
function Component3 () {
  return (
    <>
      <h1>component3</h1>
      <Link to='/component2'>component2</Link>
      <authContext.Consumer>
        {({ authenticated, toggleIsAuthenticated }) => (
          <div>
            <h4>authenticated: {authenticated.toString()}</h4>
            <button onClick={()=>toggleIsAuthenticated()}>toggle</button>
          </div>
        )}
      </authContext.Consumer>
    </>
  )
}

export default Component3
