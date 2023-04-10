import "./fonts";
import AppRouter from "pages/router";
import React from "react";
import { withHocs } from "./hocs";

function App() {
  return <AppRouter />;
}

export default withHocs(App);
