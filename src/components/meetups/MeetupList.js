import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
    return( 
        <ul className = {classes.list}>
            {props.meetupItems.map(aMeetup => (
                <MeetupItem 
                    key={aMeetup.id} 
                    id={aMeetup.id} 
                    image={aMeetup.image}
                    title={aMeetup.title}
                    address={aMeetup.address}
                    description={aMeetup.description}
                />
                /* "<MeetupItem aMeetup={aMeetup} />" alternatively could pass as a hole object, and then destructure it inside of the MeetupItem component */            ))}
        </ul>
    );
}

export default MeetupList;