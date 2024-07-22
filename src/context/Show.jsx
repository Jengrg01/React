import React from 'react'
import ComA from './ComA'
import GlobalContextProvider from './GlobalContextProvider'
// If props was used to display the data in comD from the main parent Show.jsx, it would create a nested child
// so instead we can use createContext which is a method to make data global and pass throughs components without having manually go through levels such as in props
const Show = () => {
  return (
    <>
    {/* <ComA data={'React js'}/> instead of using this which is props we use through context */}
    <GlobalContextProvider>
      <ComA/>
    </GlobalContextProvider>
    </>
  )
}

export default Show