import Toolbar from 'components/organisms/Toolbar';
import Create from 'pages/Create';
import Detail from 'pages/Detail';
import List from 'pages/Lists';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Toolbar />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path=":id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}
