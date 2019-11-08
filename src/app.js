/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */
import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

 //var debug = require('debug')('sharp'), 
 //const sharp = require('sharp')
 //, name = 'My App';
 import Jimp from 'jimp/es';


 //var lwip = require('lwip');
 

 const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #333;
 `;

 const Text = styled.div`
    font-size: 20px;
    color: #ccc;
    text-align: center;
 `;

 
//debug('booting %o', name);


 //const sharp = require('sharp');

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            imgUrl: 'preview.png',
        };
    }

    componentDidMount(){
        // const grayArr = [];
        // for (let i = 0; i < 100*100; i++){
        //     grayArr.push(0x77);
        // }
        // const grayBuf = Buffer.from(grayArr);
        // let jimg = new Jimp(100, 100);
        // jimg.bitmap.data = grayBuf;
        // jimg.write('preview.png');
        // this.setState({imgUrl: 'preview.png'});

        // Jimp.read().then(image => {
            
        //     image.bitmap.width = 100; // the width of the image
        //     image.bitmap.height = 100; // the height of the image

        //     this.setState({imgUrl: 'preview.png'});
        // }).catch(err => {
        //     console.log('error in jimp: ', err);
        // });
    }

    render(){
        const {imgUrl} = this.state;
        if (imgUrl){
            return (
                <Container>
                   <Text> Hello From React!</Text>
                   <img src={imgUrl} />
                </Container>
            );
        }
        return (
            <Container>
               <Text> Hello From React!</Text>
            </Container>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
