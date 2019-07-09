import React from "react";

const FeaturedAnimal = ({ animal, onImageClick }) => {
  //const [profile, showProfile] = useState(false);

  let imageURL = "";
  const style = {
    margin: "15px"
  };
  if (animal.photos.length) {
    imageURL = animal.photos[0].small;
  }

  function handleImageClick(e) {
    e.preventDefault();
    onImageClick(animal);
  }
  return (
    <div className="tile" style={style}>
      <input
        type="image"
        className="pet-image"
        src={imageURL}
        alt=""
        onClick={handleImageClick}
      />
    </div>
  );
};

export default FeaturedAnimal;
