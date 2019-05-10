import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css'

import Form from './components/Form/Form'
import Home from './components/Home/Home'
import { Router, Route, Switch } from  'react-router';
import 'tachyons'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchItems } from './redux/reducers/reducer';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import createHistory from 'history/createHashHistory';
import { routerMiddleware } from 'react-router-redux';

const logger = createLogger();
const history = createHistory();
const middleware = routerMiddleware(history);
const rootReducer = combineReducers({form: formReducer}, searchItems)
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger, middleware));

class Application extends React.Component {
    render() {
      return (
        <Provider store={ store }> 
            <Router history={history}>
              <Switch>
                  <Route exact path="/" component={ Home }/>
                  <Route path="/form" component= { Form }/>
              </Switch>
            </Router>
        </Provider>
      )
    }
  }
  
  ReactDOM.render(<Application />, document.getElementById("root"));
registerServiceWorker();
