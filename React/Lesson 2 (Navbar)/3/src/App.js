import React, { createElement } from 'react'

const NavbarItem = ({ label }) => {
  return <li>{label}</li>
}

const App = () => {

  // let title = createElement(
  //   "h2", { className: "title" }, "This is title!",
  //   createElement(
  //     "span", { className: "text" }, "This is title!"
  //   )
  // );


  // let content = createElement(
  //   "div", { className: "content" },
  //     createElement( "h2", { className: "content__title" }, "Hello world !!!"),
  //     createElement( "p", { className: "content__desc" }, "Lorem ipsum dolor sit amet."),
  // )

  // return content;

  const navbarArray = [
    {
      id: "1",
      label: "Link 1"
    },
    {
      id: "2",
      label: "Link 2"
    },
    {
      id: "3",
      label: "Link 3"
    },
    {
      id: "4",
      label: "Link 4"
    }
  ]


  let x = "Hello world";

  return (
    // <h2 className='title'>This is Title! <span className='text'>This is Text!</span></h2>
    // <div className="content">
    //     <h2 className='content__title'>Hello world !!!</h2>

    //     <p className='content__desc'>Lorem ipsum dolor sit amet.</p>
    // </div>


    <ul>
      {
        navbarArray && navbarArray.map(item => <NavbarItem label={item.label}/>)
      }
    </ul>
  )
}

export default App