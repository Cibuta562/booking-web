import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainNav from "./components/layout/MainNav";
import AllBookings from "./pages/AllBookings";
import NewBooking from "./pages/NewBooking";
import Favorites from "./pages/Favorites";


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainNav />} />
            <Route path="/all-bookings" element={<AllBookings />} />
            <Route path="/new-booking" element={<NewBooking />} />
            <Route path="/favorites" element={<Favorites />} />
        </Routes>
    </BrowserRouter>, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
