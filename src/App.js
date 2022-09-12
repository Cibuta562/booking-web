import { Route, Routes, BrowserRouter } from "react-router-dom";
import AllBookings from "./pages/AllBookings";
import NewBooking from "./pages/NewBooking";
import Favorites from "./pages/Favorites";
import MainNav from "./components/layout/MainNav";
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/booking-test-react.herokuapp.com" element={<MainNav />} />
            <Route path="/all-bookings" element={<AllBookings />} />
            <Route path="/new-booking" element={<NewBooking />} />
            <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;