import { Add } from "../Slice/SliceCompo";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddStudent(){
    const dispatch=useDispatch()
    const Navi=useNavigate()
    const [info,setInfo]=useState({
        name:"",
        age:"",
        course:"",
        batch:"",
    })
  const  handleChange=(e)=>{
        setInfo({...info,[e.target.name]:e.target.value})
    }


    const handleSubmit=()=>{
        dispatch(Add(info))
        Navi("/student")
    }
    return(
        <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={handleChange} ></input><br/><br/>

        <label htmlFor="age">Age</label>
        <input type="text" name="name" id="age" onChange={handleChange} ></input><br/><br/>

        <label htmlFor="course">Course</label>
        <input type="text" name="name" id="course" onChange={handleChange} ></input><br/><br/>

        <label htmlFor="batch">Batch</label>
        <input type="text" name="name" id="batch" onChange={handleChange} ></input><br/><br/>
        
        <button onClick={handleSubmit}>Update</button>
        <button onClick={handleSubmit}>Cancel</button>
        </div>
    )
}
export default AddStudent