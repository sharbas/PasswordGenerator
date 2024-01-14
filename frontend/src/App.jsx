import Layout from "./layout/Layout.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


function App(){
  return (
    <div>
      <ToastContainer/>
      <Layout/>
    </div>
  )
}

export default App