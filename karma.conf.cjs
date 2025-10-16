// karma.conf.cjs
const fs = require('fs');

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
        extensions: ['.js', '.jsx']
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
      },
      externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
      }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadlessCustom'],
    customLaunchers: {
      ChromeHeadlessCustom: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-gpu',
          '--disable-dev-shm-usage',
          '--disable-web-security',
          '--disable-features=VizDisplayCompositor',
          '--remote-debugging-port=9222'
        ]
      }
    },
    singleRun: true,
    autoWatch: false,
    concurrency: Infinity,
    captureTimeout: 60000,
    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 1,
    browserNoActivityTimeout: 60000
  });
};