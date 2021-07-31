import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './Container/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './Container/About';
import Contact from './Container/Contact';
import Navbar from './Container/Navbar';
import AddUser from './Container/AddUser';
import ViewCustomer from "./Container/ViewCustomer";
import Transfer from './Container/Transfer';
import PageNotFound from './Container/PageNotFound';
import Transactions from "./Container/History";


// root function for starting the app
function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/viewCustomer" component={ViewCustomer}/>
                    <Route exact path="/transfer" component={Transfer}/>
                    <Route exact path="/addUser" component={AddUser}/>
                    <Route exact path="/transactions" component={Transactions} />
                    <Route component={PageNotFound}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;