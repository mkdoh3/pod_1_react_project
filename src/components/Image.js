import React from "react";

function ImageMed(props) {
    const style = {
        height: "300px",
        width: "250px",
    };
    return <img style={style} src={props.url} alt={props.alt} />;
}

export default ImageMed;
