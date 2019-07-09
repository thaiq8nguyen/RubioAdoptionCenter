import React, { useEffect } from "react";

import "./Body.less";
import imageURL from "../assets/images/adorable-animal-cat-1404819.png";

import Container from "./Container";
import Layout from "./Layout";
import Card from "../components/Card/Card";
import CardTitle from "../components/Card/CardTitle";
import CardText from "../components/Card/CardText";
import CardActions from "../components/Card/CardActions";
import Button from "../components/Button/Button";
import Image from "../components/Image/Image";

import EventCard from "../components/EventCard/EventCard";
import FeaturedAnimals from "../components/FeaturedAnimals/FeaturedAnimals";

const Body = () => {
  const event = {
    image: "../../assets/images/adorable-animal-cat-1404819.png",
    title: "Summer Adoption Event",
    text:
      "Join us to adopt your next pets. First 5 adopters will receive a free pet collar."
  };

  useEffect(() => {}, []);

  return (
    <div className="main-content">
      <Container>
        <Layout>
          <Card>
            <Image src={imageURL}></Image>
            <CardTitle>
              <h2>{event.title}</h2>
            </CardTitle>
            <CardText>{event.text}</CardText>
            <CardActions>{<Button name="Read More" />}</CardActions>
          </Card>
        </Layout>
      </Container>

      {/* <Card content={upComingEvent} /> */}
      {/* <FeaturedAnimals /> */}
    </div>
  );
};

export default Body;
