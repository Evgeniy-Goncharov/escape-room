import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import Page404 from 'components/page-404/page-404';
import ParkingPage from 'components/parking-page/parking-page';

const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => (
              <Home pathName={routeProps.location.pathname} />
            )}
          />
          <Route
            exact
            path="/beginners"
            render={routeProps => (
              <ParkingPage pathName={routeProps.location.pathname} />
            )}
          />
          <Route
            exact
            path="/reviews"
            render={routeProps => (
              <ParkingPage pathName={routeProps.location.pathname} />
            )}
          />
          <Route
            exact
            path="/promo"
            render={routeProps => (
              <ParkingPage pathName={routeProps.location.pathname} />
            )}
          />
          <Route
            exact
            path="/contacts"
            render={routeProps => (
              <Contacts pathName={routeProps.location.pathname} />
            )}
          />
          <Route
            path="/detailed-quest/:id"
            exact
            render={(routeProps) =>
              <DetailedQuest
                id={routeProps.match.params.id}
                pathName="/"
              />}
          />
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
};

export default App;
