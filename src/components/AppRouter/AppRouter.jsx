import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PostStream from '../PostStream/PostStream.jsx'
import styles from './AppRouter.css'
const AppRouter = () => (
  <main>
    <div className={styles.content}>
    <Switch>
      <Route exact path='/' component={PostStream}/>
    </Switch>
    </div>
  </main>
)

export default AppRouter;
