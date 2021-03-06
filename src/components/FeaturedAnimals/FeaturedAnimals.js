import React, { useState, useEffect } from "react";
import PetFinder from "../../utils/PetFinderAPI";

import FeaturedAnimal from "../FeaturedAnimal/FeaturedAnimal";
import PetProfile from "../PetProfile/PetProfile";
import Loading from "../Loading/Loading";

const FeaturedAnimals = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [petProfileDisplay, setPetProfileDisplay] = useState(false);
  const [petProfile, setPetProfile] = useState("");

  const petContainer = {
    flexWrap: "wrap",
    justifyContent: "space-between"
  };

  useEffect(() => {
    setLoading(true);
    PetFinder.getPets
      .then(response => {
        setAnimals(response.data.animals);
        setLoading(false);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  }, []);

  const showProfile = profile => {
    setPetProfileDisplay(true);
    setPetProfile(profile);
  };

  const hideProfile = () => {
    setPetProfileDisplay(false);
    setPetProfile("");
  };

  return petProfileDisplay ? (
    <div className="columns">
      <div className="column is-half is-offset-one-quarter has-text-centered">
        <PetProfile pet={petProfile} onCloseProfile={hideProfile} />
      </div>
    </div>
  ) : (
    <div className="message is-primary">
      <div className="message-header">
        <span>Featured Pets of the Day</span>
      </div>
      {loading ? (
        <div className="container has-text-centered">
          <Loading />
        </div>
      ) : (
        <div
          className="message-body tile is-ancestor has-text-centered"
          style={petContainer}
        >
          {animals.map(animal => (
            <FeaturedAnimal
              key={animal.id}
              animal={animal}
              onImageClick={showProfile}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedAnimals;
