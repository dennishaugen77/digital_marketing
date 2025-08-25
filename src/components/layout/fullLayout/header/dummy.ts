import { ROUTES } from "@/constants/routes"

export const navigations = [
  {
    name: "Home",
    type: "linker",
    link: ROUTES.MAIN.HOME.INDEX,
  },
  {
    name: "Services",
    type: "dropdown",
    link: ROUTES.MAIN.SERVICES.INDEX,
    subList: [
      {
        title: "Branding",
        link: ROUTES.MAIN.SERVICES.BRANDING,
      },
      {
        title: "Digital marketing",
        link: ROUTES.MAIN.SERVICES.DIGITAL_MARKETING,
      },
      {
        title: "Seo services",
        link: ROUTES.MAIN.SERVICES.SEO_SERVICE,
      },
      {
        title: "Social Media",
        link: ROUTES.MAIN.SERVICES.SOCIAL_MEDIA,
      },
    ],
  },
  {
    name: "About",
    type: "link",
    link: "/about",
  },
  {
    name: "Blog",
    type: "link",
    link: "/blog",
  },
  {
    name: "Contract",
    type: "link",
    link: "/contract",
  },
]
