
//   what is virtual DOM ?
// =>  virtual dom is a lightweight copy of real Dom.


// *  Why does the Virtual DOM exist? What problem does it solve?
// => Virtual Dom exist for make ui fatser and efficient.
// => It solves the Problem of slow and Expensive Dom manipulation.


// *  How does React’s reconciliation algorithm work ?
// => React reconciliation alogrithm is procces of updating DOM efficiently,
// => It work's step by step--
// 1st is => whenever states and props is changes, react creates a new virtal DOM .
// 2nd is => React compares the new virtal DOM  with previous one and this is called diffing.
// 3rd is => React finds the differnces and update only the changed parts on the real DOM inteasd of 
//           re-rendering everything.