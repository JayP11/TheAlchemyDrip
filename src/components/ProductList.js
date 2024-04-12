import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
import { useProductsContext } from "../context/products_context";

const ProductList = () => {
  //fetch data from filter product context
  const { filtered_products: products, grid_view } = useFilterContext();
  const { single_product } = useProductsContext();
  // console.log(
  //   "🚀 ~ file: ProductList.js:9 ~ ProductList ~ products:",
  //   single_product
  // );

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no product matched to your search...
      </h5>
    );
  }
  if (grid_view === false) {
    return <ListView products={single_product} />;
  }
  return <GridView products={single_product} />;
};

export default ProductList;
