import { CONTACT_INFO } from "../constants";

export default function ContactPage() {
  return (
    <div style={{ 
      fontFamily: "'Segoe UI', sans-serif", 
      padding: "60px", 
      background: "#f8fafc", 
      minHeight: "100vh" 
    }}>
      <div style={{ textAlign: "center", marginBottom: 50 }}>
        <div style={{ 
          color: "#1a56db", 
          fontWeight: 700, 
          fontSize: 12, 
          letterSpacing: 3, 
          textTransform: "uppercase", 
          marginBottom: 8 
        }}>
          REACH OUT
        </div>
        <h2 style={{ 
          fontSize: 38, 
          fontWeight: 900, 
          color: "#1a1a2e", 
          margin: 0 
        }}>
          Contact Us
        </h2>
      </div>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "1fr 1fr", 
        gap: 28, 
        maxWidth: 860, 
        margin: "0 auto" 
      }}>
        {CONTACT_INFO.map((contact, i) => (
          <div 
            key={i} 
            style={{ 
              background: "white", 
              borderRadius: 16, 
              padding: "28px 32px", 
              boxShadow: "0 2px 10px rgba(0,0,0,0.06)", 
              display: "flex", 
              gap: 18, 
              alignItems: "center" 
            }}
          >
            <div style={{ 
              background: "#dbeafe", 
              width: 52, 
              height: 52, 
              borderRadius: 12, 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              fontSize: 24, 
              flexShrink: 0 
            }}>
              {contact.icon}
            </div>
            <div>
              <div style={{ 
                fontSize: 12, 
                color: "#9ca3af", 
                fontWeight: 600, 
                textTransform: "uppercase", 
                letterSpacing: 1, 
                marginBottom: 4 
              }}>
                {contact.label}
              </div>
              <div style={{ 
                fontWeight: 700, 
                fontSize: 16, 
                color: "#1a1a2e", 
                marginBottom: 2 
              }}>
                {contact.value}
              </div>
              <div style={{ fontSize: 13, color: "#6b7280" }}>
                {contact.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
