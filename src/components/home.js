import React, { Component } from 'react';
//import NavComponent from '../components/Navbar';
import Bar from '../components/bar';
import logo from '../images/pp.jpg';
import '../css/home.css';

const schoolComp = "https://www.usm.edu/computing";
const profName = "https://www.usm.edu/computing/faculty/bikramjit-banerjee";
const competition = "http://sites.ieee.org/southeastcon2019/program/student-program/";

class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <br /><br />
                <div className="imageCropper">
                    <img src={logo} alt="personalImage" />
                </div>
                <br />
                <h1 id="topElement">Paribartan Dhakal</h1>
                <br />
                
                <Bar />
                <br /><br /><br />
                
                <div className="para">
                    <p className="paragraph">
                        Hi, I am Paribartan, a junior and an honors college student at the University of Southern Mississippi, studying computer science and mathematics.
                I am currently involved in research with <a href={profName} target="_blank" rel='noopener noreferrer'>
                            Dr. Bikramjit Banerjee </a> at the <a href={schoolComp} target="_blank" rel='noopener noreferrer'>
                            School of Computing </a>on the topic of Reinforcement Learning (RL). I am training RL agent as a supervised classifier initially but reducing
                    its dependencies in this classifier over time and experimenting whether RL will end up with better performance than the demonstrator
                <br />
                        I am working as a student worker for the HVAC in the physical plant department, where I am designated to regularly check and maintain the computers
                        and software used by the department. Furthermore, I also assist supervisor in maintaining the invoices and files.
                <br />
                        I am also associated with Institute of Electrical and Electronics Engineers, USM chapter, where I am currently preparing to participate in
                <a href={competition} target="_blank" rel='noopener noreferrer'> IEEE SoutheastCon 2019 Hardware Competition.</a> I am working on the simulation of robot in the designated surface using ROS and Gazebo. 

                    </p>
                </div>


                <div id="footer">
                    Created By &copy; Paribartan Dhakal
                 </div>
            </div>
        );
    }

}

export default HomePage;