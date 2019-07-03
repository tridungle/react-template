import React from "react";
import PhotoGallery from "./PhotoGallery";
import VideoGallery from "./videoGallery";
import FileGallery from "./fileGallery";
import "./Body.css";
import "bootstrap/dist/css/bootstrap.css";

function Body() {
  return (
    <div className="Body">
      <PhotoGallery className="photo" />
      <VideoGallery className="video" />
      <FileGallery className="file" />
    </div>
  );
}

export default Body;
