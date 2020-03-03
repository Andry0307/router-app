import React from 'react';
import StudentsList from "./StudentsList";
import {Route, Switch, useRouteMatch} from "react-router";
import StudentForm from "./StudentForm";

function Students() {

    const {path} = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route exact path={`${path}/`}>
                    <StudentsList/>
                </Route>
                <Route path={`${path}/:id`}
                render={route => {
                    return <StudentForm id={route.match.params.id}/>
                }}>
                </Route>
            </Switch>

        </div>
    );
}

export default Students;