config.module.rules.push({
  test: /\.(ts|tsx)$/,
  loader: require.resolve('babel-loader'),
  options: {
    presets: [
      ['react-app', { flow: false, typescript: true }],
      require.resolve('@emotion/babel-preset-css-prop')
    ]
  }
})
