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

