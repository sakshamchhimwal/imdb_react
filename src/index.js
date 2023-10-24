import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomePage from './pages/home';
import Movies from './pages/movie';
import People from './pages/people';
import Series from './pages/series';
import Shows from './pages/shows';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/movies",
    element: <Movies />
  },
  {
    path: "series",
    element: <Series />
  },
  {
    path: "shows",
    element: <Shows />
  },
  {
    path: "people",
    element: <People />
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

