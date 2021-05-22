import React from 'react';

 
export default function showImg({src}){
    let imgStyles={width:100 +"%",
    height: "auto"}

    return <img src={src} alt="slideimg" style={imgStyles}/>
}