import { useState } from 'react';
import { useGetActivityItineraryQuery } from '../features/activitiesAPI';
import '../styles/ItineraryCard.css';
import ActivityCard from './ActivitiyCard';
import CommentCard from "./CommentCard";

const arrayComments = [
    {user:'Euge', comment:'WOWWWWW'},
    {user:'Marcos', comment:'EXCELENTEE'}
]

function ItineraryCard({itinerary}) {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    const {data: activities} = useGetActivityItineraryQuery(itinerary._id)

    return (
        <>
            <div key={itinerary._id} className='itinerary-container'>
                <div className='itinerary-title'>
                    <h3>{itinerary.name}</h3>
                </div>
                <div className='itinerary-info'>
                    <div>
                        <h4>Duration:</h4>
                        <p>{itinerary.duration} hours</p>
                    </div>
                    <div>
                        <h4>Price:</h4>
                        <p>{itinerary.price}</p>
                    </div>
                    <div>
                        <h4>Likes:</h4>
                        <p>💟 {itinerary.likes[0]}</p>
                    </div>
                    <div>
                        <h4>Tags:</h4>
                        <p>{itinerary.tags.map(tag => " #"+tag)}</p>
                    </div>
                </div>
                <div className="activities-container">
                    {activities?.response.map(activity => <ActivityCard activity={activity} />)}
                </div>
                <p className='comment-title'>Leave us your comment below <button className="arrow-down" onClick={handleClick}>⬇️</button></p>
                    {
                    open? <div className='comment-container'>
                            <div className='comment'>
                                {arrayComments.map(comment => <CommentCard user={comment.user} comment={comment.comment}/>)}
                            </div>
                        </div>
                    : null
                    }            
            </div>
        </>
    );
}

export default ItineraryCard;