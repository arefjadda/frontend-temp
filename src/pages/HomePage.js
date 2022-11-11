import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function HomePage({ setExercise }) {
  // Use the history for updating
  const history = useHistory();

  // DISPLAY
  return (
    <>
      <article>
        <h2>Home Page</h2>
        <p>
          Select which administrative page you would like to vist from the
          navigation bar above.
        </p>
      </article>
    </>
  );
}

export default HomePage;
