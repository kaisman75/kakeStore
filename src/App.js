import Header from '../src/containers/Header';
import './App.css';
import ProductListing from './containers/product_listing';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Header/> 
          
        </Switch>
     </Router>
    </div>
  );
}

export default App;
