import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom"
import Home from "./Home"
import Student from "./Student"
import Contact from "./Contact"
import EditStudent from "./EditStudent"
import AddStudent from "./AddStudent"
function RoutesCompo(){
    return(
<>

<BrowserRouter>
<div className="nav">
<NavLink id="link" to="/">Home</NavLink>
<NavLink id="link" to="/student">Student</NavLink>
<NavLink id="link" to="/contact">ContactUS</NavLink>
</div>
<Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/student" element={<Student/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/editstudent" element={<EditStudent/>}></Route>
    <Route path="/addstudent" element={<AddStudent/>}></Route>
</Routes>
</BrowserRouter>




</>
    )
}
export default RoutesCompo