const page_links = [
  {
    id: 1,
    url: "/",
    page: "home",
  },
  {
    id: 2,
    url: "/about",
    page: "about",
  },
  {
    id: 3,
    url: "/projects",
    page: "projects",
    subLinks: [
      { id: "3-1", url: "/projects/frontend", page: "frontend" },
      { id: "3-2", url: "/projects/backend", page: "backend" },
      { id: "3-3", url: "/projects/fullstack", page: "fullstack" },
    ],
  },
  {
    id: 4,
    url: "/documents",
    page: "documents",
    subLinks: [
      { id: "4-1", url: "/documents/cv", page: "cv" },
      { id: "4-2", url: "/documents/diploma", page: "diploma" },
      { id: "4-1", url: "/documents/certificates", page: "certificates" },
    ],
  },
  {
    id: 5,
    page: "contact",
    url: "/contact",
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
