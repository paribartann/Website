import React, { Component } from 'react';
import Bar from '../components/bar';
import '../css/contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from 'antd';
import logo from '../images/pp.jpg';
let recieverEmail="paribartandhakal@gmail.com"

class contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          name: '',
          email: '',
          message: '',
        }
      }

      handleFormSubmit( event ) {
        event.preventDefault();

           


        var templateParams = {
            from_email: this.state.email,
            from_name: this.state.name,
            message_html: this.state.message,
            to_name:recieverEmail,
            reply_to: this.state.email
        };


        window.emailjs
      .send('gmail', 'template_2edPnsPk',templateParams)
      .then(res => {
        alert("Submitted!");
        this.setState({name:' '});
        this.setState({email:' '});
        this.setState({message:' '});

      })
      // Handle errors here however you like
      .catch(err => console.error('Failed to send feedback. Error: ', err));
      }

    
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
                <h1 style={{ textAlign: "center" }}><Icon type="contacts" /> Contact Form</h1>

                <br />
                <div className="contactform">
                    <form action="#" >
                        <label>Name</label>
                        <input type="text" id="name" name="name" placeholder="Please enter your name."
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })}
                        />
                       


                        <label>Email</label>
                        <input type="email" id="email" name="email" placeholder="Please enter your email."
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />


                        <label>Message</label>
                        <textarea id="message" name="message" rows="5" cols="50" placeholder="Please enter your message."
                            onChange={e => this.setState({ message: e.target.value })}
                            value={this.state.message}
                        ></textarea>
                        <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
                    </form >



                </div>


            </div >

        );
    }
}

export default contact;