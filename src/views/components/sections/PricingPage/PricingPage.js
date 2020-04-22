import React, { Component } from 'react';
import './PricingPage.css';

class PricingPage extends Component{
    render()
    {
        return(
            
            <div className="container">
                <h2> SoftSourced </h2>
                <br/>
                <h3 className="title"> Start a project</h3>
                <p className="description">Discuss your project with one of our Engagement Managers
                    to get a first quote within 72 hours.
                </p>

                <form className="pricing_form">
                    <div className="project_name_input">
                        <label>What is the project's name? </label>
                        <input type="text" required placeholder="Working title.."></input>
                    </div>
                    <div className="live_link_input">
                        <label>Is something live already? </label>
                        <input type="text" ></input>
                    </div>
                    <div class="dropdown mb-2">
                            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
                            When should the project start?
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="">Now</a>
                                <a class="dropdown-item" href="">1 Week</a>
                                <a class="dropdown-item" href="">2 Weeks</a>
                                <a class="dropdown-item" href="">1 Month</a>
                                <a class="dropdown-item" href="">2 Months</a>
                                <a class="dropdown-item" href="">Later</a>
                            </div>
                    </div>

                    <div className="project_description_input">
                        <label>What is the project's name? </label>
                        <input type="text"  placeholder="Description........"></input>
                    </div>
                </form>

            </div>


        );
    }
}


export default PricingPage;