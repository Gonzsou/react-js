import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
    return( 
        <ul className = {classes.list}>
            {props.meetupItems.map( 
                meetup => (
                    <MeetupItem 
                        key={meetup.id} 
                        id={meetup.id} 
                        image={meetup.image}
                        title={meetup.title}
                        address={meetup.address}
                        description={meetup.description}
                    />
                ))} {/* "<MeetupItem aMeetup={aMeetup} />" alternatively could pass as a hole object, and then destructure it inside of the MeetupItem component */}
        </ul>
    );
}

export default MeetupList;