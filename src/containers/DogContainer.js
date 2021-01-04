import React, { Component } from "react";
import BreedOption from "../components/BreedOption";

class DogContainer extends Component {
    state = {
        breeds: [],
        images: [],
    };

    componentDidMount() {
        //https://dog.ceo/api/breeds/list/all

        const fetchBreeds = () => {
            fetch("https://dog.ceo/api/breeds/list/all")
                .then((res) => res.json())
                .then((data) => {
                    const breeds = Object.keys(data.message);
                    this.setState({ breeds });
                });
        };
        setTimeout(fetchBreeds, 2000);
    }

    renderBreedSelect = () => {
        return (
            <select>
                {this.state.breeds.map((breedName, index) => (
                    <BreedOption key={index} breedName={breedName} />
                ))}
            </select>
        );
    };

    render() {
        return (
            <div className="container">
                <h1>Doggo Browser</h1>
                <h3>Select a Breed to Get Started</h3>
                {this.state.breeds.length > 0 ? (
                    this.renderBreedSelect()
                ) : (
                    <p>...fetching breeds</p>
                )}
            </div>
        );
    }
}

export default DogContainer;
