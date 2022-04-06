import React from 'react';
import ReactDOM from 'react-dom';
import SkeletonApp from './SkeletonApp';
import CarouselApp from './CarouselApp';
import reportWebVitals from './reportWebVitals';
import {createRoot} from 'react-dom/client'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const container = document.getElementById('root')
const root = createRoot(container!)
// root.render(<SkeletonApp />)
root.render(<CarouselApp />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
