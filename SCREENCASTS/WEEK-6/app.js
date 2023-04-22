// vue js code

const store = new Vuex.Store({
    state : {
        grand_total : 0
    },
    mutations : {
        incr_grand_total(state){
            state.grand_total++;
        }
    },
    getters : {
        get_grand_total : function(state){
            return state.grand_total;
        }
    }
});

// About component
const About = Vue.component("about",{
    template:`
    <div>
        <h4>About me</h4>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
        <p>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
        <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
    </div>
    `
});

// Privacy Policy Component
const PrivacyPolicy = Vue.component("privacy-policy", {
    template:`
    <div>
        <h4>Privacy Policy</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    </div>
    `
});

// Message Board Component
const MessageBoard = Vue.component("message-board",{
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
            messages : [],
            savedIconClass : "text-success"
        }
    },
    methods:{  // method part
        sayHi : function(){
            // this.count += 1; // binding from vue js to html
            this.messages.push({
                "visitor_name" : this.visitor_name,
                "visitor_message" : this.visitor_message
            });

            this.savedIconClass = 'text-warning';

            // sending through api
            fetch("https://httpbin.org/post",{  
                method : 'POST',                // request body
                headers: {
                    'Content-type' : 'application/json',
                },
                body : JSON.stringify({
                    "for":this.title, 
                    "visitor_name":this.visitor_name, 
                    "visitor_message":this.visitor_message
                })
            }).then(response => response.json())
            .then(data => {
                console.log(data);
                this.savedIconClass = "text-success";
            })
            .catch(err => {
                console.log(err);
                this.savedIconClass = "text-danger";
            });

            this.visitor_name = "";
            this.visitor_message = "";
            // this.$emit('add-to-global-count'); // custom event name
            this.$store.commit('incr_grand_total'); // commiting the mutation

        }
    },
    computed : {
        count : function(){
            return this.visitors.length;
        }
    }
});

//routes to the components
const routes = [
    {
        path : '/',
        component : MessageBoard,
        props : {title : "Ram"}
    },
    {
        path : '/about',
        component : About
    },
    {
        path : '/privacy-policy',
        component : PrivacyPolicy
    }
];

const router = new VueRouter({
    routes // short form for routes : routes
});

//create a new vue app
const app = new Vue({
    el : "#app",  // el -> element associated with it
    router : router, // router -> routes of components of the app
    store : store,
    methods : {
        count_global : function(){
            this.grand_total = this.grand_total + 1;
        }
    },
    computed : {
        grand_total : function(){
            // direct attribute access
            // return store.state.grand_total;
            // return this.$store.state.grand_total;

            // accessing using getters
            // return this.$store.getters.get_grand_total;
            return store.getters.get_grand_total;
        }
    }
});

// since we can bind vue js to html and viceversa, we can say that vue js is capabale of two way binding