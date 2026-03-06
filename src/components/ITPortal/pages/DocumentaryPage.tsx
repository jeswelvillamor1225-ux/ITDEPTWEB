import { DOCS_GALLERY } from "../constants";

export default function DocumentaryPage() {
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
          OUR WORK
        </div>
        <h2 style={{ 
          fontSize: 38, 
          fontWeight: 900, 
          color: "#1a1a2e", 
          margin: "0 0 12px" 
        }}>
          Documentary Gallery
        </h2>
        <p style={{ 
          color: "#6b7280", 
          maxWidth: 520, 
          margin: "0 auto" 
        }}>
          Visual showcase of IT projects, infrastructure improvements, and team achievements at VISAYASMED Hospital.
        </p>
      </div>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(3, 1fr)", 
        gap: 24, 
        maxWidth: 1100, 
        margin: "0 auto" 
      }}>
        {DOCS_GALLERY.map((item, i) => (
          <div 
            key={i} 
            style={{ 
              background: "white", 
              borderRadius: 18, 
              overflow: "hidden", 
              boxShadow: "0 2px 12px rgba(0,0,0,0.07)", 
              transition: "transform 0.2s, box-shadow 0.2s" 
            }}
            onMouseEnter={e => { 
              e.currentTarget.style.transform = "translateY(-4px)"; 
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.13)"; 
            }}
            onMouseLeave={e => { 
              e.currentTarget.style.transform = ""; 
              e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.07)"; 
            }}
          >
            <div style={{ 
              background: item.color, 
              height: 180, 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              fontSize: 64 
            }}>
              {["🤝", "🌐", "🖥️", "🎓", "🔧", "📋"][i % 6]}
            </div>
            <div style={{ padding: "22px 24px" }}>
              <h3 style={{ 
                fontWeight: 700, 
                fontSize: 16, 
                color: "#1a1a2e", 
                margin: "0 0 8px" 
              }}>
                {item.title}
              </h3>
              <p style={{ 
                fontSize: 13, 
                color: "#6b7280", 
                lineHeight: 1.6, 
                margin: "0 0 16px" 
              }}>
                {item.desc}
              </p>
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center" 
              }}>
                <span style={{ 
                  background: "#dbeafe", 
                  color: "#1a56db", 
                  borderRadius: 6, 
                  padding: "3px 10px", 
                  fontSize: 12, 
                  fontWeight: 700 
                }}>
                  {item.tag}
                </span>
                <span style={{ color: "#9ca3af", fontSize: 12 }}>
                  {item.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
