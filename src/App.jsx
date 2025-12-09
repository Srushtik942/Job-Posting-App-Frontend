import './App.css'
import { Outlet } from 'react-router-dom';
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
    <div><Toaster/></div>
    <Outlet/>
    </>
  )
}

export default App
