import { GENERAL_REQUIREMENTS } from "../constants";

interface HomePageProps {
  setActivePage: (page: string) => void;
}

export default function HomePage({ setActivePage }: HomePageProps) {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Hero */}
      <div style={{ 
        background: "linear-gradient(135deg, #0f2c6f 0%, #1a56db 60%, #3b82f6 100%)", 
        color: "white", 
        padding: "80px 60px 100px", 
        textAlign: "center", 
        position: "relative", 
        overflow: "hidden" 
      }}>
        <div style={{ 
          position: "absolute", 
          top: -60, 
          right: -60, 
          width: 300, 
          height: 300, 
          background: "rgba(255,255,255,0.04)", 
          borderRadius: "50%" 
        }} />
        <div style={{ 
          position: "absolute", 
          bottom: -80, 
          left: -80, 
          width: 400, 
          height: 400, 
          background: "rgba(255,255,255,0.03)", 
          borderRadius: "50%" 
        }} />
        <div style={{ 
          display: "inline-block", 
          background: "rgba(255,255,255,0.15)", 
          padding: "6px 18px", 
          borderRadius: 20, 
          fontSize: 12, 
          letterSpacing: 2, 
          textTransform: "uppercase", 
          marginBottom: 20 
        }}>
          VisayasMed Hospital
        </div>
        <h1 style={{ 
          fontSize: 52, 
          fontWeight: 900, 
          margin: "0 0 16px", 
          lineHeight: 1.1, 
          letterSpacing: -1 
        }}>
          IT Department Portal
        </h1>
        <p style={{ 
          fontSize: 18, 
          opacity: 0.85, 
          maxWidth: 560, 
          margin: "0 auto 40px", 
          lineHeight: 1.6 
        }}>
          Your central hub for IT services, resources, documentation, and support at VISAYASMED Hospital.
        </p>
        <div style={{ 
          display: "flex", 
          gap: 16, 
          justifyContent: "center", 
          flexWrap: "wrap" 
        }}>
          <button 
            onClick={() => setActivePage("Submit Ticket")} 
            style={{ 
              background: "white", 
              color: "#1a56db", 
              border: "none", 
              padding: "14px 32px", 
              borderRadius: 10, 
              fontWeight: 700, 
              fontSize: 16, 
              cursor: "pointer", 
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)" 
            }}
          >
            🎫 Submit a Ticket
          </button>
          <button 
            onClick={() => setActivePage("Services")} 
            style={{ 
              background: "rgba(255,255,255,0.15)", 
              color: "white", 
              border: "1.5px solid rgba(255,255,255,0.4)", 
              padding: "14px 32px", 
              borderRadius: 10, 
              fontWeight: 700, 
              fontSize: 16, 
              cursor: "pointer" 
            }}
          >
            View Services →
          </button>
        </div>
      </div>

      {/* Quick Access Cards */}
      <div style={{ background: "#f8fafc", padding: "60px 60px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ 
            color: "#1a56db", 
            fontWeight: 700, 
            fontSize: 12, 
            letterSpacing: 3, 
            textTransform: "uppercase", 
            marginBottom: 8 
          }}>
            QUICK ACCESS
          </div>
          <h2 style={{ 
            fontSize: 32, 
            fontWeight: 800, 
            color: "#1a1a2e", 
            margin: 0 
          }}>
            What do you need today?
          </h2>
        </div>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(3, 1fr)", 
          gap: 20, 
          maxWidth: 960, 
          margin: "0 auto" 
        }}>
          {[
            { icon: "🎫", label: "Submit IT Ticket", desc: "Report issues, request access, hardware problems", page: "Submit Ticket", color: "#dbeafe" },
            { icon: "📁", label: "File Resources", desc: "Access Word docs, Excel, PowerPoint files", page: "Resources", color: "#dcfce7" },
            { icon: "🔗", label: "Quick Links", desc: "SharePoint, OneDrive, HIS Portal & more", page: "Resources", color: "#fef9c3" },
            { icon: "📢", label: "Announcements", desc: "Latest IT updates and maintenance notices", page: "Announcements", color: "#fce7f3" },
            { icon: "👥", label: "Our IT Team", desc: "Meet the people keeping systems running", page: "Our Team", color: "#ede9fe" },
            { icon: "🎓", label: "New Employee Guide", desc: "Onboarding info, policies & general requirements", page: "Services", color: "#ffedd5" },
          ].map(card => (
            <button 
              key={card.label} 
              onClick={() => setActivePage(card.page)}
              style={{ 
                background: card.color, 
                border: "none", 
                borderRadius: 14, 
                padding: "28px 24px", 
                textAlign: "left", 
                cursor: "pointer", 
                transition: "transform 0.2s, box-shadow 0.2s", 
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)" 
              }}
              onMouseEnter={e => { 
                e.currentTarget.style.transform = "translateY(-3px)"; 
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)"; 
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.transform = ""; 
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)"; 
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 10 }}>{card.icon}</div>
              <div style={{ 
                fontWeight: 700, 
                fontSize: 16, 
                color: "#1a1a2e", 
                marginBottom: 6 
              }}>
                {card.label}
              </div>
              <div style={{ 
                fontSize: 13, 
                color: "#6b7280", 
                lineHeight: 1.5 
              }}>
                {card.desc}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Stats Banner */}
      <div style={{ 
        background: "#1a56db", 
        color: "white", 
        padding: "40px 60px", 
        display: "flex", 
        justifyContent: "center", 
        gap: 80 
      }}>
        {[
          ["24/7", "IT Support Available"], 
          ["500+", "Devices Managed"], 
          ["99.9%", "Network Uptime"], 
          ["8", "Core IT Services"]
        ].map(([num, label]) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div style={{ 
              fontSize: 36, 
              fontWeight: 900, 
              letterSpacing: -1 
            }}>
              {num}
            </div>
            <div style={{ 
              fontSize: 13, 
              opacity: 0.8, 
              marginTop: 4 
            }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* General Requirements Preview */}
      <div style={{ 
        padding: "60px 60px", 
        background: "white" 
      }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ 
            color: "#1a56db", 
            fontWeight: 700, 
            fontSize: 12, 
            letterSpacing: 3, 
            textTransform: "uppercase", 
            marginBottom: 8 
          }}>
            ACCEPTABLE USE
          </div>
          <h2 style={{ 
            fontSize: 32, 
            fontWeight: 800, 
            color: "#1a1a2e", 
            margin: "0 0 12px" 
          }}>
            General IT Requirements
          </h2>
          <p style={{ 
            color: "#6b7280", 
            maxWidth: 500, 
            margin: "0 auto" 
          }}>
            Key policies every VisayasMed employee must follow for IT security and compliance.
          </p>
        </div>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(3, 1fr)", 
          gap: 16, 
          maxWidth: 960, 
          margin: "0 auto 32px" 
        }}>
          {GENERAL_REQUIREMENTS.slice(0, 6).map(req => (
            <div key={req.num} style={{ 
              background: "#f8fafc", 
              borderRadius: 12, 
              padding: "20px 22px", 
              display: "flex", 
              gap: 14, 
              alignItems: "flex-start" 
            }}>
              <span style={{ 
                background: "#1a56db", 
                color: "white", 
                borderRadius: 8, 
                padding: "4px 10px", 
                fontWeight: 800, 
                fontSize: 13, 
                flexShrink: 0 
              }}>
                {req.num}
              </span>
              <p style={{ 
                margin: 0, 
                fontSize: 14, 
                color: "#374151", 
                lineHeight: 1.6 
              }}>
                {req.text}
              </p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <button 
            onClick={() => setActivePage("Services")} 
            style={{ 
              background: "#1a56db", 
              color: "white", 
              border: "none", 
              padding: "12px 28px", 
              borderRadius: 10, 
              fontWeight: 600, 
              cursor: "pointer", 
              fontSize: 15 
            }}
          >
            View All Requirements →
          </button>
        </div>
      </div>
    </div>
  );
}
