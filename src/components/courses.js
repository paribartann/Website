import React, { Component } from 'react';
import '../css/courses.css'
import { Collapse, Timeline, Icon, Button } from 'antd';
import Bar from '../components/bar';
import logo from '../images/pp.jpg';

const Panel = Collapse.Panel;
const info = "President's List";

const text1 = (
  <p style={{ paddingLeft: 24 }}>
        <Timeline>
            <Timeline.Item>Computer Science I (C++)</Timeline.Item>
            <Timeline.Item>Computer Science I Lab</Timeline.Item>
            <Timeline.Item>Composition One</Timeline.Item>
            <Timeline.Item>Calculus III With An Geometry</Timeline.Item>
            <Timeline.Item>General Physics W/ Calculus</Timeline.Item>
            <Timeline.Item> General Physics I W/ Calc Lab</Timeline.Item>
            <Button type="primary">{info}</Button>
        </Timeline>
  </p>
);

const text2 = (
    <p style={{ paddingLeft: 24 }}>
          <Timeline>
            <Timeline.Item>Computer Science II (C++)</Timeline.Item>
            <Timeline.Item>Composition Two</Timeline.Item>
            <Timeline.Item>American Government</Timeline.Item>
            <Timeline.Item>General Physics II W/ Calculus</Timeline.Item>
            <Timeline.Item> General Physics II W/ Calc Lab</Timeline.Item>
            <Button type="primary">{info}</Button>
          </Timeline>
    </p>
  );

  const text3 = (
    <p style={{ paddingLeft: 24 }}>
          <Timeline>
            <Timeline.Item>Introduction to Computer Systems (Assembly Language)</Timeline.Item>
            <Timeline.Item>Computers and Society (Wrting and Speaking Intensive)</Timeline.Item>
            <Timeline.Item>Basic Economics</Timeline.Item>
            <Timeline.Item>Calculus I With An Geometry</Timeline.Item>
            <Timeline.Item>Theatre Appreciation</Timeline.Item>
            <Button type="primary">{info}</Button>
          </Timeline>
    </p>
  );

  const text4 = (
    <p style={{ paddingLeft: 24 }}>
          <Timeline>
            <Timeline.Item>General Chemistry I</Timeline.Item>
            <Timeline.Item>General Chemistry I Lab</Timeline.Item>
            <Timeline.Item>Introduction to Computer Organization</Timeline.Item>
            <Timeline.Item>Data Strucutres and Algorithms</Timeline.Item>
            <Timeline.Item>World Literature</Timeline.Item>
            <Timeline.Item>Calculus I With An Geometry</Timeline.Item>
            <Timeline.Item>Probability and Math Statistics I</Timeline.Item>
            <Button type="primary">{info}</Button>
          </Timeline>
    </p>
  );

  const text5 = (
    <p style={{ paddingLeft: 24 }}>
          <Timeline>
            <Timeline.Item>Operating Systems and Computer Architecture</Timeline.Item>
            <Timeline.Item>Database Management Systems Design (SQL)</Timeline.Item>
            <Timeline.Item>Algorithms</Timeline.Item>
            <Timeline.Item>Honors Thesis I</Timeline.Item>
            <Timeline.Item>Intro To Linear Algebra</Timeline.Item>
            <Timeline.Item>Discrete Mathematics</Timeline.Item>
            <Timeline.Item>Ethics and Living</Timeline.Item>
            <Button type="primary">{info}</Button>
          </Timeline>
    </p>
  );

  const text6 = (
    <p style={{ paddingLeft: 24 }}>
          <Timeline>
              <Timeline.Item>Object-Oriented Programming</Timeline.Item>
              <Timeline.Item>Organization of Programming Languages</Timeline.Item>
              <Timeline.Item>Introduction to Artificial Intelligence</Timeline.Item>
              <Timeline.Item>Honors Thesis II</Timeline.Item>
              <Timeline.Item>General Physics I </Timeline.Item>
              <Timeline.Item>General Physics I Lab</Timeline.Item>
              <Timeline.Item>World Civilizations: 1500 to the present</Timeline.Item>
          </Timeline>
    </p>
  );


class courses extends Component{
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
                <h1 style={{ textAlign: "center" }}><Icon type="snippets" />Courses Taken</h1>

                <br />
                <div className="content">
                    
                    <Collapse bordered={false}>
                        <Panel header="Fall 2016-2017" key="1">
                        {text1}
                        </Panel>

                        <Panel header="Spring 2016-2017" key="2">
                        {text2}
                        </Panel>

                        <Panel header="Fall 2017-2018" key="3">
                        {text3}
                        </Panel>

                        <Panel header="Spring 2017-2018" key="4">
                        {text4}
                        </Panel>

                        <Panel header="Fall 2018-2019" key="5">
                        {text5}
                        </Panel>

                        <Panel header="Spring 2018-2019" key="6">
                        {text6}
                        </Panel>
                    </Collapse>,
    
                </div>
            </div>

        );
    }
}

export default courses;




