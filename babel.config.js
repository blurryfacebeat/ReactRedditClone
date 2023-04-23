module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  env: {
    production: {
      plugins: [['react-remove-properties', { properties: ['data-testid', /my-suffix-expression$/] }]],
    },
  },
};
