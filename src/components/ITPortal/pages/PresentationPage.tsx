export default function PresentationPage() {
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
          RESOURCES
        </div>
        <h2 style={{ 
          fontSize: 38, 
          fontWeight: 900, 
          color: "#1a1a2e", 
          margin: "0 0 12px" 
        }}>
          New Employee Presentation
        </h2>
        <p style={{ 
          color: "#6b7280", 
          maxWidth: 600, 
          margin: "0 auto" 
        }}>
          Complete onboarding presentation for all new VISAYASMED Hospital employees. 
          This presentation covers IT policies, systems access, and important guidelines.
        </p>
      </div>

      <div style={{ 
        maxWidth: 800, 
        margin: "0 auto", 
        background: "white", 
        borderRadius: 20, 
        padding: "40px", 
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)" 
      }}>
        {/* Presentation Preview */}
        <div style={{ 
          background: "linear-gradient(135deg, #1a56db 0%, #3b82f6 100%)", 
          borderRadius: 16, 
          padding: "60px 40px", 
          textAlign: "center", 
          marginBottom: 30 
        }}>
          <div style={{ 
            fontSize: 64, 
            marginBottom: 20 
          }}>
            📊
          </div>
          <h3 style={{ 
            color: "white", 
            fontSize: 24, 
            fontWeight: 700, 
            margin: "0 0 12px" 
          }}>
            VisayasMed Presentation for New Employees
          </h3>
          <p style={{ 
            color: "rgba(255,255,255,0.8)", 
            fontSize: 16, 
            margin: 0 
          }}>
            PowerPoint Presentation • 1.5 MB
          </p>
        </div>

        {/* Download Section */}
        <div style={{ 
          background: "#f8fafc", 
          borderRadius: 12, 
          padding: "24px", 
          marginBottom: 30 
        }}>
          <h4 style={{ 
            fontSize: 18, 
            fontWeight: 700, 
            color: "#1a1a2e", 
            margin: "0 0 16px" 
          }}>
            📥 Download Options
          </h4>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a 
              href="/VisayasMed Presentation for New Employees.pptx" 
              download
              style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: 8, 
                background: "#1a56db", 
                color: "white", 
                padding: "12px 24px", 
                borderRadius: 10, 
                textDecoration: "none", 
                fontWeight: 600, 
                fontSize: 15, 
                transition: "all 0.2s" 
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#1e40af"}
              onMouseLeave={e => e.currentTarget.style.background = "#1a56db"}
            >
              📥 Download PowerPoint
            </a>
            <a 
              href="/VisayasMed Presentation for New Employees.pptx" 
              target="_blank"
              style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: 8, 
                background: "white", 
                color: "#1a56db", 
                border: "2px solid #1a56db", 
                padding: "12px 24px", 
                borderRadius: 10, 
                textDecoration: "none", 
                fontWeight: 600, 
                fontSize: 15, 
                transition: "all 0.2s" 
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#1a56db"; e.currentTarget.style.color = "white"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "#1a56db"; }}
            >
              🔗 Open in Browser
            </a>
          </div>
        </div>

        {/* Presentation Info */}
        <div style={{ 
          background: "#f0f9ff", 
          border: "1px solid #bae6fd", 
          borderRadius: 12, 
          padding: "24px" 
        }}>
          <h4 style={{ 
            fontSize: 18, 
            fontWeight: 700, 
            color: "#0369a1", 
            margin: "0 0 16px" 
          }}>
            ℹ️ About This Presentation
          </h4>
          <ul style={{ 
            margin: 0, 
            paddingLeft: 20, 
            color: "#374151", 
            lineHeight: 1.8 
          }}>
            <li>Complete IT onboarding guide for new employees</li>
            <li>System access and login procedures</li>
            <li>Security policies and best practices</li>
            <li>Available IT services and support channels</li>
            <li>Important contact information and resources</li>
          </ul>
        </div>

        {/* Instructions */}
        <div style={{ 
          background: "#fffbeb", 
          border: "1px solid #fed7aa", 
          borderRadius: 12, 
          padding: "24px", 
          marginTop: 30 
        }}>
          <h4 style={{ 
            fontSize: 18, 
            fontWeight: 700, 
            color: "#92400e", 
            margin: "0 0 12px" 
          }}>
            💡 How to View
          </h4>
          <ol style={{ 
            margin: 0, 
            paddingLeft: 20, 
            color: "#374151", 
            lineHeight: 1.8 
          }}>
            <li>Click "Download PowerPoint" to save the file to your device</li>
            <li>Open the file with Microsoft PowerPoint, PowerPoint Online, or compatible viewer</li>
            <li>Alternatively, click "Open in Browser" to view directly (may require browser plugin)</li>
            <li>For mobile users, consider using PowerPoint mobile app or Google Slides</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
