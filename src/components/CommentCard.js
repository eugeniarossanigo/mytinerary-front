import '../styles/Comment.css';
import { useSelector, useDispatch } from 'react-redux';
import { useDeleteCommentMutation, useUpdateCommentMutation, useGetAllCommentsMutation } from '../features/commentsAPI';
import { useRef, useState, useEffect } from 'react';
import { reload } from '../features/reloadSlice';

function CommentCard({comment}) {
    const newInput = useRef("")
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const commentId = comment._id

    const [deleteComment] = useDeleteCommentMutation()
    const [updateComment] = useUpdateCommentMutation()
    const [open, setOpen] = useState(false)

    const handleDelete = async(e) => {
        e.preventDefault()
        await deleteComment(commentId)
        dispatch(reload())
    }

    const handleClick = () => { open ? setOpen(false) : setOpen(true) }

    const handleEdit = async(e) => {
        e.preventDefault()
        const objcomment = {
            id: commentId,
            comment: newInput.current.value,
            user: user?.id,
            itinerary: comment.itinerary._id
        }
        await updateComment(objcomment)
        dispatch(reload())
        setOpen(false)
    }

    return (
        <>
            <div className='comments-person'>
                <div className='comments-data'>
                    <img src={comment.user.photo} alt="user"></img>
                    <h4>{comment.user.name}</h4>
                </div>
                    { open ?
                        <form>
                            <input type="text" name="comment" defaultValue={comment.comment} ref={newInput}/>
                            <button className="edit-ok" onClick={handleEdit}></button>
                        </form>
                    :
                        <p>{comment.comment}</p>
                    }
                <div className='comments-btns'>
                    { user && (user?.id === comment.user._id) &&
                        <div>
                            <img className="x-mark" src="/images/x-mark.png" alt="del" onClick={handleDelete} />
                            <img className="edit-icon" src="/images/edit-icon.png" alt="edit" onClick={handleClick} />
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default CommentCard;