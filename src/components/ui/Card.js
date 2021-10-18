import classes from './Card.module.css';

/*This component Card works as a wrapper, making use of props trough {props.children} in order to forward the content within jsx markup tag <Card></Card> here, wherever <Card> is used*/
function Card (props){
    return <div className={classes.card}>{props.children}</div> 
}

export default Card;