/**
 * Context is designed to make data that can be considered “global”, availabe for a tree of React 
 * components, such as the current authenticated user, theme, favorite items, or preferred language, etc.
 */

import { createContext, useState } from "react";

//CREATE THE CONTEXT
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    //keys added here in the initial created context, and set them to empty functions indicating the correct expected parameters, just for giving us better autocompletion later when using the IDE  
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {},
}); //uppercase because this object created with createContext() contains a react component


/* 
 * This component provides this context to all components interested for listening to the values,
 * and is also responsible for updating the context values 
 */
export function FavoritesContextProvider(props){    //use 'export' keyword to make it possible interact with this function from outside this file (in this case in index.js to make it available to all the components of the app)
    //logic to manage context goes here...
    
    //CREATE THE STATE VARIABLE
    const [userFavorites, setUserFavorites] = useState([]);


    //MAKE CHANGES TO THE STATE
    function addFavoriteHandler(favoriteMeetup){
        // React does not proccess state updates instantly but it schedules them, thus using 
        // 'setUserFavorites(userFavorites.concat(favoriteMeetup))' does not necessarily reflect 
        // the latest state. To solve this we should pass a function '() => {}', this way forcing React
        // to execute these functions in the correct order and by then reflecting the latest state 
        setUserFavorites( (prevUserFavorites) => {              
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId){
        setUserFavorites( (prevUserFavorites) => {
            return (
                // 'filter()' returns a new array where we can filter out items. 
                // 'filter()' expects a function as argument that executes for every item in the array                                            
                // 'filter()' has to return true to keep the filtered item, or false to remove it from array 
                prevUserFavorites.filter(arrayItemObject => arrayItemObject.id !== meetupId)
            );
        });
    }

    function itemIsFavoriteHandler(meetupId){
        return (
            // 'some()' built-in method of javascript, expects a function as argument that executes for every item in the array
            // 'some()' returns true if the function passed as an argument returns true for at least one of the items in the array
            userFavorites.some(arrayItemObject => arrayItemObject.id === meetupId)
        );
    }


    //UPDATE THE CONTEXT DINAMICALLY WITH THE STATE VARIABLE SNAPSHOT  
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        //we can also add keys which stores a pointer to each of the handler functions, thus exposing these handler functions to all the consuming components
        addFavorite: addFavoriteHandler,            
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    };


    /* 
     * Every Context object comes with a Provider React component that allows consuming components 
     * to subscribe to context changes. 
    */
    return(
        <FavoritesContext.Provider value={context}>     {/* This Provider component accepts a value prop (the created context), to be passed to consuming components descendants of this Provider */}
            {props.children}                            {/* {props.children} allows to wrap 'FavoritesContextProvider' component around other components */}
        </FavoritesContext.Provider>
    );
} 

export default FavoritesContext;