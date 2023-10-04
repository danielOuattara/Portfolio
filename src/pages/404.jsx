import React from "react";
import { Link } from "gatsby";
import { Seo } from "./../components";

//-----------------------------------------------

export default function Error() {
  return (
    <Seo title={"Not Found 404"}>
      <main className="error-page">
        <div className="error-container">
          <h1>404</h1>
          <h3>page not found ;&#40;</h3>
          <Link to="/" className="btn">
            back safely to home
          </Link>
        </div>
      </main>
    </Seo>
  );
}

//------------------------------------------------------

export const Head = () => <Seo title={"Not Found"} />;
