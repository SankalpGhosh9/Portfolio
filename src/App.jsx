import "./App.css"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import {Outlet} from "react-router-dom"
const App = () => {
  return (
    <>
    <Sidebar/>
    <div className="main-content">
      <Navbar/>
      <section style={{scrollBehavior:"smooth"}}>
        <Outlet/>
      </section>
    </div>
    </>
  )
}

export default App