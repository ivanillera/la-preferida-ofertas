import React from "react";

export const CategorySelection = ({
  selectedCategory,
  handleCategoryClick,
  availableCategories,
}) => {
  return (
    <div className="flex  flex-row  space-x-4 my-4 overflow-x-auto md:justify-center ">
      {availableCategories.includes("Todos") && (
        <button
          className={`px-2 py-2 rounded-lg font-bold transition-colors duration-200 ${
            selectedCategory === "Todos"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black hover:bg-blue-300"
          }`}
          onClick={() => handleCategoryClick("Todos")}
        >
          Todos
        </button>
      )}
      {availableCategories.includes("Almacén") && (
        <button
          className={`px-4 py-2 rounded-lg font-bold transition-colors duration-200 ${
            selectedCategory === "Almacén"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black hover:bg-blue-300"
          }`}
          onClick={() => handleCategoryClick("Almacén")}
        >
          Almacén
        </button>
      )}
      {availableCategories.includes("Carnicería") && (
        <button
          className={`px-4 py-2 rounded-lg font-bold transition-colors duration-200 ${
            selectedCategory === "Carnicería"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black hover:bg-blue-300"
          }`}
          onClick={() => handleCategoryClick("Carnicería")}
        >
          Carnicería
        </button>
      )}
      {availableCategories.includes("Pollería") && (
        <button
          className={`px-4 py-2 rounded-lg font-bold transition-colors duration-200 ${
            selectedCategory === "Pollería"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black hover:bg-blue-300"
          }`}
          onClick={() => handleCategoryClick("Pollería")}
        >
          Pollería
        </button>
      )}
      {availableCategories.includes("Fiambrería") && (
        <button
          className={`px-4 py-2 rounded-lg font-bold transition-colors duration-200 ${
            selectedCategory === "Fiambrería"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black hover:bg-blue-300"
          }`}
          onClick={() => handleCategoryClick("Fiambrería")}
        >
          Fiambrería
        </button>
      )}
      {availableCategories.includes("Verdulería") && (
        <button
          className={`px-4 py-2 rounded-lg font-bold transition-colors duration-200 ${
            selectedCategory === "Verdulería"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black hover:bg-blue-300"
          }`}
          onClick={() => handleCategoryClick("Verdulería")}
        >
          Verdulería
        </button>
      )}
      {availableCategories.includes("Lácteos") && (
        <button
          className={`px-4 py-2 rounded-lg font-bold transition-colors duration-200 ${
            selectedCategory === "Lácteos"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black hover:bg-blue-300"
          }`}
          onClick={() => handleCategoryClick("Lácteos")}
        >
          Lácteos
        </button>
      )}
      {availableCategories.includes("Congelados") && (
        <button
          className={`px-4 py-2 rounded-lg font-bold transition-colors duration-200 ${
            selectedCategory === "Congelados"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black hover:bg-blue-300"
          }`}
          onClick={() => handleCategoryClick("Congelados")}
        >
          Congelados
        </button>
      )}
    </div>
  );
};
