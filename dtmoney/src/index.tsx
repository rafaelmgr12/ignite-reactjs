import React from "react";
import ReactDOM from "react-dom";
import { createServer, Server } from "miragejs";
import { App } from "./App";

createServer({
  routes() {
    this.namespace = "/api";
    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Desenvolvimento de site",
          amount: 12000,
          type: "deposit",
          category: "Food",
          createAt: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
