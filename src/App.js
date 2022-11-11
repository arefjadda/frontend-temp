// Import dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

// Import Components, styles, media
import Navigation from "./components/Nav";
import "./App.css";

// Import Pages
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import Customers from "./pages/Customers";
import Pets from "./pages/Pets";
import Orders from "./pages/Orders";
import AddCustomer from "./pages/AddCustomer";
import AddOrder from "./pages/AddOrder";
import AddPet from "./pages/AddPet";
import AddService from "./pages/AddService";
import AddOwner from "./pages/AddOwner";
import PetSearch from "./pages/PetSearch";
import UpdatePet from "./pages/UpdatePet";
import UpdateService from "./pages/UpdateService";
import UpdateCustomer from "./pages/UpdateCustomer";
import Owners from "./pages/OwnerSearch";

// Define the function that renders the content in routes using State.
function App() {
  const [service, setService] = useState([]);
  const [pet, setPet] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [order, setOrder] = useState([]);

  return (
    <>
      <Router>
        <header>
          <h1>Peter's Pet Services</h1>
          <p>Administration Panel</p>
        </header>

        <Navigation />

        <main>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/services">
            <Services setService={setService} />
          </Route>

          <Route path="/add-service">
            <AddService />
          </Route>

          <Route path="/update-service">
            <UpdateService service={service} />
          </Route>

          <Route path="/pets">
            <Pets setPet={setPet} />
          </Route>

          <Route path="/add-pet">
            <AddPet />
          </Route>

          <Route path="/update-pet">
            <UpdatePet pet={pet} />
          </Route>

          <Route path="/pet-search">
            <PetSearch />
          </Route>

          <Route path="/owner-search">
            <Owners customer={customer} />
          </Route>

          <Route path="/customers">
            <Customers setCustomer={setCustomer} />
          </Route>

          <Route path="/add-customer">
            <AddCustomer />
          </Route>

          <Route path="/update-customer">
            <UpdateCustomer customer={customer} />
          </Route>

          <Route path="/add-owner">
            <AddOwner />
          </Route>

          <Route path="/orders">
            <Orders setOrder={setOrder} />
          </Route>

          <Route path="/add-order">
            <AddOrder order={order} />
          </Route>
        </main>

        <footer>
          <p>
            Modified on 10/26/2022.{" "}
            <cite>&copy; 2022 Group 73: Northeasterners</cite>.
          </p>
        </footer>
      </Router>
    </>
  );
}

export default App;
