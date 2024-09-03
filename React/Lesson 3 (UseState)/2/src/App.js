import React, { useState } from 'react'
import Dropdown from './components/Dropdown'

const App = () => {
  const [labels, setLabels] = useState(
    [
      {
        id: "1",
        label: "Item 1",
      },
      {
        id: "2",
        label: "Item 2",
      },
      {
        id: "3",
        label: "Item 3",
      }
    ]
  );

  return (
    <>
       <Dropdown labels={labels}/>
    </>
  )
}

export default App