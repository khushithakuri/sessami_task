import Location from "./components/Location";
import places from "./data/content.json";

function App() {
  return (
    <div className="h-screen w-screen">
      <main className="h-full max-w-[90rem] mx-auto px-5 flex flex-col">
        <h1 className="font-bold text-5xl mb-[49px] mt-[71px]">CITIES TO VISIT IN EUROPE</h1>
        <section className="flex flex-wrap pb-7">
          {places.map((place, index) => (
            <Location key={index} name={place.name} country={place.country} thumbnail={place.thumbnail} description={place.description} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
