
import "./Hero.css";

function Hero({ searchTerm, setSearchTerm }) {

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-subtitle">
            🍴 Discover Delicious Recipes
          </p>

          <h1>
            Cook Something
            <span>Amazing Today</span>
          </h1>

          <p className="hero-description">
            Explore delicious recipes, discover new flavors,
            and find the perfect meal for every occasion.
          </p>

          {/* Search */}
          <form
            className="search-box"
            onSubmit={handleSearch}
          >
            <input
              type="text"
              placeholder="Search for a recipe..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

            <button type="submit">
              🔍 Search
            </button>
          </form>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80"
            alt="Delicious food"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;
