import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { h } from 'vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(LanguageSwitcher)
    })
  }
}

