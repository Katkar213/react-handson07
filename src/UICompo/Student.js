import {useSelector} from "react-redux"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Student(){
    const receivedData=useSelector((state)=>state.std_data)
    const Navi=useNavigate();
    console.log(receivedData)
    return(
        <div>
        <button onClick={(()=>Navi("/addstudent"))}>Add new student</button>
        <table border="1">
            <thead>
            <tr>
                <th>name</th>
                <th>age</th>
                <th>course</th>
                <th>batch</th>
                <th>Link</th>
            </tr>
            </thead>
           
      <tbody>
        {receivedData.map((item,index)=>{
            return(
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.course}</td>
              <td>{item.batch}</td>
              <td><NavLink to="/editstudent" state={{index}}>Edit</NavLink></td>
            </tr>
            )
        })}
        </tbody>
           </table>
        </div>
    )
    }
 
    export default Student