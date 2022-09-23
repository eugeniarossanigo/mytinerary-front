import { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetActivityItineraryQuery } from '../features/activitiesAPI';
import { useGetCommentItineraryQuery, useGetNewCommentMutation, useGetAllCommentsMutation  } from '../features/commentsAPI';
import { useLikeDislikeMutation } from '../features/itinerariesAPI';
import '../styles/ItineraryCard.css';
import ActivityCard from './ActivitiyCard';
import CommentCard from "./CommentCard";
import { reload } from '../features/reloadSlice';

function ItineraryCard({itinerary}) {

    const newInput = useRef("")
    const [open, setOpen] = useState(false)
    const user = useSelector(state => state.auth.user)
    const userId = user?.id
    const dispatch = useDispatch()
    const [likeDislike] = useLikeDislikeMutation()
    const reloaded = useSelector(state => state.reload.reloadState)
    const [arrayComments, setArrayComments] = useState([])
    const likesLength = itinerary.likes.length

    const handleClick = () => { open ? setOpen(false) : setOpen(true) }

    const {data: activities} = useGetActivityItineraryQuery(itinerary._id)
    
    const [addComment] = useGetNewCommentMutation()
    const [showComments] = useGetAllCommentsMutation()

    const handleShowComments = async() =>{
        try {
            let res = await showComments(itinerary._id)
            setArrayComments(res?.data.response)           
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleShowComments()
    }, [reloaded])

    const sendComment = async(e) => {
        e.preventDefault()
        const formInput = document.querySelector('.comment-input')
        const ids = {user: user?.id, itinerary: itinerary._id}
        await addComment({...ids, comment: newInput.current.value})
        formInput.reset()
        dispatch(reload())
    }

    const handleLikes = async(e) => {
        e.preventDefault()
        try {
            let res = await likeDislike(itinerary._id)
            if (res?.data.success){
                dispatch(reload())
            }
        } catch (error) {
            console.log(error)
        }
    }

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
                        <div className="likes-container">
                            { user && itinerary.likes.includes(userId) ?
                                <img className="heart-icon" src="/images/heart-full.png" alt="heart" onClick={handleLikes} />
                            :
                                <img className="heart-icon" src="/images/heart-empty.png" alt="heart" onClick={handleLikes} />
                            }
                            <p>{likesLength}</p>
                        </div>
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
                    { open ?
                        <div className='comment-container'>
                            { user && 
                                <form className='comment-input' onSubmit={sendComment}>
                                    <input type="text" name="comment" placeholder="Please leave a comment here!" ref={newInput}/>
                                    <button className="arrow-send" type="submit"><img src="/images/arrow-send.png" alt="arrow"></img></button>
                                </form>
                            }
                            <div className='comment'>
                                {arrayComments.map(comment => <CommentCard comment={comment}/>)}
                            </div>
                        </div>
                    : null
                    }
            </div>
        </>
    );
}

export default ItineraryCard;