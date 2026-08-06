import { Route, Routes } from "react-router";

// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";
// import DestinationDetailPage from "./pages/DestinationDetailPage";
// import DestinationsPage from "./pages/DestinationsPage";
// import RequestSentPage from "./pages/RequestSentPage";
// import NotFoundPage from "./pages/NotFoundPage";

import {
  AboutPage,
  ContactPage,
  DestinationDetailPage,
  DestinationsPage,
  HomePage,
  NotFoundPage,
  RequestSentPage,
} from "@/pages";

// import MainLayout from "./layouts/MainLayout";
import { MainLayout } from "@/layouts";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path=":lang?/destinations" element={<DestinationsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/request-sent" element={<RequestSentPage />} />
          <Route
            path=":lang?/destinations/:slug"
            element={<DestinationDetailPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
