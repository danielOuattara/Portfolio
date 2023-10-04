const page_links = [
  {
    id: 1,
    text: "home",
    url: "/",
    page: "home",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
    page: "about",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
    page: "projects",
    subLinks: [{ url: "/projects/frontend" }],
  },
  {
    id: 4,
    text: "documents",
    url: "/documents/",
    page: "documents",
    subLinks: [{}],
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
];

const documents_sublinks = [
  {
    id: 6,
    text: "cv",
    url: "/cv/",
  },
  {
    id: 7,
    text: "certifications",
    url: "/certifications/",
  },
  {
    id: 7,
    text: "diploma",
    url: "/diploma/",
  },
];
export { page_links, documents_sublinks };
