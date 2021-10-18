import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];

function AllMeetupsPage(){
    return (
      <section>
        <h1>All Meetups Page</h1>
        {/*
        <ul>
          {DUMMY_DATA.map((meetup) => {                     // calling 'map()' on an array of objects to transform array of objects into an array of list items
            return <li key={meetup.id}>{meetup.title}</li>  // assign native 'key' prop to an object's unique id, prevents warning "Each child of a list should have a unique "key" prop". (React requirement that need to update and render lists efficiently )
          })}
        </ul>
        */}
        {/* using the newly created 'MeetupList' component instead of the unordered list we used above. !!!DO NOT FORGET to import it!!!*/}
        <MeetupList meetupItems={DUMMY_DATA}/>  {/*not to FORGET: import the component and provide the name we chose for the items when we mapped the list on MeetupList component, in this case 'meetupItems'*/}
      </section>
    )}

export default AllMeetupsPage;