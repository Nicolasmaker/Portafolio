// karma.conf.cjs
const fs = require('fs');
const path = require('path');

module.exports = function(config) {
  // Configurar Chrome de Puppeteer o del sistema
  let browsers = ['ChromeHeadless'];
  
  try {
    const puppeteer = require('puppeteer');
    process.env.CHROME_BIN = puppeteer.executablePath();
    console.log('✅ Usando Chrome de Puppeteer:', process.env.CHROME_BIN);
  } catch (error) {
    console.log('⚠️ Puppeteer no encontrado, intentando usar Chrome del sistema');
    // Rutas comunes de Chrome en Windows
    const chromePaths = [
      'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      process.env.CHROME_BIN
    ];
    
    for (const path of chromePaths) {
      if (path && fs.existsSync(path)) {
        process.env.CHROME_BIN = path;
        console.log('✅ Chrome encontrado en:', path);
        break;
      }
    }
    
    if (!process.env.CHROME_BIN) {
      console.log('⚠️ Chrome no encontrado, usando configuración por defecto');
    }
  }

  config.set({
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-webpack'),
      require('karma-chrome-launcher')
    ],
    files: [
      'src/tests/setup.js',
      'src/**/*.test.js',
      'src/**/*.test.jsx'
    ],
    preprocessors: {
      'src/tests/setup.js': ['webpack'],
      'src/**/*.test.js': ['webpack'],
      'src/**/*.test.jsx': ['webpack']
    },
    webpack: {
      mode: 'development',
      resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
          '@': path.resolve(__dirname, 'src'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@views': path.resolve(__dirname, 'src/views'),
          '@atoms': path.resolve(__dirname, 'src/components/atoms'),
          '@molecules': path.resolve(__dirname, 'src/components/molecules'),
          '@organisms': path.resolve(__dirname, 'src/components/organisms'),
          '@templates': path.resolve(__dirname, 'src/components/templates'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@assets': path.resolve(__dirname, 'src/assets'),
        }
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react', '@babel/preset-env']
              }
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: browsers,
    singleRun: true,
    autoWatch: false,
    concurrency: Infinity,
    captureTimeout: 60000,
    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 1,
    browserNoActivityTimeout: 60000
  });
};