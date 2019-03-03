import React, { Component } from 'react';
import '../css/essays.css'
import CommentBox from './CommentBox';
import Comments from './Comments';
import Bar from '../components/bar';

class Iwillrise extends Component {

    constructor(props) {
        super(props);
     
        this.handleAddComment = this.handleAddComment.bind(this);

        this.state = {
          comments: []
        }
      }

      handleAddComment(comment) {
        this.setState(prevState => {
          return {
            comments: prevState.comments.concat(comment)
          };
        });
      }


      componentDidMount() {
        /*global Ably*/
        const channel = Ably.channels.get('comments');
       
        channel.attach();
          channel.once('attached', () => {
            channel.history((err, page) => {
              // create a new array with comments only in an reversed order (i.e old to new)
              const comments = Array.from(page.items.reverse(), item => item.data)
       
              this.setState({ comments });
            });
          });
      }

    render() {

        return (
            <div className="container">
            <br /><br />
          
                <Bar />
                <br/><br />
                <div className="essayBody">

                
                <h1 id="topElement">I Will Rise Again</h1><br />
                <div className="poemiwill">

                Life has the tendency to knock you down
                <br/>

                    Kick you repeatedly   
                    <br/>
                    Test your patience in the face of adversity
                    <br/>
                    Now it’s upto you 
                    <br/>
                    Whether you choose to back down or to rise up
                    <br/>
                    But I chose the latter
                    <br/>
                    If life demands changes
                    <br/>
                    I am moving on
                    <br/>
                    If life is trying to teach
                    <br/>
                    I am learning from the mistakes
                    <br/>
                    At times,
                    <br/>
                    Hard work doesn’t pay off
                    <br/>
                    But no way has it gone in vain
                    <br/>
                    It waits and waits asking for more time
                    <br/>
                    And more patience 
                    <br/>
                    Making you believe that everything
                    <br/>
                    Happens for a reason
                    <br/>
                    So here I am standing braver than ever
                    <br/>
                    Not fearing to fail in the course of life
                    <br/>
                    Not losing hope at all in times of despair
                    <br/>
                    But embarking upon a new journey 
                    <br/>
                    That might make me fall
                    <br/>
                    But I will rise again.
                    
                    </div>
                    <br /><br />
                    <br />            
                <CommentBox handleAddComment={this.handleAddComment} />
                    <Comments comments={this.state.comments.reverse()} />
            </div>
            </div>
        );
    }
}

export default Iwillrise;