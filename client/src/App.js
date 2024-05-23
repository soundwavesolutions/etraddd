import "./App.css";
import { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import Header from "./components/header";
import { ROUTES } from "./utils/routes";
import Footer from "./components/footer";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div className="lg:max-w-[1220px] mx-auto">
        <Header />

        {ROUTES.map((route, idx) => (
          <Route
            key={idx}
            exact
            {...route}
          />
        ))}
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
}

export default App;
