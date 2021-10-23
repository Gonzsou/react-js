import { useContext } from 'react';

import FavoritesContext from '../store/Favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage(){
    //call useContext() whith the object created in the context file as parameter, it gives us the current context snapshot 
    const favoritesCtx = useContext(FavoritesContext);   //connect to the favorites context

    let content;

    if(favoritesCtx.totalFavorites === 0){
        content = <p> You didn't add any favorites. Add some? </p>
    } else {
        content =  <MeetupList meetupItems = {favoritesCtx.favorites} />;
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
}

export default FavoritesPage;