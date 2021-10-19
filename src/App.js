import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './Pages/Header/Header';
import Homes from './Pages/Home/Homes/Homes';
import Footer from './Pages/Home/Footer/Footer';
import TotalService from './Pages/Main/Service/TotalServices/TotalService'
import ServiceDetails from './Pages/Main/Service/ServiceDetails/ServiceDetails';
import About from './Pages/About/About';
import NotFound from './Pages/Main/NotFound/NotFound';
import Register from './Pages/Main/Register/Register';
import Login from './Pages/Main/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Doctors from './Pages/Doctors/Doctors';

function App() {
  return (
    <div className="App">
         <AuthProvider>
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
                    <Route path="/doctors">
                          <Doctors></Doctors>
                    </Route>
                    <Route path="/services">
                          <TotalService></TotalService>
                    </Route>
                    <PrivateRoute path="/servicedetails/:id">
                          <ServiceDetails></ServiceDetails>
                    </PrivateRoute>
                    <Route path="/register">
                          <Register></Register>
                    </Route>
                    <Route path="/login">
                          <Login></Login>
                    </Route>
                    <Route path="*">
                          <NotFound></NotFound>
                    </Route>
               </Switch>
               <Footer></Footer>
         </Router>
         </AuthProvider>
    </div>
  );
}

export default App;
