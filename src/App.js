import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './Pages/Header/Header';
import Homes from './Pages/Home/Homes/Homes';
import Footer from './Pages/Home/Footer/Footer';
import TotalService from './Pages/Main/Service/TotalServices/TotalService'
import ServiceDetails from './Pages/Main/Service/ServiceDetails/ServiceDetails';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
         <Router>
              <Header></Header>
               <Switch>
                    <Route exact path="/">
                          <Homes></Homes>
                    </Route>
                    <Route path="/homes">
                          <Homes></Homes>
                    </Route>
                    <Route path="/about">
                          <About></About>
                    </Route>
                    <Route path="/services">
                          <TotalService></TotalService>
                    </Route>
                    <Route path="/servicedetails/:id">
                          <ServiceDetails></ServiceDetails>
                    </Route>
               </Switch>
               <Footer></Footer>
         </Router>
    </div>
  );
}

export default App;
