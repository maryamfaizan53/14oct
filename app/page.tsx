"use client"
import React from 'react';
import {useState} from 'react'; 

const Home = () => {
  const[likes,setlikes] = useState(0)
  let count = 0
  return (
    <div><h1>{count}</h1></div>
  )
}

export default Home