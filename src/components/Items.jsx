import React, { createContext, useState } from 'react'
const ListContext = createContext();


export const ListProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [name1, setName1] = useState('');
  const [date, setDate] = useState('');
  const [status,setStatus]= useState('');
  const [asign,setAsign]= useState('');
  const [listPeople1,setListPeople1]= useState(JSON.parse(localStorage.getItem("listPeople"))||[]);
  const [Update1,setUpdate1]=useState('');

  return (
    <ListContext.Provider value={{ name,name1, date,status,asign,listPeople1,Update1,setName,setDate,setStatus,setAsign,setListPeople1,setUpdate1,setName1}}>
      {children}
    </ListContext.Provider>
  )
}

export default ListContext;