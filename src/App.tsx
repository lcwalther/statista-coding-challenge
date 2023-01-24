import { Route, Routes, Link } from 'react-router-dom';
import { DetailPage, FavoritesPage, SearchPage } from './routes';

function App() {
  return (
    <div className="h-screen font-open-sans font-light tracking-wide">
      <div className="bg-statista-blue-dark px-10 py-2 text-white font-normal">
        <Link to="/">Suche</Link> | <Link to="/favorites">Favoriten</Link>
      </div>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/search/" element={<SearchPage />} />
        <Route path="/search/:q" element={<SearchPage />} />
        <Route path="/items/:id" element={<DetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
