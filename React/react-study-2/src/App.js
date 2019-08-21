import React, {Component, Fragment} from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import './css/pure-min.css';
import './css/side-menu.css';
import './css/grids-min.css';
import './css/grids-responsive-min.css';
import './css/style.css';
import Menu from './Components/Menu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CLOUDINARY_UPLOAD_PRESET = 'kfolder';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/kareka/upload';


class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      uploadedFileCloudinaryUrl: ''
    };
  }
  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);
    console.log(upload);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
        toast.error(`Somethig wrong happen, please try again. ${err}`,{
          closeButton:true, 
          autoClose:5000,
          position: toast.POSITION.TOP_RIGHT,
          progressClassName:'fancy-progress-bar'
        })
      }if(response.status===200)
      {
        console.log(response.status);
        toast.success('Image uploaded !',{
          draggablePercent: 60,
          className: 'black-background',
          bodyClassName: "grow-font-size",
          progressClassName: 'fancy-progress-bar',
          closeButton: true,
          autoClose: 5000,
          position: toast.POSITION.TOP_RIGHT
        })
        console.log(response.body.secure_url);
        if (response.body.secure_url !== '') {
          this.setState({
            uploadedFileCloudinaryUrl: response.body.secure_url
          });
        console.log(this.state.uploadedFileCloudinaryUrl)
        }
      }else{
        toast.error('Try again',{
          closeButton:true, 
          autoClose:5000,
          position: toast.POSITION.TOP_RIGHT,
          progressClassName:'fancy-progress-bar'
        })
      }
    });
  }
  render(){
    return (
      <Fragment>
            <div id="layout">
              <Menu/>
              <div id="main">
            <div className="header">
              <h1>Star Wars DataBase</h1>
            </div>
            <div className="content" id="content">
            <ToastContainer />
            <Dropzone
              onDrop={this.onImageDrop.bind(this)}
              accept="image/*"
              multiple={false}>
                {({getRootProps, getInputProps}) => {
                  return (
                    <div
                      {...getRootProps()}
                    >
                      <input {...getInputProps()} />
                      {
                      <p>Try dropping some files here, or click to select files to upload.</p>
                      }
                    </div>
                  )
              }}
            </Dropzone>
           
            <div>
              {this.state.uploadedFileCloudinaryUrl === '' ? null :
              <div>
                <p>{this.state.uploadedFile.name}</p>
                <img src={this.state.uploadedFileCloudinaryUrl} alt="Uploaded from user" className="imgUploaded"/>
              </div>}
            </div>  
            </div>
          </div>  
        </div>
      </Fragment>
    );
  }
 
}

export default App;
