import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import News from './Components/News/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Details from './Components/Details/Details';
import Comments from './Components/Comments/Comments';


function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path='/'>
            <News></News>
          </Route>
          <Route path='/news/:newsId'>
            <Details></Details>
          </Route>
          <Route path='/comment/:postId'>
            <Comments></Comments>

          </Route>
          <Route path='*'>
            <NotFound />

          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
