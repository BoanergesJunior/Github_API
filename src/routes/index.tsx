import React from 'react'
import {Switch, Route} from 'react-router'

import Dashboard from '../pages/Dasboard'
import Repository from '../pages/Repository'

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/repositories/:repository+" component={Repository}/>
            <Route path="/repository" component={Repository}/>
        </Switch>
    )
}

export default Routes
