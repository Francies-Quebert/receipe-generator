import './App.css';
import { Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import ReceipeList from './pages/ReceipeList';
import ReceipePage from './pages/ReceipePage';
import Layout from './components/Layout';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ReceipeList />} />
          <Route path="receipe-page/:receipeId" element={<ReceipePage />} />

          <Route path="*" element={<ErrorBoundary />} />
        </Route>
      </Routes >
    </>
  )
}
