import ControlledCarousel from "./components/Slider";

function App() {
  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Carousal Images
      </h1>
      <ControlledCarousel />
    </>
  );
}

export default App;
