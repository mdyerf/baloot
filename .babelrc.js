module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-stage-2',
    '@babel/preset-flow',
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    'macros',
    // './src/Ruvu/ruvu',
  ],
  ignore: ['node_modules', 'build'],
};
