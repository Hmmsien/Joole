import './App.css';
import LoginForm from "./components/LoginForm";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import Search from "./components/Search";
import Products from "./components/Products"
import PrivateRoute from "./route/PrivateRoute"
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<LoginForm />} />
              <Route path='/signup' element={<SignUpForm />} />
              <Route exact path='/search' element={<PrivateRoute/>}>
                  <Route exact path='/search' element={<Search/>}/>
              </Route>
              <Route exact path='/products' element={<PrivateRoute/>}>
                  <Route exact path='/products' element={<Products />} />
              </Route>

          </Routes>
      </BrowserRouter>

  );
}

export default App;
