import router from '@/router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
NProgress.configure({ showSpinner: false }) // NProgress Configuration
router.beforeEach((to, from, next) => {
  NProgress.start()
  // set page title
  document.title = to.meta.title || process.env.VUE_APP_TITLE
  next()
})
router.afterEach(() => {
  NProgress.done() // 结束进度条
})
