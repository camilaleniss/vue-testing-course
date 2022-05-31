const config = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '^@root(.*)$': '<rootDir>/src$1',
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$': '<rootDir>/tests/styleMock.js',
    'vuetify/styles': '<rootDir>/tests/styleMock.js'
  },
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\js$': 'babel-jest',
    '^.+\\.(t|j)sx?$': [
      'esbuild-jest',
      {
        sourcemap: true,
        loaders: {
          '.spec.ts': 'tsx'
        }
      }
    ]
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  transformIgnorePatterns: ['/node_modules/(?!vuetify)'],
  setupTestFrameworkScriptFile: '<rootDir>tests/setupTests.js'
}

module.exports = config
