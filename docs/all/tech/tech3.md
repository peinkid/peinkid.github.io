---
title: Vue实现按需加载
---
# Vue实现按需加载的方式
### 1. vue异步组件技术  
- vue-router配置路由，使用vue的异步组件技术，可以实现按需加载。
但是，这种情况下一个组件生成一个js文件。  
举例如下：  
```javascript
{
    path: '/promisedemo',
    name: 'PromiseDemo',
    component: resolve => require(['../components/PromiseDemo'], resolve)
},
{
    path: '/promisedemo2',
    name: 'PromiseDemo2',
    component: () => import('@/views/components/PromiseDemo2'),
}
```
### 2. webpack提供的require.ensure()
- vue-router配置路由，使用webpack的require.ensure技术，也可以实现按需加载。
这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件  
举例如下：  
```javascript
{
    path: '/promisedemo',
    name: 'PromiseDemo',
    component: resolve => require.ensure([], () => resolve(require('../components/PromiseDemo')), 'demo')
},
{
    path: '/hello',
    name: 'Hello',
    component: resolve => require.ensure([], () => resolve(require('../components/Hello')), 'demo')
}
```  
 

