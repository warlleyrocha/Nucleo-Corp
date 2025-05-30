import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// conf router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Music from "./routes/Music";
import Video from "./routes/Video";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/NucleoCorp",
    element: <App />,
    errorElement: < ErrorPage/>,
    children: [
      {
        path: "music",
        element: <Music />,
      },
      {
        path: "video",
        element: <Video />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);