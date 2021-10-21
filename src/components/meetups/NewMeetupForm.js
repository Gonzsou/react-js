import { useRef } from "react"; /* react's concept of refs, using the 'useRef' hook, which allows us to setup references to DOM elements, thus getting direct access to DOM elements */
/* import { useState } from "react"; */ /* another way of reading an input entered values, using event listeners such as'onChange={AnEventHandlerFunction}' triggering the 'AnEventHandlerFunction(event){}' for every keystroke, then extract such value from the 'event' object, then updating the state on each given input*/

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props){
    const titleInputRef = useRef();    /*execute 'useRef()' method to instantiate a reference object, storing it on a constant, then connecting this created object to the input field we want using the react's built in special prop 'ref'*/
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function SubmitHandler(event) {     /* 'event' - the argument passed automaticaly from any react's built in event listener such 'onSubmit' into the function that will manage the response for such event */
        event.preventDefault();         /* 'preventDefault()' is a method from this 'event' javascript object which we can call to prevent the browser default response */

        const enteredTitle = titleInputRef.current.value;  /*extracting what user entered for the title input field, using the property 'current' which corresponds to the current established connection between useRef() with the input field, then accessing its value using the property 'value' */
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        props.onAddMeetup(meetupData);
//        console.log(meetupData);
    }    

    return <Card>
        <form className={classes.form} onSubmit={SubmitHandler}>  {/* 'onSubmit' - react's built in keyword used for listening to a submit event, when we want to control the browser default response by our own logic */} 
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label> {/* 'htmlFor' - react's built in keyword used for connecting the input field to this label field for screen readers */}
                <input type='text' required id='title' ref={titleInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type='url' required id='image' ref={imageInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type='text' required id='address' ref={addressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea id='description' required rows='5' ref={descriptionInputRef}/>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button> {/* a <button></button> within a <form> acts as a submit button, in contrast to when we use <button type="button"></button> */}
            </div>
        </form>
    </Card>
}
export default NewMeetupForm