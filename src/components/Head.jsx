import React,{useContext} from 'react'
import ListProvider from "./Items"


export default function Head() {
    const listPeople = useContext(ListProvider)
 console.log(listPeople.listPeople1);
 const handleAdd = () => {
    listPeople.setListPeople1((ab) => {
        localStorage.setItem("listPeople", JSON.stringify([...ab, { name: listPeople.name, date: listPeople.date,
             status: listPeople.status, asign: listPeople.asign }]));
        return [...ab, { name: listPeople.name, date: listPeople.date, status: listPeople.status, asign: listPeople.asign }];
    });
    // listPeople.setName("");
    // listPeople.setDate("");
    // listPeople.setStatus("");
    // listPeople.setAsign("");

}

// localStorage.setItem("listPeople",JSON.stringify(a));


  return (
    <div>
<div className='head-item'>
        <input placeholder='Tên Khoá Học' onChange={(e)=>listPeople.setName(e.target.value)} value={listPeople.name}></input>
        <input type="date" onChange={(e)=>listPeople.setDate(e.target.value)} value={listPeople.date}></input>
        <select onChange={(e)=>listPeople.setStatus(e.target.value)} value={listPeople.status}>
            <option name="Choose">Choose</option>
            <option name="Pending">Pending</option>
            <option name="Full">Full</option>
        </select>
        <input placeholder='Assign' onChange={(e)=>listPeople.setAsign(e.target.value)} value={listPeople.asign}></input>
        <button onClick={handleAdd}>Submit</button>
        </div>
    </div>
  )
}
