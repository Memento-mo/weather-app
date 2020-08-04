import Vue from 'vue'
import VueCookies from 'vue-router'

declare module 'vue/types/vue' {
  interface VueConstructor {
    $cookies: any
  }
}
