import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Chat } from './Chat';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

function App() {
  return (
    <div className='App'>
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
