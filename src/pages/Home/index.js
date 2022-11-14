import { Hero, Info } from "components";
import React from "react";

const Home = () => {
  return (
    <main className="main">
      <section className="section">
        <div className="section__container">
          <div className="section__hero">
            <Hero />
          </div>
          <div className="section__info">
            <Info />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
