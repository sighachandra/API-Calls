import React from 'react';
import { Link } from "react-router-dom";
export default function Expenses() {
    return (
      <div style={{ padding: "1rem 0" }}>
        <h2>Expenses</h2>
        <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/">App</Link>
      </nav>
      </div>
    );
  }