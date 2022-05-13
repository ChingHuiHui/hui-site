import { createApp, provide, h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Portfolio from './pages/Portfolio.vue'

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { createI18n } from 'vue-i18n'
import { zh, en } from '@/lang'

import StoragePlugin from '@/plugins/storage'

import './assets/styles/index.css'

// apollo
const cache = new InMemoryCache()
const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_HTTP_ENDPOINT,
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

// state management - pinaia
const pinia = createPinia()

// fontawesome
const fontAwesomePackages = [fas, fab, far]

function loadFontAwesome() {
  fontAwesomePackages.forEach((pack) => library.add(pack))

  app.component('font-awesome-icon', FontAwesomeIcon)
}

loadFontAwesome()

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    'zh-TW': zh,
    en,
  },
})

// Vue-router
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/portfolio', component: Portfolio },
]

const router = createRouter({
  history: createWebHistory('/hui-site/'),
  routes,
})

app.use(StoragePlugin)
app.use(pinia)
app.use(i18n)
app.use(router)

app.mount('#app')
