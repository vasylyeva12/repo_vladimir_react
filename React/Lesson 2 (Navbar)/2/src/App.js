import React, { createElement } from 'react'

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

  return (
    // <h2 className='title'>This is Title! <span className='text'>This is Text!</span></h2>

    // <div className="content">
    //     <h2 className='content__title'>Hello world !!!</h2>

    //     <p className='content__desc'>Lorem ipsum dolor sit amet.</p>
    // </div>


    <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
    </ul>
  )
}

export default App