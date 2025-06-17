import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const LIMIT = 10;

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [noOfPages, setNoOfPages] = useState(0);

  const fetchProducts = async () => {
    const data = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${
        currentPage * LIMIT
      }&select=title,price,description,thumbnail,discountPercentage`
    );
    const json = await data.json();
    setProducts(json.products);
    setNoOfPages(Math.ceil(json.total / LIMIT));
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div style={{ marginTop: 10, marginLeft: 10, marginBottom: 10 }}>
        {currentPage > 0 && (
          <span
            style={{ paddingRight: 10 }}
            onClick={() => {
              setCurrentPage((currentPage) => currentPage - 1);
            }}
          >
            Prev
          </span>
        )}
        {[...Array(noOfPages).keys()].map((pageNumber) => (
          <span
            style={
              currentPage === pageNumber
                ? {
                    padding: 4,
                    fontWeight: "bold",
                    color: "blue",
                  }
                : { padding: 4 }
            }
            key={pageNumber}
            onClick={() => {
              setCurrentPage(pageNumber);
            }}
          >
            {pageNumber + 1}
          </span>
        ))}
        {currentPage < noOfPages - 1 && (
          <span
            style={{ paddingLeft: 10 }}
            onClick={() => {
              setCurrentPage((currentPage) => currentPage + 1);
            }}
          >
            Next
          </span>
        )}
      </div>
    </div>
  );
};

export default Pagination;
