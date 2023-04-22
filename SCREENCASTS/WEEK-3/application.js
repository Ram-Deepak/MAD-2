// basic js code

// let message = "Hello World, Ram here";
// document.getElementById("hello").innerHTML = message;

// vue js code

//create a new vue app
var app = new Vue({
    el: "#app",  // el -> element associated with it
    data: {  // data part
        message : "Hello World!",
        visitor_name : "",  // binding from html to vue js
        visitors : []
    },
    methods:{  // method part
        sayHi : function(){
            this.message = "Said Hi";  // binding from vue js to html
            // this.count += 1; // binding from vue js to html
            this.visitors.push(this.visitor_name);
            this.visitor_name = "";
        }
    },
    computed : {
        count : function(){
            return this.visitors.length;
        }
    }
})

// since we can bind vue js to html and viceversa, we can say that vue js is capabale of two way binding