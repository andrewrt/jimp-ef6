import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Jimp from 'jimp/es';
//var lwip = require('lwip');

const { app } = require('electron').remote;
const fs = require('fs');
const path = require('path');


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

const ImgContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ImagePreview = styled.img`
    height: 100px;
    width: 100px;
    object-fit: contain;
`;



export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            imgUrl: undefined,
        };
    }
  

    componentDidMount(){
        const AppDataDirectory = path.resolve(app.getPath('appData'), 'jimp-ef6');
        const ImageDirectory = path.resolve(AppDataDirectory, 'images');
        if (!fs.existsSync(AppDataDirectory)) {
            fs.mkdirSync(AppDataDirectory);
            console.log('created dir', AppDataDirectory);
        }
        if (!fs.existsSync(ImageDirectory)) {
          fs.mkdirSync(ImageDirectory);
          console.log('created dir', ImageDirectory);
        }
        const filename = path.resolve(ImageDirectory, "preview.png");
        console.log('filename: ', filename);

        const grayArr = [];
        for (let i = 0; i < 100*100; i++){
            grayArr.push(0x77);
        }
        const grayUint8Arr = Uint8Array.from(grayArr);
        if (grayUint8Arr instanceof Uint8Array){
            console.log('converted array to UInt8Array');
        }
        const grayBuf = Buffer.from(grayUint8Arr);
        const width = 100;
        const height = 100;

        
        let jimg = new Jimp(width, height);
        jimg.bitmap.data = grayBuf;
        jimg.write(filename, (writeErr) => {
            if (writeErr){
                console.log('Jimp write err', writeErr);
            }
            const imgHash = Date.now().toString();
            const imgUrl = `file:///${filename.replace(/\\/g, "/")}`;
            this.setState({imgUrl});
        });

        //The below SHOULD work but: 
        // - https://github.com/oliver-moran/jimp/issues/653
        // - https://github.com/oliver-moran/jimp/issues/776
        // new Jimp({data: grayBuf, width, height}, (err, image) => {
        //     if (err){
        //         console.log('jimp error: ', err);
        //         this.setState({imgUrl: undefined});
        //     } else {
        //         image.write(fileName);
        //         this.setState({imgUrl: filename});
        //     }
        // });
    }

    render(){
        const {imgUrl} = this.state;
        if (imgUrl){
            return (
                <Container>
                   <Text>Hello From React!</Text>
                   <ImgContainer>
                        <ImagePreview src={imgUrl}  />
                   </ImgContainer>
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
