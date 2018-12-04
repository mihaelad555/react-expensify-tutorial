
import React from 'react';
import Header from '../components/Header.js'
import NotFoundPage from '../components/NotFoundPage.js'
import ExpenseDashboard from '../components/ExpenseDashboard.js'
import AddExpensePage from '../components/AddExpensePage.js'
import EditExpensePage from '../components/EditExpensePage.js'
import HelpPage from '../components/HelpPage.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom';



const AppRouter =() => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
        <Route path="/" component={ExpenseDashboard} exact={true} />
        <Route path="/create"component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
        </Switch>
        </div>
        </BrowserRouter>
);

export default AppRouter;