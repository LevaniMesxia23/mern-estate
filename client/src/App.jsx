import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import SignUp from "./pages/SignUp"
import Signin from "./pages/Signin"
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"
function App() {

  return (
    <>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />}/>
            </Route>
            <Route path="/signin" element={<Signin />}/>
            <Route path="/signup" element={<SignUp />}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
