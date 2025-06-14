const MemeCard = ({ meme }) => {
  const { url, title, author, subreddit } = meme;
  return (
    <div
      style={{
        borderWidth: 1,
        borderColor: "black",
        borderStyle: "solid",
        margin: 15,
        padding: 10,
      }}
    >
      <img
        src={url}
        alt={title}
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          display: "block",
          margin: "0 auto",
        }}
      />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>{subreddit}</p>
    </div>
  );
};

export default MemeCard;
