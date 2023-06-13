import React,{useContext} from 'react'
import ListProvider from "./Items"



export default function Body() {
    const listPeople = useContext(ListProvider)
    const Delete1=(c)=>{
        listPeople.listPeople1.splice(c,1);
        const item1=[...listPeople.listPeople1]
        console.log(item1);
        listPeople.setListPeople1(item1);
        localStorage.setItem("listPeople",JSON.stringify(item1));

    }
const Update1=(c)=>{
    console.log(localStorage.getItem("edit"));

    if(localStorage.getItem("edit")==null){
    localStorage.setItem("edit",c)
    listPeople.setName1(Math.random()*999);

}else{
const a={ name: listPeople.name, date: listPeople.date, status: listPeople.status, asign: listPeople.asign }

    listPeople.listPeople1.splice(c,1,a);
    const b=[...listPeople.listPeople1];
    localStorage.setItem("listPeople",JSON.stringify(b));
    localStorage.removeItem("edit")
    listPeople.setName("");

}
}




  return (
    <div>
        <div className='head-item'> 
        <table>
<tr>
    <th>#</th>
    <th>Content</th>
    <th>Due date</th>
    <th>Status</th>
    <th>Assigned</th>
    <th>Action</th>
    

</tr>
{
  listPeople.listPeople1.map((a, b) => {
    if (b!=localStorage.getItem("edit")) {
      return (
        <tr>
          <td>{b}</td>
          <td>{a.name}</td>
          <td>{a.date}</td>
          <td>{a.status}</td>
          <td>{a.asign}</td>
          <td>
            <button className="Update1" onClick={() => Update1(b)}>
              Update
            </button>
            <button className="Delete1" onClick={() => Delete1(b)}>
              Delete
            </button>
          </td>
        </tr>
      );
    }
else{
//     listPeople.setName(a.name);
//     listPeople.setDate(a.name);
//     listPeople.setStatus(a.name);
//     listPeople.setAsign(a.name);
// console.log(listPeople.name);
    return (
        <tr>
          <td>{b}</td>
          <td><input value={listPeople.name} onChange={(e)=>listPeople.setName(e.target.value)}></input></td>
          <td><input value={listPeople.date} onChange={(e)=>listPeople.setDate(e.target.value)}></input></td>
          <td><input value={listPeople.status} onChange={(e)=>listPeople.setStatus(e.target.value)}></input></td>
          <td><input value={listPeople.asign} onChange={(e)=>listPeople.setAsign(e.target.value)}></input></td>
          <td>
            <button className="Update1" onClick={() => Update1(b)}>
              Update
            </button>
            <button className="Delete1" onClick={() => Delete1(b)}>
              Delete
            </button>
          </td>
        </tr>
      );

}






  })
}




        </table>
        </div>

    </div>
  )
}
