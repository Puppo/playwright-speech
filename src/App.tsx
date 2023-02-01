
import ContextProviders from './contextProviders';
import GlobalStyle from './global';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoriesPage from './Pages/Categories';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProtectedRoute from './Routes/Route';

function App() {
  return (
    <ContextProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute priv={true}><Home /></ProtectedRoute>} />
          <Route path="/login" element={<ProtectedRoute priv={false}><Login /></ProtectedRoute>} />
          <Route path='/categories/:name' element={<ProtectedRoute priv={true}><CategoriesPage /></ProtectedRoute>}></Route>
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ContextProviders>

  );
}

export default App;
