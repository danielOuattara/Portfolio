const path = require("path");
const stringToSlug = require("./src/utilities/stringToSlug");
//--------------------------------------------------------------

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query GatsbyNode {
      distinctProjectTypeList: allContentfulPortfolioProjects {
        distinct(field: { category: SELECT })
      }

      allProjectsTitles: allContentfulPortfolioProjects {
        nodes {
          title
          category
        }
      }
    }
  `);

  if (data) {
    data.distinctProjectTypeList.distinct.forEach((category) => {
      return actions.createPage({
        path: "/projects/" + stringToSlug(category),
        component: path.resolve(
          "./src/templates/pageTemplateProjectsByCategory.jsx",
        ),
        context: { category },
      });
    });
    data.allProjectsTitles.nodes.forEach((project) => {
      return actions.createPage({
        path: `/projects/${stringToSlug(project.category)}/${stringToSlug(
          project.title,
        )}`,
        component: path.resolve(
          "./src/templates/pageTemplateSingleProject.jsx",
        ),
        context: { title: project.title },
      });
    });
  }
};
