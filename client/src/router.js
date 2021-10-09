import { Switch, Route } from 'react-router-dom'
import Home from 'src/views/Home'
import Weight from 'src/views/Weight'
import Reading from 'src/views/Reading'

const Router = () => (
  <Switch>
    <Route exact path='/reading' component={ Reading } />
    <Route exact path='/weight' component={ Weight } />
    <Route exact path='/' component={ Home } />
  </Switch>

)

export default Router