import React, { useEffect, useReducer} from "react";
import UploadModel from "./UploadModel/UploadModel";
import M from 'materialize-css'
import "./FullGallery.css";
import api from '../../api/api'


const initialState ={
  loading: true,
  error: '',
  images: []
}

const reducer = (state, action) => {
  switch(action.type){
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: '',
        images: action.payload
      }

    case 'FETCH_ERROR':
      return {
        loading: true,
        error: action.error,
        images: []
      }
    default: 
    return initialState
  }
}

function FullGallery() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchImages = () => {
    api.get("/")
        .then(res => {
          dispatch({ type: 'FETCH_SUCCESS', payload: res.data})
          var elems = document.querySelectorAll('.materialboxed');
          M.Materialbox.init(elems);
        })
        .catch(err => {
        dispatch({ type: 'FETCH_ERROR', error: err.response})
        });
  };

  useEffect(() => {
    fetchImages()
  }, []);


  return (
    <div className="container center-align full-gallery section">
      <h2 className="section">Gallery</h2>
      <UploadModel fetch={fetchImages}/>
      <div className="image-container">
        {state.images.map((image, i) => {
          return (
            <div key={i + 1} className="image-wrap">
              <img
                src={`http://localhost:8000/images/uploads/${image.imgSrc}`}
                alt={image.imgSrc}
                className='materialboxed'
              />
            </div>
          );
        })}
      </div>
      <button
        data-target="modal1"
        className="btn modal-trigger form-trigger fx-center"
      >
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
}

export default FullGallery;
