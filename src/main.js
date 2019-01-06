import Vue from './vue.js'
import App from './app.vue'

new Vue({
    el: '#app',
    render: creater=>creater(App)
    // components: {
    //     app:App
    // },
    // template: "<app/>"
})
import Cal from './Cal.js';
import './main.css';
console.log(Cal, 123)
