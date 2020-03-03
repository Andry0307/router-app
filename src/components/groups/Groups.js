import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import GroupsList from "./GroupsList";
import GroupForm from "./GroupForm";

function Groups() {

    const {path} = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route exact path={`${path}/`}>
                    <GroupsList/>
                </Route>
                <Route
                    path={`${path}/:id`}
                    render={route => {
                        return <GroupForm id={route.match.params.id}/>
                    }}>
                </Route>
            </Switch>

        </div>
    );
}

export default Groups;

