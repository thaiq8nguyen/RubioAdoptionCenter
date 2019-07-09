import React from "react";

//import "./PetProfile.less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import cardImage from "../../assets/images/bones_and_paws_bg.png";

const PetProfile = ({ pet, onCloseProfile }) => {
  let imageURL = pet.photos[0].medium
    ? pet.photos[0].medium
    : pet.photos[0].small;

  const attributeNames = [
    "species",
    "breeds",
    "colors",
    "age",
    "gender",
    "size"
  ];

  function checkProperty(property) {
    return pet.hasOwnProperty(property);
  }

  //console.log({ list });

  function handleCloseProfile(e) {
    e.preventDefault();
    onCloseProfile();
  }
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-header-title is-size-3">
          {pet.name}&apos;s Profile
        </span>

        <a href="" className="card-header-icon" onClick={handleCloseProfile}>
          <FontAwesomeIcon icon="times-circle" size="2x" />
        </a>
      </div>
      <div className="card-image">
        <img className="pet-image" src={imageURL} alt="" />
      </div>

      <div className="card-content">
        <h2 className="subtitle">Hi, my name is {pet.name}</h2>
        <div className="attributes-container">
          {attributeNames.map(attributeName =>
            checkProperty(attributeName) ? (
              <div className="attributes " key={attributeName}>
                <h3 className="attribute-name is-size-4 has-text-primary">
                  {attributeName.charAt(0).toUpperCase() +
                    attributeName.slice(1)}
                </h3>
                <p className="attribute-content">
                  {typeof pet[attributeName] === "object"
                    ? Object.values(pet[attributeName])
                    : pet[attributeName]}
                </p>
              </div>
            ) : null
          )}
        </div>
      </div>
      <div className="action"></div>
    </div>
  );
};

export default PetProfile;
