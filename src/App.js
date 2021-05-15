import { Fragment } from 'react';
import './App.css';
import HomeItems from './components/home/HomeItems';
import Sidebar from './components/sidebar/Sidebar';
import HomeState from './context/home/HomeState';


const App = () => {

  
  return (
    <HomeState>
      <Fragment>

        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>

          <div className="col-9">
            <h2>News Feed</h2>
            <HomeItems />
          </div>
        </div>
        
      </Fragment>
    </HomeState>
  );
}

export default App;
