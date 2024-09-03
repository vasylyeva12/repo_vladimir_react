import React from 'react';

const ListItem = (props) => {

  return (
    <li className='list-item'>{props.title}</li>
  )
}

const App = () => {

  let title = "This is first lesson!"

  return (
    <>
      <h2>{title}</h2>

      <ul className='list'>
        <ListItem title="Lesson 1"/>
        <ListItem title="Lesson 2"/>
        <ListItem title="Lesson 3"/>
      </ul>
    </>
  )
}

export default App;


// let props = {}

// props.title = "Lesson 1";

// let {title} = props;