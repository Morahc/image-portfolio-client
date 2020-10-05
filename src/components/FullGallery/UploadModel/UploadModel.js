import React, { useState, useRef } from "react";
import '../FullGallery.css'
import api from '../../../api/api'

function UploadModel({ fetch}) {
  const [file, setFile] = useState("");
  const fileRef = useRef(null);

  const upload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await api.post('/upload' ,formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      fetch()
      console.log(res.data)
    } catch (err) {
      console.error(err);
    }
  };

  const handleFile = (e) => {
    setFile(fileRef.current.files[0]);
  };

  return (
    <div>
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>Upload Pictures</h4>
          <i className='fa fa-times modal-close close-icon'></i>
          <form onSubmit={upload}>
            <div className="file-field input-field">
              <div className="btn">
                <span>File</span>
                <input
                  type="file"
                  name="file"
                  onChange={handleFile}
                  ref={fileRef}
                  required
                />
              </div>
              <div className="file-path-wrapper">
                <input
                  className="file-path validate"
                  type="text"
                  placeholder="Upload one file"
                />
              </div>
            </div>
            <input type="submit" value="Upload" className="btn blue darken-3 modal-close"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadModel;
