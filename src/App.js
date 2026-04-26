import { RouterProvider } from 'react-router-dom';
import { Routes } from './routes';
import { SearchProvider } from './components/SearchContext';

function App() {
  return (
    <SearchProvider>
      <RouterProvider router={Routes}/>
    </SearchProvider>
  );
}

export default App;