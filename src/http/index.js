import Vue from 'vue'
import axios from 'axios'
import services from './services'

axios.defaults.baseURL = 'http://localhost:8000/'
// axios.defaults.headers.common['Authorization'] = ''
axios.defaults.headers['Content-Type'] = 'application/json'

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios
  }
})

Object.keys(services).map(service => {
  services[service] = axios(services[service])
})


export default services

