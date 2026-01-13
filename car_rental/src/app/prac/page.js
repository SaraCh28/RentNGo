'use client'
import React, { useState } from 'react'
// import {useState} from 'react'

function Subscribe() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

function SubmitHandler(e){
    e.preventDefault();
    setError("")
    setSuccess("")

    if(!email){
    setError("Please Enter Email");
    return;}

   setSuccess("Submitted Successfully")

   setEmail("")
   }
  return (


    <div>
        <form classname=""              >
        <input type="email" name="email" 
        placeholder = "Enter Your Email"
        onChange = {(e)=>setEmail(e.target.value)}>
        </input>
        
        {error && <p classname="red-500">{email}</p>}
        {success && <p classname="green-500">{success}</p>}

        <button classname="px-2 py-1 rounded" type="submit">
        submit </button>
        </form>



    </div>
  )
}

export default Subscribe