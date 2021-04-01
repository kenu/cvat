import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from '../components/header';
import SideBar from '../components/side';

import routes from '../../routes.js';
export default function DefaultLayout() {
    const history = useHistory();

    const getRoutes = routes.map((props, key) => {
        console.log(history);
        if (props.path === history.location.pathname) {
            console.log(props.path);
            return <Route exact path={props.path} component={props.component} key={key}></Route>;
        }
    });

    useEffect(() => {});
    return (
        <>
            <Header />
            <div className='container'>
                <SideBar />
                <div className='containerViewer'>
                    <Switch>{getRoutes}</Switch>
                </div>
            </div>
        </>
    );
}
