console.log('Hello World !')


//   Passed by value  ---vs---  Passed by Refrence


//              -------------   Variable affect  -------


// *  Passed by value =>  when a variable store primitive data value like (number, string, boolean, null, 
//                        undefined, bignint, symbol) and that is again assigned to a new variable js 
//                        creates a copy of original, variable it means two variable become a completely 
//                        independent so changing in another variable doesn't affect the original.
//  *  Example =>  

    let a = 7;
    let b = a;      // value of a is copied to be.
    b= 8;
    console.log(a)  // output is 7
    console.log(b)  // output is 8  

//  *  passed by refrence =>  when a variable assign with a non-primitive data value like (array, object,
//                            functions ) and that is again assign to a another variable then instead of
//                            copying, it passed the refrence(memory address) of that value, so changes 
//                            affect the original value also.
//  * Example =>

    let obj1 ={
        name : 'jhon'
    }
    let obj2 = obj1;       // refrence is coppied
    obj2.name = 'Alice'
    console.log(obj1.name) // output is Alice  => changes original
    console.log(obj2.name) // 
    
    

    //             -----------  Function affect ---------

// *  Passed by value =>  when a variable with primitive value is passed to a function js copies the value so 
//                        changes inside the function do not affect the original variable.

//  *  Example =>  
     function passedbyValue(y){
        y = 20
     }
     let x = 10;
     passedbyValue(x)
     console.log(x);  //   output is 10

//  *  passed by refrence =>  when a array of object is passed to a function, js paases the reference to a 
//                            function so changes iside the function affect the original variable.

//  * Example =>   

    function passedbyReference(obj){
        obj.name = 'Amit'
    }
    let obj = {
        name : 'Rahul'
    }
    passedbyReference(obj);
    console.log(obj.name)





//      Shallow copy vs Deep Copy

//  *  Shallow copy => A shallow copy copies only the first level, but nested objects are still shared
//                     (same reference). so if u changesa nested value it will affect the original object.
//   Example =>  
    const original = {
        name: "Rahul",
        address: {
            city: "Delhi"
            }
        };

        const copy = { ...original }; // shallow copy

        copy.address.city = "Mumbai";

        console.log(original.address.city); // "Mumbai" 

//  * Deep copy => A deep copy creates a completely independent copy, including all nested objects. so 
//                 changes is the copied object doesn't changes original object.
//   Example => 

    const original1 = {
        name: "Rahul",
        address: {
            city: "Delhi"
            }
        };

        const deepCopy = JSON.parse(JSON.stringify(original1));

        deepCopy.address.city = "Mumbai";

        console.log(original1.address.city); // "Delhi" 



//  *  What is let var and const ?

//  =>  let var and const all are used for declaration of variables.
//  let => let is blocked scope variable.
//         It can't be redecLared, but
//         It can be reassign.
//         It is hoisted but stay in TDZ (temproral dead zone).


//  const => const is blocked scope variable.
//           It can't be redecLared, and
//           It cann't be reassign.
//           It is hoisted but stay in TDZ (temproral dead zone).


//  var => var is functional scope variable.
//           It can be redecLared, and
//           It cann be reassign.
//           It is hoisted but as undefined.

//  * What is TDZ (Temproal Dead Zone) ?
//  => It is atime between when a variable is declared and and when it is initialized. during which we
//     we cann't acces it.
//     it is mainly used for let and const

//  *  What is Hoisting ? 
//  => Hoisting is a mechanism in js where a variable and function decleration are are moved to the top 
//     of their scope during the compilation phase before the code exucted.




// ----------------Clousres------------

//  *  What is Clousers ?
// =>  Whenever there is nested function and parent function returning the child function without calling
//     the child function and child function ha some dependency from their parent scope(lexical scope) 
//     js creates clousre. where it stores the refrence for the parent dependency and by that child will 
//     still be able to access the dependency even after parent is detoryed.

    function outer(){
        let greet = "I'm from outer fn"
        return function inner(){
            console.log(greet, 'printing from inner')
        }
    }

    let greeting1 = outer()
    greeting1()
    greeting1()

//  why we use clousres ? 
// =>  *  Data Encapsuslation
//     *  Factories Function    
//     *  To remeber values
//     *  Keep data private.





//   Synchrounous task excute line by line, and the next task wait until the previous
//   one is finishes.

// console.log('A')
// console.log('B')
// console.log('C')

// output is =>  A -> B -> C.


//   Asynchornous task allow the run task in background it doesn't block the execuation of other
//   task.

// console.log('async example')
// console.log('A')

// setTimeout(()=> {
//   console.log('B')
// },1000);

// Promise.resolve().then(()=>{
//   console.log('C')
// })

// console.log('D')

// output is  A -> D -> C -> B


//   Callback Funation => A callback fn is fn that is passed as an argument to another function
//   and executed later after some opertaion is completed.


// function greeting(name, callback){
//   setTimeout(()=>{
//     console.log(`Hello ${name}`)
//   },1000)
//   // console.log(`Hello ${name}`)
//   callback()
// }

// function sayBye(){
//   console.log('GoodyBye')
// }

// greeting('Alice', sayBye)


//  callback hell => callback hell is the situtaion where multiples callbacks are nested inside
//  each other that makes code hareder to read , understand and maintain.

// setTimeout(()=>{
//   console.log('step1')
//   setTimeout(()=>{
//     console.log('step2')
//     setTimeout(()=>{
//       console.log('step3')
//       setTimeout(()=>{
//       console.log('step4') 
//     },1000)
//     },1000)
//   },1000)
// },1000)



// function orderFood(callback){
//   setTimeout(()=>{
//     console.log('Order Food')
//     callback()
//   },1000)
// }


// function prepareFood(callback){
//   setTimeout(()=>{
//     console.log('Prepare Food')
//     callback()
//   },1000)
// }


// function getFood(callback){
//   setTimeout(()=>{
//     console.log('Get Food')
//     callback()
//   },1000)
// }


// orderFood(()=>{
//   prepareFood(()=>{
//     getFood(()=>{
//       console.log('Eat food')
//     })
//   })
// })




// function orderFood(){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       console.log('Order Food')
//       resolve()
//     },1000)
//   })
// }


// function prepareFood(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log('Preapre Food')
//       reject('gas finished')
//     },1000)
//   })
// }

// function getFood(){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       console.log('Get Food')
//       resolve('Eat food')
//     },1000)
//   })
// }

// orderFood()
// .then(prepareFood)
// .then(getFood)
// .then((res)=>console.log(res))
// .catch((error)=>console.log(error))




//  Promise => a promise is an object is js. it represet the result of asynchronous operation 
//  in future either with scuccess value amd failure value.
//  It has 3 staes Pedning , Fullfileed , Rejected

// let myPromise = new Promise((res,rej)=>{
//   let flag = false;
//   if(flag){
//     res('Yo Yo Honey Singh')
//   }else{
//     res('Badshah')
//   }
// })

// myPromise.then((res)=>console.log(res))
// .catch((rej)=>console.log(rej))


//   Promise Channing => It means executing multiple asyc task one after another. where each
//   steps wait for previous one to finish. Each.then() returns a new promise.

// function step1(){
//   return Promise.resolve('step1 done.')
// }
// function step2(){
//   return Promise.resolve('step2 done.')
// }
// function step3(){
//   return Promise.resolve('step3 done.')
// }


// step1().then((res)=>{
//   console.log(res)
//   return step2()
// })
// .then((res)=>{
//   console.log(res)
//   return step3()
// })
// .then((res)=>{
//   console.log(res)
//   setTimeout(()=>{console.log('All step done')},1000)
// })



//  Promise.all = > It used to handle multiple prommise in paralle and wait for all them to
//  complete. it takes an array of promise and return a single promise that resolves when 
//  all promise are resolved.

// let p1 = Promise.resolve('A')
// let p2 = Promise.resolve('B')
// let p3 = Promise.resolve('C')


// Promise.all([p1,p2,p3])
// .then((res)=>console.log(res))
// .catch((rej)=>console.log(rej))




















