console.log(window.Vue)
//import { createApp } from 'vue'
//import App from './App.vue'

//createApp(App).mount('#app')

new Vue({
    el:'#app',//我要对这个div进行一个mvc的封装
//    template: `
//    <div>{{n}}</div>
//    `,
    render(h) {
        return h('div', this.n)
      },
      data:{
        n:0
    }
})