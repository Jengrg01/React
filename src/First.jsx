// jsx can return html files internally
import React from 'react'
// to use normal function rather than arrow function use rfce
// using rafce through extension es7+
const First = (con) => {
  return (
    <h1>
       {con.context_content}
    </h1>
  )
}

export default First