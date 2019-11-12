# jimp-ef6
Basic Demo of Electron (w/ electron-forge v6) &amp; Jimp

This Electron + React App (w/ Webpack & Forge) shows how to create and show a grayscale basic png using [Jimp](https://github.com/oliver-moran/jimp)

### Instructions to run:
1. Pull in this repo
2. `npm i`
3. `npm start`


Demo created using electron forge 6 w/ webpack - 


### DIY

To create a similar project from scratch:
1. Install electron-forge v6 npm i -g @electron-forge/cli
2. create electron-forge project w/ webpack electron-forge init ef6-sharp --template=webpack
3. add react: npm i --save react react-dom
4. add babel: npm i --save-dev babel-loader @babel/core @babel/preset-env
5. add .babelrc and update webpack.rules.js & app.js as shown in above repo
