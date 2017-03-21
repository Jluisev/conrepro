import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import App from './App';
import Testing from './components/welcome'
import './index.css';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                Index
                <Route path="/testing" component={Testing}/>
            </Route>
        </Router>
    </Provider>,
  document.getElementById('root')
);