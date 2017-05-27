import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PostStream from '../PostStream/PostStream.jsx'
import PostPage from '../PostPage/PostPage.jsx'
import styles from './AppRouter.css'


const AppRouter = () => (
  <main>
    <div className={styles.content}>
    <Switch>
      <Route exact path='/' component={PostStream}/>
      <Route path='/posts/:postId' component={PostPage}/>
    </Switch>
    </div>
  </main>
);

export default AppRouter;
