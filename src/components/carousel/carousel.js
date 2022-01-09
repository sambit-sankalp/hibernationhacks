import { Carousel } from "react-carousel-minimal";

function App() {
  const data = [
    {
      image:
        "https://res.cloudinary.com/dfftvyqha/image/upload/v1641729771/Slide3_jnr7z3.png",
    },
    {
      image:
        "https://res.cloudinary.com/dfftvyqha/image/upload/v1641729912/Component_1_vtzkvh.png",
    },

    {
      image:
        "https://res.cloudinary.com/dfftvyqha/image/upload/v1641729770/Slide5_j7zct5.png",
    },
    {
      image:
        "https://res.cloudinary.com/dfftvyqha/image/upload/v1641729633/Slide1_cqbkmc.png",
    },
    {
      image:
        "https://res.cloudinary.com/dfftvyqha/image/upload/v1641729771/Slide2_ujcrp5.png",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h2>React Carousel Minimal</h2>
        <p>
          Easy to use, responsive and customizable carousel component for React
          Projects.
        </p>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={4000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
