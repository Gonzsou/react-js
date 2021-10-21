import { useHistory } from "react-router-dom"; //built in hook which allows to manipulate the browser history

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(){

    const history = useHistory(); //instantiates an object from 'useHistory' builtin hook allows manipulation of browser history. For that we make use of the 'then' block when fetch() resolves, since fetch returns a promise. 

    function addMeetupHandler(meetupData){
        fetch(                      //alternatively we can use 3rd party library such as 'axios'. By default fetch() sends a GET request, but for storing data most backend APIs requires POST request so we need to specify it 
            'https://reactjs-single-page-app-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
            {                       //fetch() accepts an object as a 2nd argument used to configure the fetch() call 
                method: 'POST',     //method property is the http method to use
                body: JSON.stringify(meetupData), //body property refers to the data we want to store. For that we can use stringify() passing it some default javascript objects/arrays/values which will be converted into json
                headers: {
                    'Content-Type': 'application/json'  //using 'Content-Type' header is sometimes required by some APIs, which add an extra metadata together with the request to indicate exactly what type of data is being carried
                }
            }
        ).then(()=> {               // making use of the  object 'history', instantiated by 'useHistory()' method of builtin hook 'useHistory' to manipulate redirect after submit. For that we make use of the 'then' block when fetch() resolves, since fetch returns a promise. Could also be used with the form async await instead of '.then()'   
            history.replace('/');   //'replace' method navigate us away to a chosen link but it won't allow us to use back button go back to the previous page, as it happens to the push() method    
        });
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
}

export default NewMeetupPage;