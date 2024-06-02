import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LandingPagehome from "pages/LandingPagehome";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "landingpagehome",
      element: <LandingPagehome />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
