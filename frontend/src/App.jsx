import "./App.css"
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";

function App() {
  return (
   <div className="p-4 h-screen flex items-center justify-center">
   {/* <SignUp/> */}
   {/* <Sidebar/> */}
   <Home/>
   </div>
  );
}

export default App;

