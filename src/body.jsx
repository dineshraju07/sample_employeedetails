import React,{useState} from "react";
import Axios from "axios";

function Body(){
  const [empid,setempid] = useState(0);
  const [empname,setempname] = useState("");
  const [empjoiningdate , setempjoiningdate] =useState("");
  const [empexperience,setempexperience] = useState(0);
  const [empaddress,setempaddress] = useState("");
  const [edetails,setedetails] = useState([]);
 
//   var data=false;

  const retrive = ()=>{
    Axios.get("http://localhost:3001/api/get").then((response)=>{
    setedetails(response.data.recordset);
    })}

  
    const submit = () => {
      Axios.post("http://localhost:3001/api/insert",{
        empid:empid,
        empname:empname,
        empdate:empjoiningdate,
        empexperience:empexperience,
        empaddress:empaddress,
      }).then(()=>{
        alert("inserted successfully")
      })
    };

   return (
      <div>
        <form >
        <h1 className="h1">Employee details</h1>
     
          <h3 >EmpId</h3>
           
          <input type="number"  required="required" onChange={(e)=>{
              setempid(e.target.value);
          }} 
          ></input>
            
          <h3>EmpName</h3>
          
          <input type="text" name="empname" onChange={(e)=>{
            setempname(e.target.value);
          }}
          required></input>
          <h3>EmpjoiningDate</h3>
           <input required type="date" name="empjoiningdate" onChange={(e)=>{
            setempjoiningdate(e.target.value);
          }}
           ></input>
       
          <h3>EmpExperience</h3>
          <input type="number" name="empexperience" onChange={(e)=>{
            setempexperience(e.target.value);
          }}
          required />
          <h3>EmpAdderss</h3>
          <input type="text" name="empaddress" onChange={(e) =>{
            setempaddress(e.target.value);
          }}
           required></input>
         <div><button type="submit" onClick={submit}>save</button>
          <button type="submit" onClick={retrive}>retrive</button>
           </div>
          
          <div>
        <table align="center" border="1" width="500">
        <thead>
        <tr>
        <th>empid</th>
        <th>empname</th>
        <th>empjoiningdate</th>
        <th>empexperience</th>
        <th>empaddress</th>
        </tr>
        </thead>

        {/* {if({!edetails.length){
           
            <tr>
             NO data Found 
            </tr>
     }}} */}
{/*        
        if ({edetails.map!==[]}) {
          {edetails.map((val)=>{
            return (
                <tr>
                  <td>{val.empid}</td>
                  <td>{val.empname}</td>
                  <td>{val.empdate}</td>
                  <td>{val.empexperience} </td>
                  <td>{val.empaddress}</td>
                </tr>
             )
          })}
        }  no data found */} {edetails.map((val)=>{ 
            return (
                <tr>
                  <td>{val.empid}</td>
                  <td>{val.empname}</td>
                  <td>{val.empdate}</td>
                  <td>{val.empexperience} </td>
                  <td>{val.empaddress}</td>
                </tr>
             )
          })}
          
          </table>
          </div>
          </form>
      </div>
   ) 
  }


  
export default Body; 

// <h3>empid:{val.empid} <br/>
//              empname:{val.empname} <br/>
//              empjoiningdate:{val.empdate} <br/>
//              empexperience:{val.empexperience} <br/>
//              empaddress:{val.empaddress}</h3>