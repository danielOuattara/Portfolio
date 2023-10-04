import React from "react";
import { Seo } from "../../components";

export default function Documents() {
  return <Seo> documents root page</Seo>;
}

export const Head = () => <Seo title={"Projects"} />;
