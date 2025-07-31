import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const reactElemnt={
//     type:'a',
//     props:{
//             href:'https://google.com',
//             target:'_balnk'
//     },
//     Children:'click me to visit google'
// }
const anotherElement=(
  <a href='https://google.com' target='_blank'>visit google</a>
)
  
const ReactELement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google'
)
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  //ReactELement
  <App/>
)
