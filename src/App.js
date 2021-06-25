import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./Components/NavBar";
import Tabs from "./Components/Tabs";
// import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Delivery from "./Components/Delivery";
import Diningout from "./Components/Diningout";
import Nightlife from "./Components/Nightlife";
import Nutrition from "./Components/Nutrition";
import Endofresult from "./Components/Endofresult";
import Explore from "./Components/Explore";
import Footer from "./Components/Footer";
// import Login from "./Components/Login";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
      {/* <Login/> */}
        <NavBar />
        <Tabs />
        
        <Switch>
          <Route path="/" exact component={Delivery} />
          <Route path="/Diningout" component={Diningout} />
          <Route path="/Nightlife" component={Nightlife} />
          <Route path="/Nutrition" component={Nutrition} />
        </Switch>
        
        
        <Endofresult/>
        <Explore/>
        
        <Footer/>

      </div>
    </BrowserRouter>
    







    //  {/* <div className="Links">
    //    <ul style={{color:"red",listStyleType:"none"}}>
    //      <li style={{padding:2}}>
    //        <Link exact active ClassName="active_class" to="/Services" style={{color:"red",fontSize:"20px",marginTop:30}}>javascript</Link>
    //      </li>
    //      <li style={{padding:2}}>
    //        <Link exact active ClassName="active_class" to="/About" style={{color:"red"}}>reactjs</Link>
    //      </li>
    //    </ul>
    //  </div> */}
  );
}

export default App;
