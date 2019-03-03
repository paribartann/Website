import React, { Component } from 'react';
import '../css/essays.css'
import CommentBox from './CommentBox';
import Comments from './Comments';
import Bar from '../components/bar';

class Solitude extends Component {


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
                <br />
                <br />
                <br />
                <Bar />
                <br /><br />
                <div className="essayBody" >



                    <h1 id="topElement">Solitude</h1><br />

                    <div className="poems">
                            I had never been this lonely
                        <br />
                            never felt so left out
                        <br />
                            nowhere to go and no one to talk to
                        <br />
                            Felt like, I was my only friend
                        <br />
                            I thought I began to understand life
                        <br />
                            its bitter truth, bitter reality
                        <br />
                            and its phonies with sugared flattery
                        <br />
                            its tendency to engage people
                        <br />
                            and put a permanent scar in people’s heart
                        <br />
                            But now…..
                        <br />
                            Slowly, the scars feel like designed tattoos
                        <br />
                            I saw honesty on flatteries
                        <br />
                            people are not only phonies
                        <br />
                            life doesn’t only tangle you!
                        <br />
                            Life isolates you
                        <br />
                            to teach you things beyond grasp
                        <br />
                            to let you explore
                        <br />
                            to enable you to
                        <br />
                            find tranquility within your soul
                        <br />
                            This isolation has been a great teacher
                        <br />
                            it taught me to stand on my feet
                        <br />
                            Distinguish fake from genuine
                        <br />
                            it created a new me
                        <br />
                            to be able to survive in this world.
                        <br />
                    </div>
                    <br /><br /><br />
                    <CommentBox handleAddComment={this.handleAddComment} />
                    <Comments comments={this.state.comments.reverse()} />
                </div>
            </div>
        );
    }
}

export default Solitude;