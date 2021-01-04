import React from "react";

function BreedOption(props) {
    return <option value="props.breedName">{props.breedName}</option>;
}

export default BreedOption;
