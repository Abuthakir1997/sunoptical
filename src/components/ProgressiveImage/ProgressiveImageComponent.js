import React from "react";
import { useState, useEffect } from "react";
import "./ProgressiveImage.scss";

const ProgressiveImg = ({ placeholderSrc, src, ...props }) => {
    //const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
    const [isImageLoaded, setisImageLoaded] = useState(false);
  


     useEffect(() => {
          setisImageLoaded(false);
       }, [src]);
      
    //   const customClass =
    //   placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";

    return (
        <>
        
        <img
            src={src}
            alt={props.alt || ""}
            onLoad={()=>{setisImageLoaded(true)}}
            className={`image ${isImageLoaded ? 'loaded': 'd-none'}`}
          /> 
          <img
        src={placeholderSrc}
        alt={props.alt || ""}
        className={`image ${isImageLoaded ? 'd-none': ''}`}/> 
        
        </>     
    );
  };

export default ProgressiveImg;