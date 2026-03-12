module.exports = {
  presets: [
    '@babel/preset-env',       // suporte a sintaxe moderna
    ['@babel/preset-react', { runtime: 'automatic' }], // suporte a JSX
    '@babel/preset-typescript' // suporte a TS/TSX
  ],
};
