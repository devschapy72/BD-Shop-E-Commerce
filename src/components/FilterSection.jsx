import React from "react";
import { useFilterContext } from "../context/FilterContext";

const FilterSection = () => {
  const {
    filterProducts,
    sorting,
    updateFilterValue,
    filters: { text, brand },
    allProducts,
  } = useFilterContext();

  // TO GET THE UNIQUE DATA OF EACH FIELDS
  const getUniqueData = (data, property) => {
    let newValue = data.map((curELm) => {
      return curELm[property];
    });
    return (newValue = ["all brand", ...new Set(newValue)]);
  };

  // UNIQUE_DATA
  const brandData = getUniqueData(allProducts, "brand");
  return (
    <div className="flex flex-wrap gap-5 justify-between items-center border-[2px] border-gray-500 px-5 py-4">
      <div>
        <form action="#">
          <select
            name="brand"
            id="brand"
            onClick={updateFilterValue}
            className="border-2 border-gray-500 text-[13px] capitalize mt-2 py-1 pl-2 outline-none"
          >
            {brandData.map((curELm, index) => {
              return (
                <option
                  value={curELm}
                  key={index}
                  name="brand"
                  className="capitalize"
                >
                  {curELm}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div className="lg:hidden">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            autoComplete="off"
            onChange={updateFilterValue}
            placeholder="Find your products"
            className="outline-none pl-2  text-[13px] placeholder:text-black border-2 border-gray-500 py-1"
          />
        </form>
      </div>
      <div>
        <p className="text-lg font-serif font-medium">{`${filterProducts.length} Product Available`}</p>
      </div>
      <div>
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            onClick={sorting}
            className="border-2 border-blue-600 text-sm font-serif py-1.5 px-1 "
          >
            <option value="highest">Price(highest)</option>
            <option value="lowest">Price(lowest)</option>
            <option value="a-z">Price(a-z)</option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default FilterSection;
