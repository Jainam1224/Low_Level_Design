const ShimmerEffect = () => {
  return Array(20)
    .fill(0)
    .map(() => (
      <div
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: "black",
          borderStyle: "solid",
          margin: 15,
          padding: 10,
        }}
      >
        <div
          style={{
            backgroundColor: "lightgrey",
            height: 200,
            width: 200,
            marginBottom: 20,
          }}
        />
        <div
          style={{
            backgroundColor: "lightgrey",
            height: 40,
            width: 200,
            marginBottom: 10,
          }}
        />
        <div
          style={{
            backgroundColor: "lightgrey",
            height: 20,
            width: 200,
            marginBottom: 15,
          }}
        />
        <div
          style={{
            backgroundColor: "lightgrey",
            height: 15,
            width: 200,
          }}
        />
      </div>
    ));
};

export default ShimmerEffect;
