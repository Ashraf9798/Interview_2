

// 3 statement -> 
// open a shop
// prepare order
// close shop


// console.log("open" )
// delay -> js dont way ❌ -> browser -> delay yes -> setTimeout()

// 1s = 1000 ms
// setTimeout(a , b)
// let id = setTimeout(function(){
//     console.log("prepare food please await 5 secs?" )
// } , 5000)

// id = setTimeout(function(){
//     console.log("prepare food please await 5 secs?" )
// } , 5000)


// console.log("close" )


// const promise = new Promise(function C(resolve, reject) {
//     console.log(1);
//     setTimeout(function D() {
//         console.log("timerStart");
//         resolve("success"); 
//         console.log("timerEnd");
//     }, 0);
//     console.log(2);
// });

// promise.then(function f(res) {
//     console.log(res);
// });

// setTimeout(function E() {
//     console.log("Are!!");
// }, 0);

// console.log(4);

//4
//1
//2
//timer starts
//timerends
//success
//are

// new Promise(function(resolve , reject){
//     reject(1)
//     resolve(10)
// })


// function Employee () {
//     this.a =20;
//      this.b =30;
//      return function(){
//         return 2
//      }
//    }
  
  
// const data = new Employee()
  
  
// const data2 = Employee();
  
// console.log(data) // constructor -> newly created object => data {}
  
// console.log(data2) // this points to the window // {}



// const object = {
//     a: 20 , 
//     b: 30 , 
//     aa() {
//      console.log(this.a , this.b)
//     }
//   }
  
//   const  aa = object.aa;
//   aa();
  //window

//   const object = {
//     a: 20 , 
//     b: 30 , 
//    aa() {
//      function call() {
//        console.log(this.a , this.b) //window
//      }
//      call();
 
//      const call2 =()=>{
//        console.log(this.a , this.b) // object
//      }
 
//      call2()
//     },
//    aa1 :  ()=> {
//      console.log(this.a , this.b) //window
//     }
//   }
//   object.aa()



//   ------------


const promise = new Promise(function C(resolve, reject) {
    console.log(1);
  setTimeout(function D() {
    console.log("timerStart");
    resolve("success"); //
    console.log("timerEnd");
  }, 0);
  console.log(2);
});
promise.then(function f(res) {
  console.log(res);
});
setTimeout(function E() {
  console.log("Are!!");
}, 0);
console.log(4);

function Employee () {
this.a =20;
 this.b =30;
 return 20
}


const data = new Employee()


const data2 = Employee();

console.log(data)

console.log(data2)


const object = {
 a: 20 , 
 b: 30 , 
aa() {
  console.log(this.a , this.b)
 },
aa :  ()=> {
  console.log(this.a , this.b)
 }
}

const  aa = object.aa;
aa();


const object = {
 a: 20 , 
 b: 30 , 
aa() {
  function call() {
    console.log(this.a , this.b)
  }
  call();

  const call2 =()=>{
    console.log(this.a , this.b)
  }

  call2()
 },
aa1 :  ()=> {
  console.log(this.a , this.b)
 }
}
object.aa()