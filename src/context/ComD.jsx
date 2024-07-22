import React, { useContext } from 'react'
import { Global } from './GlobalContextProvider'
const ComD = () => {
    const data = useContext(Global)
  return (
    <>
    <h1>The programming language we are learning is {data.language}</h1>
    <h2>The student's firstname is {data.firstname}</h2>
    <h2>The student's lastname is {data.lastname}</h2>
    </>
  )
}

export default ComD