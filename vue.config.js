module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'service-worker.js',
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/resume_site/'
    : '/'
}
