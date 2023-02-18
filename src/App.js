import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilteredProducts from "./component/filteredProducts/FilteredProducts";
import Main from "./component/main/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleProduct from "./component/singleProduct/SingleProduct";
import Header from "./component/navbar/Header";
import Login from "./component/connection/Login"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/filteredProducts/:type" element={<FilteredProducts/>}/>
          <Route path="/filteredProducts/:type/:id" element={<SingleProduct/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
