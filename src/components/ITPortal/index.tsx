import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ResourcesPage from "./pages/ResourcesPage";
import DocumentaryPage from "./pages/DocumentaryPage";
import PresentationPage from "./pages/PresentationPage";
import AnnouncementsPage from "./pages/AnnouncementsPage";
import SubmitTicketPage from "./pages/SubmitTicketPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";

export default function ITPortal() {
  const [activePage, setActivePage] = useState("Home");

  const renderPage = () => {
    switch (activePage) {
      case "Home":
        return <HomePage setActivePage={setActivePage} />;
      case "Services":
        return <ServicesPage />;
      case "Resources":
        return <ResourcesPage />;
      case "Documentary":
        return <DocumentaryPage />;
      case "Presentation":
        return <PresentationPage />;
      case "Announcements":
        return <AnnouncementsPage />;
      case "Submit Ticket":
        return <SubmitTicketPage />;
      case "Our Team":
        return <TeamPage />;
      case "Contact Us":
        return <ContactPage />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc" }}>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {renderPage()}
      <Footer />
    </div>
  );
}
