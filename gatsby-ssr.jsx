import React from "react";
import { Layout } from "./src/components";

// Adds a class name to the body element
// exports.onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
//   setBodyAttributes({
//     className: "my-body-class",
//   });
// };

//---------------------------------------------------------

// Wraps every page in a component
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
