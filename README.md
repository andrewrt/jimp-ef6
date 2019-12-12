# jimp-ef6
Basic Demo of Electron (w/ electron-forge v6) &amp; Jimp

This Electron + React App (w/ Webpack & Forge) shows how to create and show a grayscale basic png using [Jimp](https://github.com/oliver-moran/jimp)

### Instructions to run:

#### Developer Mode
1. Pull in this repo
2. `npm i`
3. `npm start`

#### Production Mode
1. Pull in this repo
2. `npm i`
3. `npm run package`
4. go to the `./out` folder to find the executable file that was just packaged and double click / invoke


You should see something like:
<img width="1043" alt="Screen Shot 2019-11-12 at 12 37 26 PM" src="https://user-images.githubusercontent.com/6960865/70746666-38dfa400-1cf4-11ea-9e60-9bb0b552dc0d.png">



### DIY

To create a similar project from scratch:
1. Install electron-forge v6 `npm i -g @electron-forge/cli`
2. create electron-forge project w/ webpack `electron-forge init ef6-sharp --template=webpack`
3. add react: `npm i --save react react-dom`
4. add babel: `npm i --save-dev babel-loader @babel/core @babel/preset-env`
5. add .babelrc and update webpack.rules.js & app.js as shown in above repo
