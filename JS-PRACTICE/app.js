const app = new Vue({
    el : "#app",
    data : function(){
        return {
            weather : []
        }
    },

    async created(){
        return
        fetch("https://fcc-weather-api.glitch.me/api/current?lat=1297&&lon=77.59")
        .then(r => {
            // console.log(r.ok)
            r.json()
        }).then(d => {
            this.weather = d;
            console.log(this.weather)
        }).catch(e => {
            console.log(e)
        })
    }

})