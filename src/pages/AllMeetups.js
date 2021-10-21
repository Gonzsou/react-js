import MeetupList from '../components/meetups/MeetupList';
import { useState, useEffect } from 'react';

/*
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
*/

function AllMeetupsPage(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);   //no restriction of number of useState instantiated
    
    /*wrap the fetch function with useEffect to prevent the infinite loop, to control when the fetch() function should run */
    useEffect( () => {
      setIsLoading(true); //reset the isLoading, so that in case useEffect() run again, it returns to the original state 'true'

      fetch(
        'https://reactjs-single-page-app-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
      )
        .then( response => {         // fetch returns a promise
          return response.json();     // 'json()' is a built in method on 'response' object which gives access to the data converted from json to a plain javascript object   
        })
        .then( data => {            // but json() also returns a promise so we return response.json() and wait for this promise to resolve so we can get the actual data
          // work with the data goes here...
          
          //helper array. We need fetched data in an array 'cause we use map() method in MeetupList component. map() works works only for arrays
          const meetups = [];

          for (const key in data){
            const meetup = {
              id : key, 
              ...data[key]        //copy key:value pairs in the object stored in firebase into meetup object
            };
            meetups.push(meetup); //push each fetched object into the helper array 'meetups'
          }

          /* 
            * For 'AllMeetupsPage' to be a valid react component, it must be synchronous 
            * and return JSX code direcly, thus async await can not be used. 
            * To solve the problem of javascript returning before the promise above resolve,
            * we use the useState hook and create a condicional return 
            * (temporary JSX page 'Loading...' vs real intended return JSX code) 
            */
          setIsLoading(false);
          setLoadedMeetups(meetups);
        });    
    }, []); //empty dependencies array 'cause we have no external dependencies within fetch(), which will make this code run only once when this component 'AllMeetups' is rendered for the first time  
    
    // this is the fallback content to return while the promise above did not resolve yet
    if(isLoading){
      return (
        <section>
          <p>Loading...</p>
        </section>
      );
    }
    
    //React component is valid if Component functions are synchronous and do not return a promise but return JSX code directly 
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
          <MeetupList meetupItems={loadedMeetups}/> {/* or DUMMY_DATA*/}  
      </section>
    );
}

export default AllMeetupsPage;