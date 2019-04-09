import React, { Component } from 'react';
import Bar from '../components/bar';
import {Card, Icon} from 'antd';
import '../css/project.css';
import logo from '../images/pp.jpg';


class projects extends Component{
    render() {
        return (
            <div>
                 <br /><br />
                <div className="imageCropper">
                    <img src={logo} alt="personalImage" />
                </div>
                <br />
                <h1 id="topElement">Paribartan Dhakal</h1>
                <br />
                 <Bar />
                <br></br>
                <h2 style={{textAlign:"center", fontSize: 30}}>Group Projects</h2>
                <br />

                <Card className="card" title="NutriApp (Calhacks 5.0)" extra={<a href="https://bitbucket.org/paribartann/" target="_blank" rel='noopener noreferrer'><Icon type="link" /> Bitbucket</a>}>
                <p>
                    
                With this app, we hoped to bridge the gap between advanced nutritional knowledge and databases with mobile users.
                 The user enters in information- in our proof of concept, we only have strings for height, weight, age, and gender- and receives
                  a personalized nutrition plan minimized for the amount of food needed per person to minimize food waste 
                  complete with Nutritional Information optimized for their data based on the USDA Food Database and using 
                  Modern Nutrition 10th edition textbook. We hope to expand upon this project by adding in activity levels, 
                  dietary restrictions, and access to grocery/wholesale prices in order to get the most affordable prices.
                   Currently, we also need to make sure that we can communicate from the back-end to the front-end without 
                   manually sending the resulting text files to one from the other. We hoped to provide people with easier access
                    to nutrition educational information and optimal eating strategies without having to pay a premium
                     for personalized diet and nutritional coaching.
                </p>
                </Card>
                <br />
                <h2 style={{textAlign:"center", fontSize: 30}}>Personal Projects</h2>

                <Card className="card" title="NutriApp: Webbased FrontEnd" extra={<a href="https://github.com/paribartann/NutriAppFrontEnd" target="_blank" rel='noopener noreferrer'><Icon type="link" /> Github</a>}>
                <p>
                    This project was done in spring break 2019 where I created a web based login and signup page using NodeJs, Express, Mysql. This project covers 
                    connecting with local database (MySQL) and validating username and password, and redirecting to main page after successful login. 
                    This project will be continued further. 
                </p>
                </Card>

                <br />
                <Card className="card" title="Personal Website (this website)" extra={<a href="https://github.com/paribartann/personalWebsite" target="_blank" rel='noopener noreferrer'><Icon type="link" /> Github</a>}>
                <p>
                    This project was created on the winter vacation of 2018 using React JS.

                </p>
                </Card>
                <br />

                <Card className="card" title="Policy Iteration: Optimal Policy for a RL agent" extra={<a href="https://github.com/paribartann/PythonRL" target="_blank" rel='noopener noreferrer'><Icon type="link" /> Github</a>}>
                <p>
                    This was done as a part of a preparation for a research related to Reinforcement Learning. Here, using the help from R Sutton's course website, I created an algorithm
                    which finds an optimal policy for a give 5x5 gridworld example. 

                </p>
                </Card>



            </div>


           
        );
    }
}

export default projects;