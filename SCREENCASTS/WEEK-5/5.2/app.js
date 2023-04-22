// Eg for synchronous function

/*
function say_hello(){
    return "hello";
}
wait = say_hello();
console.log(wait);
console.log("before");
console.log("after");
*/

// Eg for asynchronous function

/*
async function say_hello(){
    return "hello";
}

console.log("Before");

say_hello().then((v)=>{
    console.log(v);
});

console.log("After");
*/

/*
function say_hello(){
    setTimeout(function(){
        console.log("hello");
    }, 2000);
}

console.log("Before function call");
say_hello();
// console.log(say_hello());
console.log("At the end");
*/

async function say_hello(){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            resolve("async hello")
        }, 2000)
    })
}

async function func(){
    console.log("Before function call");
    // say_hello().then(function(v){
    //     console.log(v);
    // });
    wait = await say_hello();
    console.log(wait);
    console.log("At the end");
}

func();