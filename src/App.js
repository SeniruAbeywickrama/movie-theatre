import Header from '../src/componants/header'
import Footer from '../src/componants/footer'
import Hero from '../src/componants/hero'
import MovieLibrary from '../src/componants/movie-library'
import Location from '../src/componants/location'

function App() {
  return (
      <div className="scroll-smooth">
          <Header />
          <div className=""> {/* Add padding to offset fixed header */}
              <Hero/>
              <MovieLibrary />
              <Location />
          </div>
          <Footer/>
      </div>
  );
}

export default App;
