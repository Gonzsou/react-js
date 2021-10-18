import { Route, Switch } from "react-router";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path = '/' exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path = '/allmeetups' exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path = '/favorites'>
          <FavoritesPage/>
        </Route>
        <Route path = '/newmeetup'>
          <NewMeetupPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
