const { createApp } = Vue;

const app = Vue.createApp({})
/**
 * 实例上暴露了很多方法
 * component 注册组件
 * directive：注册指令
 * filter：注册过滤器
 * use： 使用插件
 * 大多数这样的方法都会返回createApp创建出来的应用实例，目的是允许链式调用
 * 
 * 
*/
// 返回原本的应用实例
const app2 = app.component('MyTitle', {
  data() {
    return {
      title: 'I love Vue'
    }
  },
  template: `<h1 v-to-lower-case>{{ title }}</h1>`
}).directive('toLowerCase', {
  mounted (el) {
    el.addEventListener('click', function() {
      this.innerText = this.innerText.toLowerCase()
    }, false)
  }
})
console.log(app)
console.log(app2 === app)
const vm = app.mount('#app')
console.log(vm)
/**
 * 根组件的本质是一个对象
 * createApp执行的时候需要一个根组件 createApp(App/{})
 * 根组件是Vue的渲染起点
 * 
 * 根元素是一个HTML元素
 * createApp执行创建Vue应用实例时，需要一个HTML根元素
 * mount方法返回的是根组件实例
*/