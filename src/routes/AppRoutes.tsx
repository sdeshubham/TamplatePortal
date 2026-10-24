import { Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Login from "../pages/login/Login.js";
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
      <Route
        index
        path="/makeOver"
        element={
          <>
            <PageTitle title="MakeOver" />
            <MakeOver />
          </>
        }
      />

      <Route
        index
        path="/interiorDesign"
        element={
          <>
            <PageTitle title="Interior Designer" />
            <InteriorDesign />
          </>
        }
      />

      <Route
        index
        path="/weddingPhotography"
        element={
          <>
            <PageTitle title="Wedding Photography" />
            <WeddingPhotography />
          </>
        }
      />

      <Route
        index
        path="/fitnessYoga"
        element={
          <>
            <PageTitle title="Fitness/Yoga" />
            <FitnessYoga />
          </>
        }
      />

      <Route
        index
        path="/boutiqueDesign"
        element={
          <>
            <PageTitle title="Boutique Design" />
            <BoutiqueDesign />
          </>
        }
      />

      <Route
        index
        path="/propertyDesign"
        element={
          <>
            <PageTitle title="PropertyDesign" />
            <PropertyDesign />
          </>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
