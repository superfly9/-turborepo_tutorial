import React from "react";
import "./loading.module.css";

function HomeLoading() {
  return (
    <li className="skeleton-item">
      <div>
        <div className="skeleton-img" />
      </div>
      <div className="skeleton-info">
        <p className="skeleton-name" />
        <p className="skeleton-email" />
      </div>
    </li>
  );
}
export default HomeLoading;
