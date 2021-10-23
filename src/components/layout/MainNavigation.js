import { Link } from 'react-router-dom';

//'classes' is a javascript object in which all the css classes defined in the css file will be properties of this object 'classes' (we name the object)
import classes from './MainNavigation.module.css';    //does not work in standard javascript 

import { useContext } from 'react';
import FavoritesContext from '../../store/Favorites-context';


function MainNavigation(){
    const favoritesCtx = useContext(FavoritesContext);

    //JSX content here
    return (
        <header className = {classes.header}>  { /*dynamically attaching a CSS class 'header' (a property of js object 'classes') to a JSX markup tag*/}
            <div className = {classes.logo}>   
                React Meetups Logo
            </div>
            <nav>
                <ul>
                {/*    <li><a href="./">Some link</a></li> */} {/*this unecessarily fires a new request to the server, which is a redundant step since we're already at our running react application*/}
                    <li><Link to="/AllMeetups">All Meetups</Link></li>
                    <li>
                        <Link to="/Favorites">
                            My Favorites
                            <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                        </Link>
                    </li>
                    <li><Link to="/NewMeetup">Add New Meetup</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;