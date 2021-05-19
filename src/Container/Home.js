import React from 'react';
import { NavLink } from 'react-router-dom';
import bank from '../Images/bank.jpg';

import '../index.css';
const Home = () => {
    return (
            <div className="py-4"><div className="qq">
            <h1 className="heading">
                Online
                Money
                Transfer
                Anywhere  
                Anytime 
            </h1>
            <div>
            </div>
                    <div className="row text-center">

                        <div className=" col-4">
                        <NavLink className="btn btn-info my-sm-0" exact to="/viewCustomer" role="button">Accounts</NavLink>
                        </div>
                        <div className=" col-4">
                        <NavLink className="btn btn-info  my-sm-0" exact to="/transfer" role="button">Transfer</NavLink>
                        </div>
                        <div className="col-4">
                        <NavLink className="btn btn-info  my-sm-0" exact to="/transactions" role="button">Transactions</NavLink>
                        </div>
                         
                    </div>
                <img src={bank} className="img-fluid hars" alt="Responsive"></img>

                <div>
                    <p className="subheading">
                        Helping You Make Smart Financialy
                        {/* Choices- Simpler, Faster, Friendlier */}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
