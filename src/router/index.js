/**
 * Created by kankan on 2019/8/16.
 * E-mail: lidainzhong@gl-data.com
 * To: More pain, more gain.
 */

import Vue from 'vue';
import Router from 'vue-router';
import App from '../App.vue'

Vue.use(Router);
let router = [
  {
    path:'/',
    name:'app',
    component:(resolve) => require(['../pages'], resolve),
    children:[
      {
        path:'/map1',
        name:'map1',
        component:(resolve) => require(['../pages/map1'], resolve),
      },
      {
        path:'/map2',
        name:'map2',
        component:(resolve) => require(['../pages/map2'], resolve),
      },
      {
        path:'/map3',
        name:'map3',
        component:(resolve) => require(['../pages/map3'], resolve),
      },
    ]
  },
  {
    path:'/map',
    name:'map',
    component:(resolve) => require(['../components/HelloWorld'], resolve),
  },
];


export default new Router({
 routes:router,
  mode:'history'
});




