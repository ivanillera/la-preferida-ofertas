import React from "react";
import { Card } from "./Card";

export const OfferGrid = ({ offers, selectedCategory }) => {
  const filteredOffers =
    selectedCategory === "Todos"
      ? offers
      : offers.filter((offer) => offer.category === selectedCategory);

  return (
    <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6">
      {filteredOffers.length === 0 ? (
        <p>¡Proximamente!</p>
      ) : (
        filteredOffers.map((offer, index) => (
          <Card
            key={index}
            image={offer.image}
            title={offer.title}
            price={offer.price}
            description={offer.description}
          />
        ))
      )}
    </section>
  );
};
