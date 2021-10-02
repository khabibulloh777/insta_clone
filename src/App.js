import './styles/App.css';
import Home from './routes/home-pages/Home';
import Login from './routes/login-page/Login';
import {BrowserRouter as Router ,Route , Switch} from 'react-router-dom'
import Chat from './routes/chat/Chat';
import Compos from './routes/Compos/Compos';
import { useStateValue } from './context/stateprovider/StateProvider';
import Profil from './components/Profil/Profil';

function App() {
  const [{user}] = useStateValue();


  return (
   <Router>
      <div className="app">
      <Switch>
      {
         user ?
       <>
        <Route exact path="/" component={Home}/>
        <Route exact path="/chat" component={Chat}/>
        <Route exact path="/explore" component={Compos}/>
        <Route exact path="/:username" component={Profil}/> 
        </>
        : <Login/>
      }
      <Login/>
      </Switch>
    </div>
   </Router>
  );
}

export default App;
