import { Route, Routes } from "react-router-dom";

import PageTitle from "../components/common/PageTitle.js";
import MakeOver from "../pages/makeOver/MakeOver.js";
import InteriorDesign from "../pages/interiorDesign/InteriorDesign.js";
import WeddingPhotography from "../pages/weddingPhotography/WeddingPhotography.js";
import FitnessYoga from "../pages/fitnessYoga/FitnessYoga.js";
import BoutiqueDesign from "../pages/boutiqueDesign/BoutiqueDesign.js";
import PropertyDesign from "../pages/propertyDesign/PropertyDesign.js";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Default Homepage */}
      <Route
        path="/"
        element={
          <>
            <PageTitle title="MakeOver" />
            <MakeOver />
          </>
        }
      />

      <Route
        path="/makeOver"
        element={
          <>
            <PageTitle title="MakeOver" />
            <MakeOver />
          </>
        }
      />

      <Route
        path="/interiorDesign"
        element={
          <>
            <PageTitle title="Interior Designer" />
            <InteriorDesign />
          </>
        }
      />

      <Route
        path="/weddingPhotography"
        element={
          <>
            <PageTitle title="Wedding Photography" />
            <WeddingPhotography />
          </>
        }
      />

      <Route
        path="/fitnessYoga"
        element={
          <>
            <PageTitle title="Fitness/Yoga" />
            <FitnessYoga />
          </>
        }
      />

      <Route
        path="/boutiqueDesign"
        element={
          <>
            <PageTitle title="Boutique Design" />
            <BoutiqueDesign />
          </>
        }
      />

      <Route
        path="/propertyDesign"
        element={
          <>
            <PageTitle title="PropertyDesign" />
            <PropertyDesign />
          </>
        }
      />

      {/* Page Not Found */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
