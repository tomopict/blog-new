import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  async function beforeEach(to, from, next) {
    return next()
  }

  async function afterEach(to, from, next) {
    await router.app.$nextTick()
  }

  Sentry.init({
    dsn: 'https://b360938dff664cdf9166f2d92f1f5976@sentry.io/1509828',
    integrations: [new Integrations.Vue({ Vue, attachProps: true })],
  })
  Sentry.captureException(new Error("Something broke"));
  
  router.beforeEach(beforeEach)
  router.afterEach(afterEach)
}
