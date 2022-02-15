import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainLayout from '@/layout/main-layout';
import routes from './routes';
import Login from '@/views/login'

const BasicRoute = () => (
  <Router>
    <Route exact path="/login" component={Login} />
    <Route path="/main" render={() => (
      <MainLayout>
        {routes.map((v, i) => <Route exact key={i} path={v.path} component={v.component} />)}
      </MainLayout>
    )}>
    </Route>
    
  </Router>
);


export default BasicRoute;
