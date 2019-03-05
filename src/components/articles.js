import React, { Component } from 'react';
import Bar from '../components/bar';
import { Carousel, Card, Icon, Button } from 'antd';
import '../css/articles.css';
import 'antd/dist/antd.css';
import logo from '../images/pp.jpg';
import { Link } from "react-router-dom";

const { Meta } = Card;

class articles extends Component{
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
                <br />
                <h1 style={{ textAlign: "center" }}><Icon type="file" />Articles</h1>
                <br />

                <div className="caraousel">
                    <Carousel effect="scrollx" >
                   
                        <div className="ArticleOne">

                            <Card style={{ width: "500px", marginLeft: "auto", marginRight:"auto" }} cover={<img alt="gosakinKunda" src="https://pbs.twimg.com/media/B6b4rq0CAAEDULR.jpg:large" width="500px" height="100%" />}
                            actions={[
                                <div> <Link to="/gosainkunda"> <Button> <Icon type="read" /> </Button> </Link> </div> 
                                    
                                
                                ]}>
                                
                                <Meta title="Highway to the Himalayas" description="A memoir"/>
                            </Card>
                        </div>

                        <div className="ArticleTwo">
                            <Card style={{ width: "500px", height: "400px", marginLeft: "auto", marginRight:"auto" }} cover={<img alt="solitude" src="https://www.incimages.com/uploaded_files/image/970x450/getty_479780005_174901.jpg" width="500px" />}
                            actions={[

                                <div> <Link to="/solitude"> <Button> <Icon type="read" /> </Button> </Link> </div> 
                               
                            ]}>
                                
                                <Meta title="Solitude" description="Poem"/>
                            </Card>
                        </div>
                        
                        <div className="ArticleThree">
                            <Card style={{ width: "300px", marginLeft: "auto", marginRight:"auto" }} cover={<img alt="rise" src="https://i.pinimg.com/originals/30/c1/f5/30c1f593531fc4a549b0afd1394778b7.jpg" width="500px" lineHeight="30%"/>}
                                actions={[

                                    <div> <Link to="/iwllrise"> <Button> <Icon type="read" /> </Button> </Link> </div> 
                                
                                ]}>
                                
                                <Meta title="I Will Rise Again" description="Poem"/>
                            </Card>

                            </div>
                  
                    </Carousel>
                    <br /><br />
                   
                </div>
            </div>

        );
    }
}

export default articles;