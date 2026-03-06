import { TEAM_MEMBERS, OJT_STUDENTS } from "../constants";

export default function TeamPage() {
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
          ORGANIZATION
        </div>
        <h2 style={{ 
          fontSize: 38, 
          fontWeight: 900, 
          color: "#1a1a2e", 
          margin: "0 0 12px" 
        }}>
          IT Department Org Chart
        </h2>
        <p style={{ 
          color: "#6b7280", 
          maxWidth: 460, 
          margin: "0 auto" 
        }}>
          Hierarchical structure of the VISAYASMED Hospital IT Department team.
        </p>
      </div>

      {/* Org Chart Container */}
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        {/* Row 1: IT Manager */}
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          marginBottom: 40 
        }}>
          <div 
            style={{ 
              background: "white", 
              borderRadius: 18, 
              padding: "36px 32px", 
              textAlign: "center", 
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)", 
              transition: "transform 0.2s",
              border: "3px solid #1a56db",
              minWidth: 280
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
            onMouseLeave={e => e.currentTarget.style.transform = ""}
          >
            <div style={{ 
              width: 80, 
              height: 80, 
              borderRadius: "50%", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              fontSize: 36, 
              margin: "0 auto 16px",
              overflow: "hidden",
              background: "#dbeafe",
              position: "relative"
            }}>
              {TEAM_MEMBERS[0].image ? (
                <img 
                  src={TEAM_MEMBERS[0].image} 
                  alt={TEAM_MEMBERS[0].name}
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover",
                    borderRadius: "50%",
                    position: "absolute",
                    top: 0,
                    left: 0
                  }}
                />
              ) : (
                <div>{TEAM_MEMBERS[0].icon}</div>
              )}
            </div>
            <div style={{ 
              fontWeight: 700, 
              fontSize: 18, 
              color: "#1a56db", 
              marginBottom: 6 
            }}>
              {TEAM_MEMBERS[0].name}
            </div>
            <div style={{ 
              fontSize: 14, 
              color: "#6b7280",
              fontWeight: 600
            }}>
              {TEAM_MEMBERS[0].role}
            </div>
          </div>
        </div>

        {/* Connecting Line */}
        <div style={{ 
          width: 2, 
          height: 30, 
          background: "#d1d5db", 
          margin: "0 auto 30px"
        }} />

        {/* Row 2: System Analyst */}
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          marginBottom: 40 
        }}>
          <div 
            style={{ 
              background: "white", 
              borderRadius: 16, 
              padding: "32px 28px", 
              textAlign: "center", 
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)", 
              transition: "transform 0.2s",
              border: "2px solid #10b981",
              minWidth: 260
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
            onMouseLeave={e => e.currentTarget.style.transform = ""}
          >
            <div style={{ 
              width: 72, 
              height: 72, 
              borderRadius: "50%", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              fontSize: 32, 
              margin: "0 auto 16px",
              overflow: "hidden",
              background: "#dcfce7",
              position: "relative"
            }}>
              {TEAM_MEMBERS[1].image ? (
                <img 
                  src={TEAM_MEMBERS[1].image} 
                  alt={TEAM_MEMBERS[1].name}
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover",
                    borderRadius: "50%",
                    position: "absolute",
                    top: 0,
                    left: 0
                  }}
                />
              ) : (
                <div>{TEAM_MEMBERS[1].icon}</div>
              )}
            </div>
            <div style={{ 
              fontWeight: 700, 
              fontSize: 16, 
              color: "#10b981", 
              marginBottom: 6 
            }}>
              {TEAM_MEMBERS[1].name}
            </div>
            <div style={{ 
              fontSize: 13, 
              color: "#6b7280",
              fontWeight: 600
            }}>
              {TEAM_MEMBERS[1].role}
            </div>
          </div>
        </div>

        {/* Connecting Lines */}
        <div style={{ 
          width: 2, 
          height: 30, 
          background: "#d1d5db", 
          margin: "0 auto 30px"
        }} />

        {/* Row 3: Network Engineers */}
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: 40, 
          marginBottom: 40 
        }}>
          {[TEAM_MEMBERS[2], TEAM_MEMBERS[3]].map((member, i) => (
            <div 
              key={i}
              style={{ 
                background: "white", 
                borderRadius: 16, 
                padding: "28px 24px", 
                textAlign: "center", 
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)", 
                transition: "transform 0.2s",
                border: "2px solid #f59e0b",
                minWidth: 240
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
              onMouseLeave={e => e.currentTarget.style.transform = ""}
            >
              <div style={{ 
                width: 68, 
                height: 68, 
                borderRadius: "50%", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                fontSize: 30, 
                margin: "0 auto 14px",
                overflow: "hidden",
                background: member.color,
                position: "relative"
              }}>
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover",
                      borderRadius: "50%",
                      position: "absolute",
                      top: 0,
                      left: 0
                    }}
                  />
                ) : (
                  <div>{member.icon}</div>
                )}
              </div>
              <div style={{ 
                fontWeight: 700, 
                fontSize: 15, 
                color: "#f59e0b", 
                marginBottom: 6 
              }}>
                {member.name}
              </div>
              <div style={{ 
                fontSize: 12, 
                color: "#6b7280",
                fontWeight: 600,
                lineHeight: 1.4
              }}>
                {member.role.includes('<br/>') ? (
                  <>
                    {member.role.split('<br/>').map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < member.role.split('<br/>').length - 1 && <br />}
                      </span>
                    ))}
                  </>
                ) : (
                  member.role
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Connecting Lines */}
        <div style={{ 
          width: 2, 
          height: 30, 
          background: "#d1d5db", 
          margin: "0 auto 30px"
        }} />

        {/* Row 4: OJT Students */}
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: 30, 
          flexWrap: "wrap"
        }}>
          {OJT_STUDENTS.map((student, i) => (
            <div 
              key={i}
              style={{ 
                background: "white", 
                borderRadius: 14, 
                padding: "24px 20px", 
                textAlign: "center", 
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)", 
                transition: "transform 0.2s",
                border: "1px solid #6366f1",
                minWidth: 200
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
              onMouseLeave={e => e.currentTarget.style.transform = ""}
            >
              <div style={{ 
                width: 56, 
                height: 56, 
                borderRadius: "50%", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                fontSize: 24, 
                margin: "0 auto 12px",
                overflow: "hidden",
                background: student.color,
                position: "relative"
              }}>
                {student.image ? (
                  <img 
                    src={student.image} 
                    alt={student.name}
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover",
                      borderRadius: "50%",
                      position: "absolute",
                      top: 0,
                      left: 0
                    }}
                  />
                ) : (
                  <div>{student.icon}</div>
                )}
              </div>
              <div style={{ 
                fontWeight: 700, 
                fontSize: 14, 
                color: "#6366f1", 
                marginBottom: 4 
              }}>
                {student.name}
              </div>
              <div style={{ 
                fontSize: 11, 
                color: "#6b7280",
                fontWeight: 600,
                lineHeight: 1.3
              }}>
                {student.role.includes('<br/>') ? (
                  <>
                    {student.role.split('<br/>').map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < student.role.split('<br/>').length - 1 && <br />}
                      </span>
                    ))}
                  </>
                ) : (
                  student.role
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div style={{ 
          marginTop: 60, 
          textAlign: "center", 
          padding: "24px", 
          background: "white", 
          borderRadius: 16, 
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)" 
        }}>
          <h4 style={{ 
            fontSize: 16, 
            fontWeight: 700, 
            color: "#1a1a2e", 
            marginBottom: 16 
          }}>
            Department Hierarchy
          </h4>
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: 32, 
            flexWrap: "wrap" 
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ 
                width: 12, 
                height: 12, 
                borderRadius: "50%", 
                background: "#1a56db" 
              }} />
              <span style={{ fontSize: 13, color: "#6b7280" }}>Management</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ 
                width: 12, 
                height: 12, 
                borderRadius: "50%", 
                background: "#10b981" 
              }} />
              <span style={{ fontSize: 13, color: "#6b7280" }}>Systems</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ 
                width: 12, 
                height: 12, 
                borderRadius: "50%", 
                background: "#f59e0b" 
              }} />
              <span style={{ fontSize: 13, color: "#6b7280" }}>Network</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ 
                width: 12, 
                height: 12, 
                borderRadius: "50%", 
                background: "#6366f1" 
              }} />
              <span style={{ fontSize: 13, color: "#6b7280" }}>Trainees</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
