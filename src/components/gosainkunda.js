import React, { Component } from 'react';
import '../css/essays.css'
import CommentBox from './CommentBox';
import Comments from './Comments';
import Bar from '../components/bar';
import image1 from '../images/gosainkunda1.JPG';
import image2 from '../images/gosainkunda2.JPG';
import image3 from '../images/gosainkunda3.JPG';
import image4 from '../images/gosainkunda4.JPG';
import image5 from '../images/gosainkunda5.JPG';
import image6 from '../images/gosainkunda6.JPG';


class Gosainkunda extends Component {


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
                <br />
                <br />
                <div className="essayBody">

                    

                        <h1 id="topElement">Highway to the Himalayas</h1><br />


                        <span id="tab" /> Gazing at the serene and blissful Gosainkunda Lake made us forget the long, tiring, and arduous trek we had endured to reach there. It had all begun with a sudden idea. Four boys, highly bored, had been struggling to pay attention at a lecture and had been passing notes about their larger than life plans. The bell rang and one of the boys emphasized how the plan did not have to remain on paper, “We can trek to the Himalayas.” We unanimously decided to trek to Gosainkunda situated at 4380 meters above sea level. Even without preparations, we were already visualizing our trip in some flash-forward manner. Though we had plenty of time to get gear and necessities, we ignored the fact that bus tickets are hard to come by, especially during the festival season. I spent days in front of my telephone calling one ticket counter after another but in vain. Our excitement was slowly fading, but our determination had become stubborn now and we decided to make our trek even without tickets.
                    <br /><br />

                        <div className="image">
                            <img src={image1} alt="image1" id="image1" />
                            <figcaption>From L-R: Samip, Paribartan (me), Paritosh, Abhisekh at Cholangpati!</figcaption>
                        </div>

                        <br />

                        <span id="tab" /> To begin with, we were well equipped with this motto: “‘Hope for the best, prepare for the worst.”’. We were on our way towards the bus station with an anxious vibe. To our delight, there was one last bus to Dhunche, the starting point of our trek. The crowded bus did not only include people but goats and huge sacks of green vegetables, and we somehow managed to squeeze in amidst it all. This made our bus journey not only entertaining but also very interesting. Moreover, four to five kilometers of road was not paved, and there was only one lane. It was scary. Not only did the road have no shoulder, but we were also on the path where the Ramche landslide occurred, and the drop was very steep. Call it fortune, call it serendipity, our bus broke down on this very road. So, we had to board another jam-packed bus to reach Dhunche. The bus was so crowded we had to travel on the hood of the bus. Our motto then came into practice. Though it seemed like quite a risk, viewing the beautiful landscape and scenery of the Rasuwa district and the sparkling mountains seen from the hood of the bus was mesmerizing, and it thrilled us and treated us with an exhilarating cool breeze. Although it was supposed to be a five-hour ride, we reached Dhunche in around eight hours.
                    <br /> <br />
                        <span id="tab" />   When we reached our inn, we threw our heavy bags aside and jumped onto the bed. It was such a relief. We could see mountains in the distance from our inn, and the thought of being near those mountains the next day excited us.  We thought we would set our alarm for five or six in the morning, but we did not wake up until seven. We learned a significant lesson that day: never ever set an alarm for five or six in the morning when you are excited.
                    <br /> <br />
                        <span id="tab" />   The next day we started our trekking with boundless determination. We were already inside the premises of Langtang National Park within the first five minutes. The rich flora and fauna and the roaring sound of the Trishuli River made it breath-taking. The chirping of birds and the bustling sound made by trees made us believe that we were already inside paradise. The first five minutes of the walk wasn’t the toughest of our journey, but it definitely prepared us for a hell before reaching our heaven. But we understood that the initial move towards anything is the most troublesome one. We took bites of Snickers candybars to rejuvenate our energy and continued our trek.
                    <br />
                    <br /><br />

                        <div className="image">
                            <img src={image5} alt="image5" id="image1" />
                            <figcaption>Gosainkunda</figcaption>
                        </div>

                        <br />

                        <span id="tab" />   We followed the gradual uphill trail along the bamboo and oak forest, passing the village of Deurali and Dhimsa. We had to climb a dangerously steep hill and became more and more aware of our elevation. The only problem we thought we would face was that of the altitude sickness. So, we were all versed in its symptoms, and we chewed some cloves of garlic and continued our way to Cholangpati. This path was incredibly picturesque as we could see numerous waterfalls almost framing the opposite hill. Our bodies were already aching, making it difficult to walk in the slippery path but we still had to reach Laurebinayak also known as Gosainkunda Base Camp. Gathering our remaining energy as well as determination, we eventually reached this stop. We were tired and hungry as we had walked continuously for about nine hours. We ordered Tibetan bread and garlic soup and got engrossed in the exquisiteness of this place and the hospitality and friendliness of the hotel’s owner. After that hearty dinner, we went outside to witness the Himalayas from close range during night-time. Coincidently, it was a full moon and we could see the moon’s light reflecting on the Mountains. It was the most beautiful thing I had ever seen. Lantang Lirung, Ganesh, Machhapuchhre and Annapurna ranges were all right in front of us and within “‘spitting distance,’”  reflecting beautifully on the full moon night. I got chills down my spine and was not able to move. It was as if I got a glimpse of what Heaven looks like. I appreciated the power and splendor of Mother Nature, and I realized that no man can ever compete with nature in any way.
                    <br /> <br />

                    <div className="image">
                            <img src={image3} alt="image3" id="image1" />
                            <figcaption>Panoramic view of Gosaikunda. Credit: Paritosh Dahal</figcaption>
                        </div>

                        <br />
                        <span id="tab" />   The next morning was the most significant for us as we were climbing towards our final destination. We buckled up and got ready for the trek. Sadly, there was no electricity so we could not charge our phones and cameras. We left at eight in the morning. Laurebinayak, the name itself suggests that this hill is not easy to climb, as it is challenging to climb without ‘Lauro’ (trekking poles). It was a herculean task to get to the top of that hill.  The steepness frightened us, and made us lose our balance, but we continued. There was also continued risk of altitude sickness if we hurried, so we climbed slowly and reached the Gumba (Monastery). The view from that Gumba was magnificent. We could see Dhunche, our starting point of the trek, from there and we realized how much we had walked and conquered. We caught our breath and headed towards our final destination.
                    <br />

                    <br /><br />

                        <div className="image">
                            <img src={image2} alt="image2" id="image1" />
                            <figcaption>Trail leading to Gosainkunda. On the Left: Bhairab Kunda</figcaption>
                        </div>

                        <br />
                        
                        <span id="tab" />  The trail of precarious ridge, beyond the Gumba was an easy but dangerous one. We were already above the tree zone as there was no sign of vegetation. We had reached around the altitude of 4000 meters, and suddenly it started snowing. We were lucky enough to experience snowfall which never happens in our home town. We were having the time of our lives. After nearly two nights and ten hours, we reached our final destination, ‘Lake Gosainkunda’.
                    <br /> <br />

                    
                        
                        <span id="tab" />  Popular websites note that the Gosainkunda area is delineated as a religious site. Its waters are considered holy and of particular significance during the Janai Purnima (Sacred Thread) festivals when thousands of pilgrims from Nepal and India visit the area. Hindu mythology attributes Gosainkunda as the abode of the Hindu deities Shiva and Gauri. According to the legend, Shiva swallowed poison released from the churning of the ocean, capable of destroying all of the creation. Gosainkunda is believed to have been created by Lord Shiva when he thrust his Trishul (holy Trident) into a mountain to extract water so that he could cool his stinging throat after he had swallowed the poison. I already knew this story and legend, but I did not believe in God. In this moment, however, gazing at the grandeur in front of me, I thought this must be the place of God.
                    <br /> <br />

                    <div className="image">
                            <img src={image6} alt="image3" id="image1" />
                            <figcaption>Clouds floating in the Gosainkunda.</figcaption>
                        </div>

                        <br />

                        <span id="tab" />  I could feel the snowflakes slowly dusting my cheeks and a cool breeze blowing. Reality struck. We remembered that we had to return to our normal life now. This indelible enchanting image, however, was enough to get us through the difficulties of the return trip. Fevers, sprained ankles, and altitude sickness seemed like nothing in the wake of something so majestic. Up until the end, our struggle continued, as we had to stand on the return bus and travel on that bumpy road.
                    <br /> <br />
                    <div className="image">
                            <img src={image4} alt="image4" id="image1" />
                            <figcaption>Gosaikunda Lake</figcaption>
                        </div>

                        <br />

                    
                    <CommentBox handleAddComment={this.handleAddComment} />
                    <Comments comments={this.state.comments.reverse()} />
                </div>
            </div>
        );
    }
}

export default Gosainkunda;