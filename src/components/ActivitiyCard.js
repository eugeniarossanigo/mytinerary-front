import '../styles/ActivityCard.css';

export default  function ActivityCard({activity}) {
    
    return (
    <>
        <div className='activity-card'>
            <h5>{activity.name}</h5>
            <img src={activity.photo} alt=""/>
        </div>
    </>
    );
}
