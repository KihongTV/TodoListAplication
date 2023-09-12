import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from "../component/item"
function Home() {

  //States
  const [formtext,setFormtext]=useState('')
  const [todo,setTodo]=useState({todo:[]})
  
  //FORM Handler
  const formsubmithandler=async(e)=>{
    e.preventDefault()
    sendData(formtext);
    window.location.reload(false);

    
} 
  
  
  const formonchangehandler=(e)=>{
      setFormtext(e.target.value)
      
  } 
  // Connect To DataBase
  const sendData = async (formtext) => {
    try {
      const response = await axios.post('http://localhost:8800/todo', {text:formtext});
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  async function fetchData() {
    // You can await here
    const response = await axios.get('http://localhost:8800/todo')
    
    setTodo({todo:[...response.data]})
    // ...
  }
    useEffect(() => {
      
      fetchData();
    }, []);
  return (
    <>
      <div className='w-full h-full pt-10'>
         <form onSubmit={formsubmithandler} className='flex flex-col justify-center items-center'>
             <input type='text' minLength='5'  placeholder='چه کاری رو میخوای اضافه کنی:' className='py-5 px-10 w-96 border-b-4 focus-visible:outline-none peer-valid:border-b-blue-600  invalid:border-b-red-600 shadow-none border-b-cyan-500' onChange={formonchangehandler}></input>
             <button className='border-none w-40 bg-cyan-500 mt-5 py-2 px-3 rounded-lg'>ارسال</button>
        </form>
      </div>
      <div className='mt-16 flex flex-col items-center gap-2 '>
            {todo.todo.length===0?<h2  className='text-red-500'>کار انجام نشده یافت نشد !!!</h2>:todo.todo.map(item=>
            <Card key={item.id} item={item} ></Card>
            )}
      </div>
    </>
  )
}

export default Home
