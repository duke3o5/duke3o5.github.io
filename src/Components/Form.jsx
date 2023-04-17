import React, { useState } from 'react'
import "./form.css"
const Form = () => {
    const [data ,setdata] =useState({})
   
    const handlechange=(e)=>{
     const {name,value}=e.target
     setdata({
        ...data,
        [name] :value
     })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data)
    }
  return (

    <div>
        <form  onSubmit={handleSubmit}>
          <div className='con'>
            <input type="text" placeholder='First Name' className="tech-icons" onChange={handlechange} name="first_name"/>
            <input type="text" placeholder='Last Name' className="tech-icons" onChange={handlechange} name="last_name"/>
          </div>
           <div className='emailcard'>
           <input type="text" placeholder='Email' className="tech-icons email" onChange={handlechange} name="email"/>
            <input type="submit" value="Send" className='btn-1' />
           </div>
           
        </form>
    </div>
  )
}

export default Form