const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Remove 'cjs' from assetExts if it exists
defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(
  (ext) => ext !== 'cjs'
);

// Add 'cjs' to sourceExts to treat as source code
defaultConfig.resolver.sourceExts.push('cjs');

// Include shared, frontend, and backend directories in watchFolders
defaultConfig.watchFolders = [
  path.resolve(__dirname, '..', 'shared'),
  path.resolve(__dirname, '..', 'backend'),
];

// Ensure Metro can resolve 'hono' and '@shared' correctly
defaultConfig.resolver.extraNodeModules = {
  ...defaultConfig.resolver.extraNodeModules,
  'hono': path.resolve(__dirname, '../node_modules/hono'),
  '@shared': path.resolve(__dirname, '../shared/src'),
};

module.exports = defaultConfig;