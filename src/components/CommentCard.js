import '../styles/Comment.css';

function CommentCard({comment , user}) {

    return (
        <>
            <div className='pers'>
                <h4>{user}:</h4>
                <p>{comment}.</p>
            </div>
        </>
    );
}


export default CommentCard;