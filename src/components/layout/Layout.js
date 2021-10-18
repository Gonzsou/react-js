import classes from './Layout.module.css'
import MainNavigation from './MainNavigation';

function Layout(props){
    return <div>
        <MainNavigation />
        <main className={classes.main}>
            {props.children} {/* {props.children} used so we can forward the JSX content located within <Layout></Layout> markups in other components, into these <main></main> tags of Layout component*/}
        </main>
    </div>
}

export default Layout;