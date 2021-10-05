/*
 * @Description:分栏
 * @Author: scy
 * @Date: 2021-01-08 19:21:46
 * @LastEditors: scy
 * @LastEditTime: 2021-01-21 21:22:52
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const testRouter: Array<RouteRecordRaw> = [
  {
    path: '/test',
    component: Layout,
    name: 'test',
    meta: { title: 'test' },
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "tab" */ '@/views/test-demo/index.vue'),
        name: 'Test',
        meta: { title: 'test' }
      }
    ]
  }
]

export default testRouter
