import { lazy, Suspense } from "react"
import { Loading } from "./components/Loading"

const MainLayout = lazy(() => import("./layout/MainLayout"))

const HomePage = lazy(() => import("./pages/HomePage"))

const NewsDetail = lazy(() => import("./pages/HomePage/NewsDetail"))

const AnnouncementDetail = lazy(() => import("./pages/HomePage/AnnouncementDetail"))

const AboutUs = lazy(() => import("./pages/HomePage/AboutUs"))
const VisionMission = lazy(() => import("./pages/Institutional/VisionMission"))
const Management = lazy(() => import("./pages/Institutional/Management"))
const Partners = lazy(() => import("./pages/Institutional/Partners"))
const OurCompanies = lazy(() => import("./pages/Institutional/OurCompanies"))
const OurTeam = lazy(() => import("./pages/Institutional/OurTeam"))
const KVKK = lazy(() => import("./pages/Institutional/KVKK"))
const SSS = lazy(() => import("./pages/Institutional/SSS"))

const OtherLegislation = lazy(() =>
  import("./pages/Legislation/OtherLegislation")
)

const Career = lazy(() => import("./pages/Career"))

const Communication = lazy(() => import("./pages/Communication"))

const Page404 = lazy(() => import("./pages/Page404"))

/** @type {import('react-router-dom').RouteObject[]} */
const routes = [
  {
    element: <MainLayout />,
    lazy: true,
    children: [
      {
        index: true,
        name: "Anasayfa",
        element: <HomePage />,
        lazy: true,
      },
      {
        path: "Haberler/:id",
        name: "Haberler",
        element: <NewsDetail />,
        lazy: true,
      },
      {
        path: "Duyurular/:id",
        name: "Duyurular",
        element: <AnnouncementDetail />,
        lazy: true,
      },
      {
        path: "Hakkimizda",
        name: "Hakkimizda",
        element: <AboutUs />,
        lazy: true,
      },
      {
        path: "VizyonMisyon",
        name: "VizyonMisyon",
        element: <VisionMission />,
        lazy: true,
      },
      {
        path: "YonetimKurulu",
        name: "YonetimKurulu",
        element: <Management />,
        lazy: true,
      },
      {
        path: "KurucuOrtaklarımız",
        name: "KurucuOrtaklarımız",
        element: <Partners />,
        lazy: true,
      },
      {
        path: "Firmalarimiz",
        name: "Firmalarimiz",
        element: <OurCompanies />,
        lazy: true,
      },
      {
        path: "Ekibimiz",
        name: "Ekibimiz",
        element: <OurTeam />,
        lazy: true,
      },
      {
        path: "KVKK",
        name: "KVKK",
        element: <KVKK />,
        lazy: true,
      },
      {
        path: "SSS",
        name: "SSS",
        element: <SSS />,
        lazy: true,
      },
      {
        path: "DigerMevzuat",
        name: "DigerMevzuat",
        element: <OtherLegislation />,
        lazy: true,
      },
      {
        path: "Kariyer",
        name: "Kariyer",
        element: <Career />,
        lazy: true,
      },
      {
        path: "Iletisim",
        name: "Iletisim",
        element: <Communication />,
        lazy: true,
      },
    ],
  },
  {
    path: "404",
    name: "404",
    element: <Page404 />,
    lazy: true,
  },
]

const mapRoute = (list) => {
  return list.map((item) => {
    // if (item?.auth && 'element' in item) {
    //   item.element = <PrivateRoute>{item.element}</PrivateRoute>
    // }

    if (item?.lazy && "element" in item) {
      item.element = <Suspense fallback={<Loading />}>{item.element}</Suspense>
    }

    // if (item?.wrap && 'element' in item) {
    //   item.element = <Wrapper>{item.element}</Wrapper>
    // }

    // if ('element' in item) {
    //   item.element = <RouteTransition key={index}>{item.element}</RouteTransition>
    // }

    if ("children" in item) {
      item.children = mapRoute(item.children)
    }

    return item
  })
}

const finalRoutes = mapRoute(routes)

export default finalRoutes
