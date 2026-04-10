import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { asyncCall, checkRedirect, initSdk } from 'wecom-sidebar-jssdk'
import config from '@/config'
import { fetchConfigSignatures, fetchUserId, fetchAgentConfigSignature } from '@/api'

import 'ant-design-vue/dist/antd.css'
import { mockSdk } from '@/mock'

// 自动 Mock
mockSdk()

Vue.config.productionTip = false

checkRedirect(config, fetchUserId) // 重定向获取 code（用户身份）
  .then(() => {
    try {
      initSdk(config, fetchConfigSignatures, fetchAgentConfigSignature)
    } catch (error) {
      alert('初始化失败1：' + JSON.stringify(error))
    }
  }).then(() => {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  })
