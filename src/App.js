import { Route, Routes, BrowserRouter } from "react-router-dom";
import AllBookings from "./pages/AllBookings";
import NewBooking from "./pages/NewBooking";
import Favorites from "./pages/Favorites";
import MainNav from "./components/layout/MainNav";
import './App.css';

function App() {
  return (
      <div>
      <MainNav/>
      </div>)

}

export default App;