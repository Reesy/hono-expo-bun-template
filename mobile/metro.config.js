   // mobile/metro.config.js
   const path = require('path');
   const { getDefaultConfig } = require('expo/metro-config');

   const defaultConfig = getDefaultConfig(__dirname);

   defaultConfig.resolver.assetExts.push('cjs');

   defaultConfig.watchFolders = [
     path.resolve(__dirname, '..', 'shared'),
     path.resolve(__dirname, '..', 'frontend'),
     path.resolve(__dirname, '..', 'backend'),
   ];

   defaultConfig.resolver.extraNodeModules = {
     ...defaultConfig.resolver.extraNodeModules,
     '@shared': path.resolve(__dirname, '../shared/src'),
   };

   module.exports = defaultConfig;