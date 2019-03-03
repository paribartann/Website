import React, { Component } from 'react';
 
class CommentBox extends Component {
  constructor(props) {
    super(props);
    
    this.addComment = this.addComment.bind(this);
  }
 

  addComment(e) {
    // Prevent the default behaviour of form submit
    e.preventDefault();
   
    // Get the value of the comment box
    // and make sure it not some empty strings
    const comment = e.target.elements.comment.value.trim();
    const name = e.target.elements.name.value.trim();
   
    // Make sure name and comment boxes are filled
    if (name && comment) {
      const commentObject = { name, comment };
   
      this.props.handleAddComment(commentObject);
   
      // Publish comment
      /*global Ably*/
      const channel = Ably.channels.get('comments');
      channel.publish('add_comment', commentObject, err => {
        if (err) {
          console.log('Unable to publish message; err = ' + err.message);
        }
      });
   
      // Clear input fields
      e.target.elements.comment.value = '';
      e.target.elements.name.value = '';
    }
  }

  render() {
    return (
      <div>
        <h1 id="topElement" style={{marginLeft: "auto", marginRight:"auto", width: "50%"}}>Comments</h1>
        <form onSubmit={this.addComment}>
          <div className="field" style={{marginLeft: "auto", marginRight:"auto", width: "50%"}}>
            <div className="control">
              <input type="text" className="input" name="name" placeholder="Your name"/>
            </div>
          </div>
          <div className="field" style={{marginLeft: "auto", marginRight:"auto", width: "50%"}}>
            <div className="control">
              <textarea className="textarea" name="comment" placeholder="Add a comment"></textarea>
            </div>
          </div>
          <div className="field" style={{marginLeft: "auto", marginRight:"auto", width: "50%"}}>
            <div className="control">
              <button className="button is-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
 
export default CommentBox;