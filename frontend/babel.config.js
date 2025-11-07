// babel.config.js
export default {
  presets: [
    '@babel/preset-env',        // Use for transpiling modern JS
    '@babel/preset-react',      // Use for React JSX
    '@babel/preset-typescript'  // Use for TypeScript
  ],
  plugins: [
    '@babel/plugin-transform-modules-commonjs'  // Ensure Jest can handle ES Modules
  ]
};
