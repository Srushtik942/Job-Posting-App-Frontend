import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import JobPost from './Pages/JobPost.jsx'
import JobDetails from './Pages/JobDetails.jsx'
import SearchResults from './Pages/SearchResults.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path:'/post-job',
        element:<JobPost/>
      },
      // {
      //   path:'/job-posting',
      //   element:<JobDetails/>
      // },
      {
        path: '/jobs/details/:id',
        element:<JobDetails/>
      },
      {
        path:'/jobs/search',
        element:<SearchResults/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
