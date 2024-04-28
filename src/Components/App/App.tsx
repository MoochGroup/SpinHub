import './App.css'
import Layout from "../Layout/Layout";
import BaseUrl from '../BaseUrl/BaseUrl';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
function App() {

  return (
    <RouterProvider 
      router={createBrowserRouter([
        {
          path: '/',
          element: <Layout />,
          children: [
            { element: <BaseUrl />, index: true },
            { path: '*', element: <Navigate to="/" replace /> }
          ],
        },

      ])}
    />
  ); 
}

export default App
