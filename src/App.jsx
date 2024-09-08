import { useState } from "react";
import { Logo } from "./components/Logo";
import { OfferGrid } from "./components/OfferGrid";
import { CategorySelection } from "./components/CategorySelection";
import offers from "./data/offers.json";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const availableCategories = [
    "Todos",
    ...new Set(offers.map((offer) => offer.category)),
  ];

  return (
    <div className="max-w-6xl px-8 mx-auto pt-10">
      <Logo />
      <CategorySelection
        selectedCategory={selectedCategory}
        handleCategoryClick={handleCategoryClick}
        availableCategories={availableCategories}
      />
      <OfferGrid offers={offers} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
