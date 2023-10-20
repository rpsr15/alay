import React, { useState } from "react";
import { Container } from "@nextui-org/react";
import SortDropdown from "../components/SortDropdown";
import FilterSection from "../components/FilterSection";

const Shop = () => {
  const productSortValues = [
    {
      text: "Price (low to high)",
      value: "price-asc",
    },
    {
      text: "Price (high to low)",
      value: "price-dsc",
    },
    {
      text: "Name A-Z",
      value: "name-asc",
    },
    {
      text: "Name Z-A",
      value: "name-dsc",
    },
    {
      text: "Popular",
      value: "views",
    },
  ];
  const [selectedSort, setSelectedSort] = useState("views");
  const handleSortChange = (newSort) => {
    setSelectedSort(newSort);
  };
  return (
    <section className='flex justify-center'>
      <div className=''>
        <div className='text-3xl'>Street Map Collection</div>
        <div>
          <div className='flex flex-row'>
            <div className='flex-grow'>
              <FilterSection />
            </div>
            <div className='ml-4'>
              <SortDropdown
                sortValues={productSortValues}
                selectedFilter={selectedSort}
                onFilterChange={handleSortChange}
              />
            </div>
          </div>
          <div className='products-collection'></div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
