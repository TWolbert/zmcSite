import Navbar from "./UIComponents/navbar";
import { useEffect } from 'react'
import { useLocation, Outlet } from "react-router-dom";
import { motion } from 'framer-motion'
function App() {

  // Get current route from react-router-dom
  const location = useLocation()

  function setDark() {
      // apply .dark classname to body
      const body = document.querySelector('body')
      body?.classList.add('dark')
  }
  useEffect(() => {
    setDark()
  }, []);
  return (
    <>
    <motion.main
        className="main__container"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{duration: 0.7}}
    >
      <Navbar location={location} />
      <Outlet />
      </motion.main>
    </>

  )
}

export default App
