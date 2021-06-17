import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Chat } from './Chat';
import { Header } from './Header';
import { Login } from './Login';
import { Sidebar } from './Sidebar';
import { useStateValue } from './stateProvider';

function App() {
  const [{ user }] = useStateValue();
  return (
    <div className='App'>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className='app__body'>
              <Sidebar />
              <Switch>
                <Route path='/room/:roomId'>
                  <Chat />
                </Route>
                <Route path='/'>
                  <h2>Welcome</h2>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
