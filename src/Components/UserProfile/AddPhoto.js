import React from "react";
import "./AddPhoto.scss";

class AddPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
  }

  fileSelectedHandler = event => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  };

  render() {
    return (
      <div className="addPhoto">
        <input
          type="file"
          name="file"
          id="file"
          onChange={this.fileSelectedHandler}
          className="inputFile"
        />

        <label className="addPhotoDiv" htmlFor="file">
          <img src={this.state.file} alt="" />
          <p>Add photo</p>
        </label>
      </div>
    );
  }
}

export default AddPhoto;
