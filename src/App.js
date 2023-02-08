import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilteredProducts from "./component/filteredProducts/FilteredProducts";
import Main from "./component/main/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleProduct from "./component/singleProduct/SingleProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/filteredProducts/:type" element={<FilteredProducts/>}/>
          <Route path="/filteredProducts/:type/:id" element={<SingleProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
