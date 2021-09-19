import { Switch, Route } from 'react-router-dom'
import Navbar from 'src/components/core/Navbar'
import Home from 'src/views/Home'
import Weight from 'src/views/Weight'

const Router = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path='/weight' component={ Weight } />
      <Route exact path='/' component={ Home } />
    </Switch>
  </>
)

export default Router