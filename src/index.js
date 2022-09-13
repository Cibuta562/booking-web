import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Route, Routes} from "react-router-dom";
import MainNav from "./components/layout/MainNav";
import AllBookings from "./pages/AllBookings";
import NewBooking from "./pages/NewBooking";
import Favorites from "./pages/Favorites";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <HashRouter>
        <Routes>
            <Route path="/booking-web" element={<MainNav />} />
            <Route path="/booking-web/all-bookings" element={<AllBookings />} />
            <Route path="/booking-web/new-booking" element={<NewBooking />} />
            <Route path="/booking-web/favorites" element={<Favorites />} />
        </Routes>
    </HashRouter>
    </React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
