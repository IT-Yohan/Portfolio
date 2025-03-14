const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Add optimization for production build
      if (process.env.NODE_ENV === 'production') {
        // Split chunks for better caching
        webpackConfig.optimization.splitChunks = {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 20000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                // Get the name of the npm package
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                // Return a nice chunk name
                return `npm.${packageName.replace('@', '')}`;
              },
            },
            // Separate Three.js and related packages
            three: {
              test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
              name: 'three-vendor',
              priority: 20,
            },
            // Separate animation libraries
            animations: {
              test: /[\\/]node_modules[\\/](framer-motion|gsap)[\\/]/,
              name: 'animation-vendor',
              priority: 10,
            },
          },
        };
        
        // Add terser options for better minification
        webpackConfig.optimization.minimizer[0].options.terserOptions = {
          ...webpackConfig.optimization.minimizer[0].options.terserOptions,
          compress: {
            drop_console: true,
            drop_debugger: true,
          },
          output: {
            comments: false,
          },
        };
      }
      
      return webpackConfig;
    },
  },
};
