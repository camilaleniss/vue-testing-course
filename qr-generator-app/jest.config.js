const config = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$': '<rootDir>/tests/styleMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
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
  transformIgnorePatterns: ['<rootDir>/node_modules/']
}

module.exports = config
