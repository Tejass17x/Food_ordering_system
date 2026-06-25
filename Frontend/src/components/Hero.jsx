import heroImage from "../assets/food-bg.PNG";

function Hero({ search, setSearch }) {
  return (
    <div
      className="h-[80vh] bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">

        <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
          Order Food Online
        </h1>

        <p className="text-white text-lg md:text-2xl mb-8">
          Discover the best food & drinks
        </p>

        <div className="bg-white rounded-xl p-2 w-full max-w-2xl flex shadow-xl">

          <input
            type="text"
            placeholder="Search restaurant, burger, pizza..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-3 outline-none"
          />

          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
            Search
          </button>

        </div>

      </div>
    </div>
  );
}

export default Hero;