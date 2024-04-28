import './App.css'
import Layout from "../Layout/Layout";
import SpinHub from '../SpinHub/SpinHub';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
function App() {

  return (
    <RouterProvider 
      router={createBrowserRouter([
        {
          path: '/',
          element: <Layout />,
          children: [
            { element: <SpinHub />, index: true },
            { path: '*', element: <Navigate to="/" replace /> }
          ],
        },

      ])}
    />
  ); 
}

export default App
