import React from "react";
import styles from "./Home.less";
import heroImageURL from "../assets/images/adorable-animal-beagle-desktop.jpg";

import FeaturedAnimals from "../components/FeaturedAnimals/FeaturedAnimals";

const Home = () => {
  return (
    <div className="section">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-half has-text-centered">
                <img
                  src={heroImageURL}
                  alt="a beagle"
                  className={styles.heroImage}
                />
              </div>
              <div className="column is-half">
                <article className="message is-primary">
                  <div className="message-header">
                    <p>Welcome</p>
                  </div>
                  <div className="message-body">
                    Waggy wags such treat very jealous pupper ruff borkf very
                    jealous pupper, sub woofer doggo stop it fren heckin, many
                    pats h*ck fluffer shibe. Waggy wags puggo long doggo he made
                    many woofs pupper, shibe thicc puggo. Shibe borkdrive dat
                    tungg tho super chub, borkdrive. Doing me a frighten fat boi
                    bork yapper heckin good boys, smol stop it fren long woofer
                    snoot big ol, the neighborhood <strong>Donate now!</strong>{" "}
                    pupper h*ck pupperino. Ruff thicc borking doggo, very taste
                    wow. Sub woofer wow very biscit what a nice floof woofer,
                    very jealous pupper clouds woofer, what a nice floof blop.
                    Pupperino puggo clouds, long bois. wow very biscit tungg
                    smol. boofers. heck borking doggo. Long woofer fat boi long
                    bois long water shoob, lotsa pats.
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <FeaturedAnimals />
        </div>
      </section>
    </div>
  );
};

export default Home;
