import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import About from './pages/About.jsx'
import Resume from './pages/Resume.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    //errorElement: <n/a/>
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "/resume",
        element: <Resume />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
