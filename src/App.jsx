import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import SpinnerFullPage from "./Components/SpinnerFullPage";

const Homepage = lazy(() => import("./Pages/Homepage"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const Services = lazy(() => import("./Pages/Services"));
const Contact = lazy(() => import("./Pages/Contact"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound"));

function App() {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
