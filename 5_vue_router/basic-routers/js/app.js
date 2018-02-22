// 0. If using a module system, call Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
//main,login 컴포넌트 정의
var Foo = { template: '<div>foo</div>' }
var Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.

//각 URL에 맞춰 표시할 컴포넌트 지정
var routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
//뷰 라우터 정의
var router = new VueRouter({
  mode:'history',
  routes
});

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
//뷰인스턴스에 라우터 추가
var app = new Vue({
  router
}).$mount('#app');

// Now the app has started!
