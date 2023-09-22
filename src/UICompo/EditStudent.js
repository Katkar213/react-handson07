
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Edit } from "../Slice/SliceCompo";


function EditStudent(){
    
const index=useLocation().state.index;
const dispatch1=useDispatch();
const data=useSelector((state)=>state.std_data)
const Navi=useNavigate()

const[info,setInfo]=useState({
    name:data[index].name,
    age:data[index].age,
    course:data[index].course,
    batch:data[index].batch
})

const handleChange=(e)=>{
   
    setInfo({...info,[e.target.name]:e.target.value})
  
   
}
function handleSubmit(){
    dispatch1(Edit({info,index}))
    Navi("/student")
    console.log(info)
    console.log(index)
}
return(
    <div>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" onChange={handleChange}></input><br/><br/>

    <label htmlFor="age">Age:</label>
    <input type="number" id="age" name="age" onChange={handleChange}></input><br/><br/>

    <label htmlFor="Course">Course:</label>
    <input type="text" id="Course" name="course" onChange={handleChange}></input><br/><br/>

    <label htmlFor="Batch">Batch:</label>
    <input type="text" id="Batch" name="batch" onChange={handleChange}></input><br/><br/>

<button onClick={()=>handleSubmit()}>Cancel</button>
<button onClick={()=>handleSubmit()}>Update</button>
    
    </div>
)

}
export default EditStudent