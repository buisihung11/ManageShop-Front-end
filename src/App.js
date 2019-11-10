import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import classess from './App.module.css';

import Layout from './hoc/Layout/Layout';
import Albums from './pages/Albums/Albums';
import Orders from './pages/Orders/Orders';
import Products from './pages/Products/Products';


function App() {
  return (
    <div className={classess.App}>
      <Layout >
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/albums" component={Albums} />
          <Route path="/orders" component={Orders} />
          <Route path="/" component={Albums} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
