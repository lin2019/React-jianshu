import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './common/header'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login/loadable'
import Write from './pages/write'
import { Provider } from 'react-redux'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/write" exact component={Write}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/details/:id" exact component={Detail}></Route>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
