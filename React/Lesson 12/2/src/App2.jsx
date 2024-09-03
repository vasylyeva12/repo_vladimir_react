import React from 'react'
import MyProvider from './MyProvider.jsx'
import Counter from './components/Counter/Counter.jsx'
import Counter2 from './components/Counter2/Counter2.jsx'

const App = () => {
  return (
   <>
    <MyProvider>
        <Counter />
        <Counter2 />
    </MyProvider>
   

    <MyProvider>
        <Counter2 />
    </MyProvider>
   </>
  )
}

export default App