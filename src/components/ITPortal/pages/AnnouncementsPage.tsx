import { ANNOUNCEMENTS } from "../constants";

export default function AnnouncementsPage() {
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
          LATEST UPDATES
        </div>
        <h2 style={{ 
          fontSize: 38, 
          fontWeight: 900, 
          color: "#1a1a2e", 
          margin: 0 
        }}>
          Announcements
        </h2>
      </div>
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: 18, 
        maxWidth: 780, 
        margin: "0 auto" 
      }}>
        {ANNOUNCEMENTS.map((a, i) => (
          <div 
            key={i} 
            style={{ 
              background: "white", 
              borderRadius: 16, 
              padding: "28px 32px", 
              boxShadow: "0 2px 10px rgba(0,0,0,0.06)", 
              display: "flex", 
              gap: 20 
            }}
          >
            <div style={{ 
              background: a.color, 
              width: 52, 
              height: 52, 
              borderRadius: 12, 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              fontSize: 24, 
              flexShrink: 0 
            }}>
              {a.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "flex-start", 
                marginBottom: 8 
              }}>
                <h3 style={{ 
                  fontWeight: 700, 
                  fontSize: 17, 
                  color: "#1a1a2e", 
                  margin: 0 
                }}>
                  {a.title}
                </h3>
                <span style={{ 
                  background: "#f0f4ff", 
                  color: "#1a56db", 
                  borderRadius: 6, 
                  padding: "3px 10px", 
                  fontSize: 11, 
                  fontWeight: 700, 
                  flexShrink: 0, 
                  marginLeft: 12 
                }}>
                  {a.type}
                </span>
              </div>
              <p style={{ 
                fontSize: 14, 
                color: "#6b7280", 
                margin: "0 0 8px", 
                lineHeight: 1.6 
              }}>
                {a.body}
              </p>
              <span style={{ 
                fontSize: 12, 
                color: "#9ca3af" 
              }}>
                📅 {a.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
