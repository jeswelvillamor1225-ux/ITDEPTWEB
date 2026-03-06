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
    <div style={{ 
      minHeight: "100vh", 
      background: `
        linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 35px,
          rgba(59, 130, 246, 0.03) 35px,
          rgba(59, 130, 246, 0.03) 70px
        ),
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 35px,
          rgba(59, 130, 246, 0.03) 35px,
          rgba(59, 130, 246, 0.03) 70px
        )
      `,
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Animated code background */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.05,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        animation: "float 20s linear infinite",
      }} />
      
      {/* Matrix rain effect */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.02,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='0' y='10' font-family='monospace' font-size='10' fill='%2300ff00'%3E01001000%3C/text%3E%3Ctext x='0' y='25' font-family='monospace' font-size='10' fill='%2300ff00'%3E11001101%3C/text%3E%3Ctext x='0' y='40' font-family='monospace' font-size='10' fill='%2300ff00'%3E00110011%3C/text%3E%3Ctext x='0' y='55' font-family='monospace' font-size='10' fill='%2300ff00'%3E10101010%3C/text%3E%3Ctext x='0' y='70' font-family='monospace' font-size='10' fill='%2300ff00'%3E11110000%3C/text%3E%3Ctext x='0' y='85' font-family='monospace' font-size='10' fill='%2300ff00'%3E00001111%3C/text%3E%3Ctext x='0' y='100' font-family='monospace' font-size='10' fill='%2300ff00'%3E10010010%3C/text%3E%3C/svg%3E")`,
        animation: "matrix 15s linear infinite",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "100%" }}>
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <main style={{ minHeight: "calc(100vh - 64px)" }}>
          {renderPage()}
        </main>
        <Footer />
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0% { transform: translate(0, 0); }
            100% { transform: translate(-100px, -100px); }
          }
          @keyframes matrix {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
        `
      }} />
    </div>
  );
}
