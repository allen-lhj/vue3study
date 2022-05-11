
 /**
  * 应用实例
  * 
  * createApp -> 创建App -> 返回一个应用实例
  *  */ 


  const app = Vue.createApp();

  app.component('MyTitle', {
    data () {
      return {
        title: 'I LOVE VUE'
      }
    },
    template: `<h1 v-to-lower-case>{{ title }}</h1>`
  }).directive('toLowerCase', {
    mounted(el) {
      el.addEventListener('click', function () {
        this.innerText = this.innerText.toLowerCase();
      }, false)
    }
  })
  const vm = app.mount('#app');
  console.log(vm)
  /**
   * 根组件的本质就是一个对象 {}
   * createApp执行的时候需要一个根组件 createApp({})
   * 根组件是Vue渲染的起点，一堆组件总要有一个在外面的包裹的
   * 
   * 
   * 根元素是一个HTML元素
   * createApp执行创建Vue应用实例时，需要一个HTML根元素
   * mount 方法返回的是根组件的实例
   */
  
  /**
   * 每个组件都有自己的组件实例
   * 一个应用中所有的组件都共享一个应用实例
   * 无论是根组件还是应用组件内的其他的组件，
   * 配置选项，组件行为都是一样的
   */
  
  const App = {
    components: {
      /** title author content */
      
    },
    data() {
      return {
        title: 'This is a TITLE',
        authorL: 'XiaoLiu',
        content: 'This is a CONTENT'
      }
    },
    template: `
      <div>
        <my-title>{{ title }}</my-title>
        <my-author>{{ author }}</my-author>
        <my-content>{{ content }}</my-content>
      </div>
    `
  }