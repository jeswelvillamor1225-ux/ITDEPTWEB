import { NAV_ITEMS } from "../constants";

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  return (
    <nav style={{ 
      position: "sticky", 
      top: 0, 
      zIndex: 100, 
      background: "white", 
      boxShadow: "0 1px 12px rgba(0,0,0,0.08)", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "space-between", 
      padding: "0 32px", 
      height: 64, 
      fontFamily: "'Segoe UI', sans-serif" 
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ 
          background: "#1a56db", 
          borderRadius: 10, 
          width: 38, 
          height: 38, 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          color: "white", 
          fontWeight: 900, 
          fontSize: 18 
        }}>
          V
        </div>
        <div>
          <div style={{ 
            fontWeight: 800, 
            fontSize: 16, 
            color: "#1a1a2e", 
            letterSpacing: 1 
          }}>
            VISMED
          </div>
          <div style={{ 
            fontSize: 10, 
            color: "#6b7280", 
            letterSpacing: 2, 
            textTransform: "uppercase" 
          }}>
            IT DEPARTMENT
          </div>
        </div>
      </div>
      
      <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
        {NAV_ITEMS.map(item => (
          <button 
            key={item} 
            onClick={() => setActivePage(item)}
            style={{ 
              background: "none", 
              border: "none", 
              cursor: "pointer", 
              padding: "8px 14px", 
              borderRadius: 8, 
              fontWeight: activePage === item ? 700 : 500, 
              color: activePage === item ? "#1a56db" : "#374151", 
              fontSize: 14, 
              transition: "all 0.2s", 
              borderBottom: activePage === item ? "2px solid #1a56db" : "2px solid transparent" 
            }}
          >
            {item}
          </button>
        ))}
      </div>
      
      <div style={{ display: "flex", gap: 10 }}>
        <button 
          onClick={() => setActivePage("Submit Ticket")} 
          style={{ 
            border: "1.5px solid #1a56db", 
            background: "white", 
            color: "#1a56db", 
            padding: "8px 18px", 
            borderRadius: 8, 
            fontWeight: 600, 
            cursor: "pointer", 
            fontSize: 14 
          }}
        >
          Submit Ticket
        </button>
      </div>
    </nav>
  );
}
