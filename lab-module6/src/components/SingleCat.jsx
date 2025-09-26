export default function SingleCat({ cat }) {
  const imageStyle = {
    width: "60%",
    backgroundColor: "lightgrey",
    margin: '10px auto'
  };
  return (
    <div className="card col-12 col-md-5 m-3">
      <img src={"garfield.jpg"} style={imageStyle} alt={cat.name}></img>
      <h1>{cat.name} </h1>
      <p>{cat.latinName} </p>
    </div>
  );
}
