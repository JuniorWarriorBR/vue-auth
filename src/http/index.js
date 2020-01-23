import Vue from 'vue'
import axios from 'axios'

let auth = localStorage.hasOwnProperty('auth') ? JSON.parse(localStorage.getItem("auth")) : ''

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.headers.common['Authorization'] = auth.token
axios.defaults.headers.get['Content-Type'] = 'application/json'

Vue.use(
  { install (Vue) {
    Vue.prototype.$http = axios
  }
  })
