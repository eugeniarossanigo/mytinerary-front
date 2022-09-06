import '../styles/ActivityCard.css';


function ActivityCard({name,url}) {
    
    return (
    <>
            <div className='activity-card'>
                <h3>{name}</h3>
                <img src={url} alt=""/>
            </div>
    </>
    );
}
    

export default ActivityCard;