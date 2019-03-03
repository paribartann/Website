import React, { Component } from 'react';
import '../css/bar.css';
import { Link } from "react-router-dom";
import {Menu, Dropdown, Button, Icon} from 'antd';
import 'antd/dist/antd.css';
import resume from '../files/Dhakal, Paribartan.pdf';


const ButtonGroup = Button.Group;


  const menu = (
    <Menu>
      <Menu.Item>
      <a href={resume} target="_blank" rel='noopener noreferrer'><Icon type="file-pdf" /> Resume</a>
      </Menu.Item>
      <Menu.Item>
      <a href="https://github.com/paribartann" target="_blank" rel='noopener noreferrer'><Icon type="github" /> Github</a>
      </Menu.Item>
      <Menu.Item>
      <a href="https://www.linkedin.com/in/paribartan-dhakal-61452b135/" target="_blank" rel='noopener noreferrer'><Icon type="linkedin" /> LinkedIn</a>
      </Menu.Item>
      <Menu.Item>
      <a href="https://www.facebook.com/paribartan.dhakal" target="_blank" rel='noopener noreferrer'><Icon type="facebook" /> Facebook</a>
      </Menu.Item>
      <Menu.Item>
      <a href="https://twitter.com/Paribartann" target="_blank" rel='noopener noreferrer'><Icon type="twitter" /> Twitter</a>
      </Menu.Item>
    </Menu>
  );

class Bar extends Component {
 
 
     render() {
      return (
        <div className="navigation">
            <ButtonGroup>
              <div style={{display:"flex",flexDirection:"row"}}>
                <div><Link to="/"><Button>HOME</Button></Link></div>
                <div><Link to="/projects"><Button>PROJECTS</Button></Link></div>
                <div><Link to="/courses"><Button>COURSES</Button></Link></div>
                <div><Link to="/articles"><Button>ARTICLES</Button></Link></div>
                <Dropdown overlay={menu}>
                        <Button>LINKS<Icon type="down" /></Button>
                </Dropdown>
                
                <div><Link to="/contact"><Button>CONTACT</Button></Link></div>
               </div>
             </ButtonGroup>

            
      </div>
      );
    }
}

export default Bar;