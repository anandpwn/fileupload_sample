import React from 'react';
import "./Main.css"
class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('Name', this.fileName.value);
    data.append('Description', this.fileName.value);

    fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: `http://localhost:8000/${body.file}` });
      });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage} className= "form-c">
         <div>
          <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Name" />
        </div>
        <br />
        <div>
          <textarea ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Description" />
        </div>
        <br />
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
       
        <br />
        <div>
          <button>Upload</button>
        </div>
        {/* <img src={this.state.imageURL} alt="img" /> */}
      </form>
    );
  }
}

export default Main;
