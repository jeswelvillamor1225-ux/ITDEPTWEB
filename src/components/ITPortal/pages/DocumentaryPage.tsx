import { useState, useEffect } from "react";

export default function DocumentaryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const documentaryItems = [
    { 
      title: "IT Team Collaboration", 
      desc: "Team working together on infrastructure project", 
      date: "Feb 2024", 
      tag: "IMAGE", 
      color: "#e3f2fd",
      image: "/documentary/images/597298515_753483901094684_965509077331795814_n.jpg"
    },
    { 
      title: "Network Setup", 
      desc: "Installation of network equipment in server room", 
      date: "Feb 2024", 
      tag: "IMAGE", 
      color: "#e8f5e9",
      image: "/documentary/images/597347948_844148291758249_9177582673195127349_n.jpg"
    },
    { 
      title: "Hardware Installation", 
      desc: "Setting up new workstations for hospital staff", 
      date: "Feb 2024", 
      tag: "IMAGE", 
      color: "#fce4ec",
      image: "/documentary/images/597574865_704533305785195_571104752883722668_n.jpg"
    },
    { 
      title: "Server Room Maintenance", 
      desc: "Regular maintenance and optimization of servers", 
      date: "Mar 2024", 
      tag: "IMAGE", 
      color: "#fff8e1",
      image: "/documentary/images/623250975_1252442546461226_8152827667388661683_n.jpg"
    },
    { 
      title: "IT Training Session", 
      desc: "Hands-on training for hospital staff on new systems", 
      date: "Mar 2024", 
      tag: "IMAGE", 
      color: "#f3e8fd",
      image: "/documentary/images/626294003_1225316629199226_4450420096650389425_n.jpg"
    },
    { 
      title: "Team Meeting", 
      desc: "Monthly IT department planning and review session", 
      date: "Mar 2024", 
      tag: "IMAGE", 
      color: "#e0f7fa",
      image: "/documentary/images/626813723_942371032059848_1730026989541514522_n.jpg"
    },
    { 
      title: "Infrastructure Upgrade", 
      desc: "Upgrading hospital network infrastructure", 
      date: "Mar 2024", 
      tag: "IMAGE", 
      color: "#e3f2fd",
      image: "/documentary/images/633793754_1912322199644180_7651029901755374418_n.jpg"
    },
    { 
      title: "System Configuration", 
      desc: "Configuring HIS system for new department", 
      date: "Apr 2024", 
      tag: "IMAGE", 
      color: "#e8f5e9",
      image: "/documentary/images/639070623_2452489701835784_9109158539565139498_n.jpg"
    },
    { 
      title: "Equipment Installation", 
      desc: "Installing medical IT equipment in patient wards", 
      date: "Apr 2024", 
      tag: "IMAGE", 
      color: "#fce4ec",
      image: "/documentary/images/639680657_1805399473457915_8713040372326012098_n.jpg"
    },
    { 
      title: "Network Troubleshooting", 
      desc: "Diagnosing and resolving network connectivity issues", 
      date: "Apr 2024", 
      tag: "IMAGE", 
      color: "#fff8e1",
      image: "/documentary/images/640201768_1459667352418767_4366530700010272872_n.jpg"
    },
    { 
      title: "Viber Team Update", 
      desc: "IT team coordination via mobile messaging", 
      date: "Feb 2024", 
      tag: "IMAGE", 
      color: "#f3e8fd",
      image: "/documentary/images/viber_image_2026-02-24_11-08-25-873.jpg"
    },
    { 
      title: "Quick Support Response", 
      desc: "Rapid IT support for hospital emergency", 
      date: "Mar 2024", 
      tag: "IMAGE", 
      color: "#e0f7fa",
      image: "/documentary/images/viber_image_2026-03-01_10-20-43-711.jpg"
    }
  ];

  return (
    <div style={{ 
      width: "100%", 
      height: "100%", 
      background: "#f7f7f7",
      display: "flex",
      flexDirection: "column",
      overflow: "auto",
      minWidth: 0,
      maxWidth: "100%",
      boxSizing: "border-box"
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
        gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(250px, 1fr))", 
        gap: 16, 
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        padding: isMobile ? "0 10px" : "0 20px"
      }}>
        {documentaryItems.map((item, i) => (
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
              height: 150, 
              overflow: "hidden",
              position: "relative"
            }}>
              <img 
                src={item.image} 
                alt={item.title}
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover",
                  transition: "transform 0.3s",
                  cursor: "pointer"
                }}
                onClick={() => setSelectedImage(item.image)}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)",
                opacity: 0,
                transition: "opacity 0.3s"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.opacity = "0";
              }}
              />
            </div>
            <div style={{ padding: "16px 18px" }}>
              <h3 style={{ 
                fontWeight: 700, 
                fontSize: 14, 
                color: "#1a1a2e", 
                margin: "0 0 6px" 
              }}>
                {item.title}
              </h3>
              <p style={{ 
                fontSize: 12, 
                color: "#6b7280", 
                lineHeight: 1.5, 
                margin: "0 0 12px" 
              }}>
                {item.desc}
              </p>
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center" 
              }}>
                <span style={{ 
                  background: "#22e9ad", 
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

      {/* Image Viewer Modal */}
      {selectedImage && (
        <div 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            cursor: "pointer"
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div 
            style={{
              background: "white",
              borderRadius: 16,
              padding: 20,
              maxWidth: "90vw",
              maxHeight: "90vh",
              position: "relative",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "#ef4444",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: 40,
                height: 40,
                fontSize: 20,
                fontWeight: "bold",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img 
              src={selectedImage}
              alt="Full size image"
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                borderRadius: 8
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
