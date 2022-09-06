import { act } from 'react-dom/test-utils';
import '../styles/ItineraryCard.css';
import ActivityCard from './ActivitiyCard';
import CommentCard from "./CommentCard";

const arrayActivities = [
    { name: 'act1', url: 'http://drive.google.com/uc?export=view&id=1kGALp0t60av9-D-0v_kh3eOriMlWwN9h' },
    { name: 'act2', url: 'http://drive.google.com/uc?export=view&id=1kGALp0t60av9-D-0v_kh3eOriMlWwN9h' },
    { name: 'act3', url: 'http://drive.google.com/uc?export=view&id=1kGALp0t60av9-D-0v_kh3eOriMlWwN9h' }
];

const arrayComments = [
    {user:'Euge', comment:'WOWWWWW'},
    {user:'Marcos', comment:'EXCELENTEE'}
]

function ItineraryCard() {

    return (
        <>
            <div className='itinerary-container'>
                <div className='itinerary-title'>
                    <h1>Pure Adenaline</h1>
                </div>
                <div className='itinerary-info'>
                    <div>
                        <h4>Duration:</h4>
                        <p></p>
                    </div>
                    <div>
                        <h4>Price:</h4>
                        <p></p>
                    </div>
                    <div>
                        <h4>Likes:</h4>
                        <p></p>
                    </div>
                    <div>
                        <h4>Tags:</h4>
                        <p></p>
                    </div>
                </div>
                <div class="activities-container">
                    {arrayActivities.map(act => <ActivityCard name={act.name} url={act.url} />)}
                </div>
                <h3 className='comment-title'>Leave us your comment</h3>
                <div className='comment-container'>
                    <div className='comment'>
                        {arrayComments.map(comment => <CommentCard user={comment.user} comment={comment.comment}/>)}
                    </div>

                </div>
            </div>
        </>
    );
}


export default ItineraryCard;