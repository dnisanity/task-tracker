import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./app/Router";

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
