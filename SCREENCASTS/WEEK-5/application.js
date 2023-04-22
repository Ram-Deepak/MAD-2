// basic js code

// let message = "Hello World, Ram here";
// document.getElementById("hello").innerHTML = message;

// vue js code

// create a new Vue component
Vue.component("message-board",{
    props : ['title'],
    template : `
    <div>
        <h3> {{title}} </h3>
        <p> Your name : <input type="text" v-model="visitor_name"/> </p> <!-- binding from html to vue js -->
        <p> Your message : <input type="text" v-model="visitor_message" /> </p>
        <button v-on:click="sayHi">Say Hi</button>
        <!-- <p v-if="visitor_name != '' ">{{visitor_name}} said hi</p> -->
        <ul>
            <li v-for="message in messages">{{message.visitor_name}} : {{message.visitor_message}}</li>
        </ul>
    </div>
    `,
    data: function() {  // data part
        return { 
            visitor_name : "",  // binding from html to vue js
            visitor_message : "",
            messages : []
        }
    },
    methods:{  // method part
        sayHi : function(){
            // this.count += 1; // binding from vue js to html
            this.messages.push({
                "visitor_name" : this.visitor_name,
                "visitor_message" : this.visitor_message
            });
            this.visitor_name = "";
            this.visitor_message = "";
            this.$emit('add-to-global-count'); // custom event name

        }
    },
    computed : {
        count : function(){
            return this.visitors.length;
        }
    },
    beforeCreate : function(){
        console.log('Component before create');
    },
    created : function(){
        console.log('Component created');
    },
    beforeMount : function(){
        console.log('Component before mount');
    },
    mounted : function(){
        console.log('Component mounted');
    }
})



//create a new vue app
var app = new Vue({
    el: "#app",  // el -> element associated with it
    data : {
        global_count : 0
    },
    methods : {
        count_global : function(){
            this.global_count = this.global_count + 1;
        }
    },
    beforeCreate : function(){
        console.log('App before create');
        console.log(this.global_count);
    },
    created : function(){
        console.log('App created');
        console.log(this.global_count);
    },
    beforeMount : function(){
        console.log('App before mount');
    },
    mounted : function(){
        console.log('App mounted');
    }
})

// since we can bind vue js to html and viceversa, we can say that vue js is capabale of two way binding