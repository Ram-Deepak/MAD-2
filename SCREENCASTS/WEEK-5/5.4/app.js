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
        <i class="bi bi-cloud-arrow-up-fill" v-bind:class="savedIconClass"></i>
        <h4> Messages </h4>
        <ul>
            <li v-for="message in messages">{{message.visitor_name}} - {{message.visitor_message}}</li>
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
    }
})

// since we can bind vue js to html and viceversa, we can say that vue js is capabale of two way binding