const ProductCard = ({
  id,
  title,
  price,
  description,
  thumbnail,
  discountPercentage,
}) => {
  return (
    <div
      style={{
        width: "250px",
        margin: 10,
        padding: 10,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
      }}
    >
      <img
        style={{ height: "150px", width: "200px" }}
        alt={title}
        src={thumbnail}
      />
      <h2>
        {id} -{title}
      </h2>
      <h3>
        Rs. {price} - dicount of {discountPercentage}%
      </h3>
      <p>{description}</p>
    </div>
  );
};
export default ProductCard;
