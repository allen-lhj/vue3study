/**
 * M: Model       数据模型 ->  操作数据库（对数据进行增删改查的操作）
 * V: View        视图层   ->  显示视图和视图模板
 * C: Controller  控制器层  -> 逻辑层  数据和视图关联挂载和基本的逻辑操作
 *                            API层   前端请求的API对应的是控制器中的方法
 *          前端 -> 异步请求URL -> 控制器中的一个方法 -> 
 *          Model层的方法 -> 操作数据库 -> 获取数据 -> 返回给控制器方法 -> 响应回前端
 * 
 * 
 * 
 *   前端MVC
 *   Model  -> 管理视图所需的数据 -> 数据与视图的关联
 *   View  -> HTML 模板  + 视图渲染
 *   Controller -> 管理事件逻辑
 */

(function () {

  function init () {
    model.init();
    view.render();
    controller.init();
  }

  var model = {
    data: {
      a: 0,
      b: 0,
      s: '+',
      r: 0
    },
    init: function () {
      var _this = this;

      for (var k in _this.data) {
        (function (k) {
          Object.defineProperty(_this, k, {
            get: function () {
              // model.a -> get
              return _this.data[k];
            },
            set: function (newValue) {
              // model.a = 123; -> set
              _this.data[k] = newValue;
              // view.render({ [k]: newValue })
            }
          })
        })(k)
      }
    }
  }

  var view = {
    el: '#app',
    template: `
      <p>
        <span class="cal-a">{{ a }}</sapn>
        <span class="cal-s">{{ s }}</sapn>
        <span class="cal-b">{{ b }}</sapn>
        <span>=</sapn>
        <span class="cal-r">{{ r }}</sapn>
      </p>
      <p>
        <input type="text" placeholder="Number a" class="cal-input a" />
        <input type="text" placeholder="Number a" class="cal-input b" />
      </p>
      <p>
        <button class="cal-btn">+</button>
        <button class="cal-btn">-</button>
        <button class="cal-btn">*</button>
        <button class="cal-btn">/</button>
      </p>
    `,
    render: function (mutedData) {
      if (!mutedData) {
        this.template = this.template.replace(
          /\{\{(.*?)\}\}/g,
          function (node, key) {
            console.log(node, key)
            return model[key.trim()];
          }
        )
        console.log(this.template)

        var container = document.createElement('div');
        container.innerHTML = this.template;
        document.querySelector(this.el).appendChild(container)
      } else {
        for (var k in mutedData) {
          document.querySelector('.cal-' + k).textContent = mutedData[k];
        }
      }
    }
  }

  var controller = {
    init: function() {}
  }
  init();
})()