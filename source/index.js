import React from 'react'
import ReactDom from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './router/routes'
import Provider from './js/components/common/provider'

ReactDom.render(
    <Provider data={window.INIT||{}}>
        <Router history={browserHistory} routes={routes}></Router>
    </Provider>,
    document.getElementById('app')
)