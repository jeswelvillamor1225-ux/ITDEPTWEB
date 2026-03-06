import { useState } from "react";
import { GENERAL_REQUIREMENTS, QUICK_LINKS } from "../constants";

interface HomePageProps {
  setActivePage: (page: string) => void;
}

export default function HomePage({ setActivePage }: HomePageProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  
  const photos = [
    { id: 1, title: "Slide 1", description: "VisayasMed Presentation for New Employees - Introduction", image: "/VisayasMed Presentation for New Employees/Slide1.PNG" },
    { id: 2, title: "Slide 2", description: "VisayasMed Presentation for New Employees - Overview", image: "/VisayasMed Presentation for New Employees/Slide2.PNG" },
    { id: 3, title: "Slide 3", description: "VisayasMed Presentation for New Employees - Services", image: "/VisayasMed Presentation for New Employees/Slide3.PNG" },
    { id: 4, title: "Slide 4", description: "VisayasMed Presentation for New Employees - Departments", image: "/VisayasMed Presentation for New Employees/Slide4.PNG" },
    { id: 5, title: "Slide 5", description: "VisayasMed Presentation for New Employees - IT Department", image: "/VisayasMed Presentation for New Employees/Slide5.PNG" },
    { id: 6, title: "Slide 6", description: "VisayasMed Presentation for New Employees - IT Services", image: "/VisayasMed Presentation for New Employees/Slide6.PNG" },
    { id: 7, title: "Slide 7", description: "VisayasMed Presentation for New Employees - Contact Information", image: "/VisayasMed Presentation for New Employees/Slide7.PNG" },
    { id: 8, title: "Slide 8", description: "VisayasMed Presentation for New Employees - Conclusion", image: "/VisayasMed Presentation for New Employees/Slide8.PNG" }
  ];

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", width: "100%" }}>
      {/* Hero */}
      <div style={{ 
        background: "linear-gradient(135deg, #0f2c6f 0%, #1a56db 60%, #3b82f6 100%)", 
        color: "white", 
        padding: "80px 20px 100px", 
        textAlign: "center", 
        position: "relative", 
        overflow: "hidden",
        width: "100%"
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
      <div style={{ background: "#f8fafc", padding: "60px 20px 40px", width: "100%" }}>
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
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: 20, 
          width: "100%"
        }}>
          {QUICK_LINKS.map(link => (
            <button 
              key={link.label} 
              onClick={() => window.open(link.url, '_blank')}
              style={{ 
                background: "#fef9c3", 
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
              <div style={{ fontSize: 32, marginBottom: 10 }}>{link.label}</div>
              <div style={{ 
                fontWeight: 700, 
                fontSize: 15, 
                color: "#1a1a2e", 
                marginBottom: 4 
              }}>
                {link.label}
              </div>
              <div style={{ 
                fontSize: 13, 
                color: "#6b7280", 
                lineHeight: 1.4 
              }}>
                {link.desc}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Stats Banner */}
      <div style={{ 
        background: "#1a56db", 
        color: "white", 
        padding: "40px 20px", 
        display: "flex", 
        justifyContent: "space-around", 
        gap: 40,
        flexWrap: "wrap",
        width: "100%"
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
        padding: "60px 20px", 
        background: "white",
        width: "100%"
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

      {/* Photo Album Section */}
      <div style={{ 
        background: "#1a1a2e", 
        padding: "80px 20px", 
        textAlign: "center",
        width: "100%"
      }}>
        <div style={{ 
          color: "#ffffff", 
          fontWeight: 700, 
          fontSize: 12, 
          letterSpacing: 3, 
          textTransform: "uppercase", 
          marginBottom: 16 
        }}>
          GALLERY
        </div>
        <h2 style={{ 
          fontSize: 38, 
          fontWeight: 900, 
          color: "#ffffff", 
          margin: "0 0 16px" 
        }}>
          IT Department Activities
        </h2>
        <p style={{ 
          color: "#9ca3af", 
          maxWidth: 500, 
          margin: "0 auto 60px", 
          fontSize: 16,
          lineHeight: 1.6 
        }}>
          Browse through our recent IT activities, projects, and team events.
        </p>

        {/* Photo Album */}
        <div style={{ 
          maxWidth: 900, 
          margin: "0 auto", 
          position: "relative"
        }}>
          {/* Main Photo Display */}
          <div style={{ 
            background: "#374151", 
            borderRadius: 16, 
            padding: 20, 
            marginBottom: 30,
            minHeight: 400,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden"
          }}>
            <img 
              src={photos[currentPhotoIndex].image}
              alt={photos[currentPhotoIndex].title}
              style={{ 
                maxWidth: "100%",
                maxHeight: 500,
                borderRadius: 8,
                objectFit: "contain"
              }}
            />
          </div>

          {/* Navigation Buttons */}
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            position: "relative"
          }}>
            <button 
              onClick={prevPhoto}
              style={{ 
                background: "#1a56db", 
                color: "white", 
                border: "none", 
                padding: "12px 24px", 
                borderRadius: 10, 
                fontWeight: 600, 
                fontSize: 14,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: "all 0.2s"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#2563eb";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#1a56db";
                e.currentTarget.style.transform = "";
              }}
            >
              ← Previous
            </button>

            {/* Photo Indicators */}
            <div style={{ 
              display: "flex", 
              gap: 8,
              alignItems: "center"
            }}>
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhotoIndex(index)}
                  style={{ 
                    width: index === currentPhotoIndex ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: index === currentPhotoIndex ? "#1a56db" : "#4b5563",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                />
              ))}
            </div>

            <button 
              onClick={nextPhoto}
              style={{ 
                background: "#1a56db", 
                color: "white", 
                border: "none", 
                padding: "12px 24px", 
                borderRadius: 10, 
                fontWeight: 600, 
                fontSize: 14,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: "all 0.2s"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#2563eb";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#1a56db";
                e.currentTarget.style.transform = "";
              }}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
