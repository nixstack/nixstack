import config from '@share/config'

export default {
  proxyRules: {
    rules: {
      '[^?]*/solr/': config.sockeIOUrl
    }
    // default: config.appIndoorHost
  }
}
