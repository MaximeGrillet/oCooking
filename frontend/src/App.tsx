import { Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import RecipeDetails from "./pages/RecipeDetails.tsx";
import MyRecipes from "./pages/MyRecipes.tsx";
import { RequiredAuth } from "./hooks/auth-context.tsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="main__container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route
              path="/my-recipes"
              element={
                <RequiredAuth>
                  <MyRecipes />
                </RequiredAuth>
              }
            />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
