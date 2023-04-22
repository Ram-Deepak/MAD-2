//creating a new vue component
Vue.component("search-box",{
    template: `
    <div>
        <input type="text" v-model="query" placeholder="Enter the query"/>
        <button>Search</button>
    </div>
    `,
    data : function (){
        return {
            query : ""
        }
    }
});

//creating a new vue app
var app = new Vue({
    el: "#app",
    data : {
        header : "Wikipedia, the free encylopedia"
    }
})