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

        const pixArr = [];
        const red = 0x33;
        const green = 0xee;
        const blue = 0x00;
        const alpha = 0xff;
        for (let i = 0; i < 100*100*4; i+=4){
            pixArr.push(red);
            pixArr.push(green);
            pixArr.push(blue);
            pixArr.push(alpha);
        }
        const pixUint8Arr = Uint8Array.from(pixArr);
        if (pixUint8Arr instanceof Uint8Array){
            console.log('converted array to UInt8Array');
        }
        const imgBuf = Buffer.from(pixUint8Arr);
        const width = 100;
        const height = 100;

        
        // Unsafe data set method:
        // let jimg = new Jimp(width, height);
        // jimg.bitmap.data = imgBuf;
        // jimg.write(filename, (writeErr) => {
        //     if (writeErr){
        //         console.log('Jimp write err', writeErr);
        //     }
        //     const imgHash = Date.now().toString();
        //     const imgUrl = `file:///${filename.replace(/\\/g, "/")}`;
        //     this.setState({imgUrl});
        // });

        new Jimp({data: imgBuf, width, height}, (err, image) => {
            if (err){
                console.log('jimp error: ', err);
                this.setState({imgUrl: undefined});
            } else {
                image.write(filename, (writeErr) => {
                    if (writeErr){
                        console.log('Jimp write err', writeErr);
                    }
                    const imgHash = Date.now().toString();
                    const imgUrl = `file://${filename.replace(/\\/g, "/")}`;
                    this.setState({imgUrl});
                });
            }
        });
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
