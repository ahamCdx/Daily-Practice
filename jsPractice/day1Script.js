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

//  * Deep copy => A deep copy creates a completely independent clone, including all nested objects. so 
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