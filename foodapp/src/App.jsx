
import './App.css';
import { Navbar } from './components/Navbar';
import { RestaurantDetails } from './components/RestaurantDetails';
import {Route,Routes} from "react-router-dom"
import { AddRestaurant } from './components/AddRestairant';
// import { data } from "./data";



function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <Routes>
         <Route path="" element={<RestaurantDetails/>}></Route>
        <Route path="/add" element={<AddRestaurant />}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
