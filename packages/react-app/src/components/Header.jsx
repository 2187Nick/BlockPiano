import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/chrontast" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="Blockchain Piano"
        subTitle=""
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
