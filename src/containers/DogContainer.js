import React, { Component } from "react";
import Select from "../components/Select";
import ImageMed from "../components/Image";
class DogContainer extends Component {
    state = {
        breeds: [],
        images: [],
        selectedBreed: "",
    };

    componentDidMount() {
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

    renderImages = () => {
        return (
            <>
                <h3>{this.state.selectedBreed}</h3>
                {this.state.images.map((url, index) => (
                    <ImageMed
                        key={index}
                        url={url}
                        alt={`image of ${this.state.selectedBreed}`}
                    />
                ))}
            </>
        );
    };

    handleBreedSelect = (event) => {
        const selectedBreed = event.target.value;
        fetch(`https://dog.ceo/api/breed/${selectedBreed}/images`)
            .then((res) => res.json())
            .then((data) => {
                const images = data.message.slice(0, 10);
                this.setState({
                    images,
                    selectedBreed,
                });
            });
    };
    render() {
        return (
            <div className="container">
                <h1>Doggo Browser</h1>
                <h3>Select a Breed to Get Started</h3>
                {this.state.breeds.length > 0 ? (
                    <Select
                        options={this.state.breeds}
                        handleOnChange={this.handleBreedSelect}
                    />
                ) : (
                    <p>...fetching breeds</p>
                )}
                {this.state.selectedBreed && this.renderImages()}
            </div>
        );
    }
}

export default DogContainer;
