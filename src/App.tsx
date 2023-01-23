import { Route, Routes } from 'react-router-dom';
import { DetailPage, FavoritesPage, SearchPage } from './routes';

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/search/:q" element={<SearchPage />} />
        <Route path="/items/:identifier" element={<DetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
