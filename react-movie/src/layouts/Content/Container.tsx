import React from 'react';
import { Route, Switch } from 'react-router';

import { Routes } from '../../pages/routes';

const Container: React.FC = () => {
    return (
        <div className="contentContainer">
            <Switch>
                {Routes.map(route => {
                    return <Route exact path={route.pathname} component={route.component} />
                })}
            </Switch>
        </div>
    )
}

export default Container;
