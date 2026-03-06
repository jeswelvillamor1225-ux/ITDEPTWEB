import { useState, useRef } from "react";
import { QUICK_LINKS, SAMPLE_FILES } from "../constants";

interface UploadedFile {
  name: string;
  size: string;
  type: string;
  date: string;
}

interface CustomLink {
  icon: string;
  label: string;
  url: string;
  desc: string;
}

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("files");
  const [linkForm, setLinkForm] = useState({ label: "", url: "", desc: "" });
  const [customLinks, setCustomLinks] = useState<CustomLink[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    const newFiles = files.map(f => ({
      name: f.name,
      size: (f.size / 1024).toFixed(1) + " KB",
      type: f.name.split(".").pop()?.toUpperCase() || "",
      date: new Date().toLocaleDateString(),
    }));
    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const addLink = () => {
    if (linkForm.label && linkForm.url) {
      setCustomLinks(prev => [...prev, { ...linkForm, icon: "🔗" }]);
      setLinkForm({ label: "", url: "", desc: "" });
    }
  };

  const getFileIcon = (type: string) => {
    if (["DOC", "DOCX"].includes(type)) return "📄";
    if (["XLS", "XLSX"].includes(type)) return "📊";
    if (["PPT", "PPTX"].includes(type)) return "📑";
    if (["PDF"].includes(type)) return "📕";
    return "📎";
  };

  const allLinks: (typeof QUICK_LINKS[0] | CustomLink)[] = [...QUICK_LINKS, ...customLinks];

  return (
    <div style={{ 
      fontFamily: "'Segoe UI', sans-serif", 
      padding: "60px", 
      background: "#f8fafc", 
      minHeight: "100vh" 
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
          IT RESOURCES
        </div>
        <h2 style={{ 
          fontSize: 38, 
          fontWeight: 900, 
          color: "#1a1a2e", 
          margin: 0 
        }}>
          Files & Quick Links
        </h2>
      </div>

      {/* Tabs */}
      <div style={{ 
        display: "flex", 
        gap: 8, 
        maxWidth: 900, 
        margin: "0 auto 36px", 
        background: "white", 
        padding: 6, 
        borderRadius: 14, 
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)" 
      }}>
        {[
          ["files", "📁 File Repository"], 
          ["links", "🔗 Quick Links"], 
          ["upload", "⬆️ Upload File"], 
          ["addlink", "➕ Add Link"]
        ].map(([key, label]) => (
          <button 
            key={key} 
            onClick={() => setActiveTab(key)}
            style={{ 
              flex: 1, 
              padding: "12px 20px", 
              border: "none", 
              borderRadius: 10, 
              fontWeight: 600, 
              fontSize: 14, 
              cursor: "pointer", 
              background: activeTab === key ? "#1a56db" : "transparent", 
              color: activeTab === key ? "white" : "#6b7280", 
              transition: "all 0.2s" 
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {activeTab === "files" && (
          <div>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(3, 1fr)", 
              gap: 14, 
              marginBottom: 24 
            }}>
              {[...SAMPLE_FILES, ...uploadedFiles].map((f, i) => (
                <div 
                  key={i} 
                  style={{ 
                    background: "white", 
                    borderRadius: 14, 
                    padding: "20px", 
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)", 
                    display: "flex", 
                    gap: 14, 
                    alignItems: "center", 
                    cursor: "pointer", 
                    transition: "box-shadow 0.2s" 
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.12)"}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)"}
                >
                  <div style={{ fontSize: 36 }}>{getFileIcon(f.type)}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ 
                      fontWeight: 600, 
                      fontSize: 13, 
                      color: "#1a1a2e", 
                      marginBottom: 4, 
                      overflow: "hidden", 
                      textOverflow: "ellipsis", 
                      whiteSpace: "nowrap" 
                    }}>
                      {f.name}
                    </div>
                    <div style={{ fontSize: 12, color: "#9ca3af" }}>
                      {f.type} · {f.size} · {f.date}
                    </div>
                  </div>
                  <span style={{ 
                    background: "#dbeafe", 
                    color: "#1a56db", 
                    borderRadius: 6, 
                    padding: "3px 8px", 
                    fontSize: 11, 
                    fontWeight: 700 
                  }}>
                    {f.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "links" && (
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(3, 1fr)", 
            gap: 14 
          }}>
            {allLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.url} 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  background: "white", 
                  borderRadius: 14, 
                  padding: "22px", 
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)", 
                  textDecoration: "none", 
                  display: "block", 
                  transition: "transform 0.2s, box-shadow 0.2s" 
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
                <div style={{ 
                  fontWeight: 700, 
                  color: "#1a56db", 
                  fontSize: 15, 
                  marginBottom: 6 
                }}>
                  {link.label || ('icon' in link ? `${link.icon} ${link.url}` : link.url)}
                </div>
                <div style={{ fontSize: 13, color: "#6b7280" }}>
                  {link.desc || link.url}
                </div>
                <div style={{ 
                  marginTop: 12, 
                  fontSize: 12, 
                  color: "#9ca3af" 
                }}>
                  ↗ Open link
                </div>
              </a>
            ))}
          </div>
        )}

        {activeTab === "upload" && (
          <div style={{ 
            background: "white", 
            borderRadius: 20, 
            padding: "48px", 
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)", 
            textAlign: "center" 
          }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>📤</div>
            <h3 style={{ 
              fontSize: 22, 
              fontWeight: 700, 
              color: "#1a1a2e", 
              marginBottom: 8 
            }}>
              Upload Files
            </h3>
            <p style={{ 
              color: "#6b7280", 
              marginBottom: 32, 
              fontSize: 15 
            }}>
              Upload Word documents, PowerPoint presentations, Excel spreadsheets, PDFs, and more.
            </p>
            <div style={{ 
              border: "2px dashed #d1d5db", 
              borderRadius: 16, 
              padding: "48px", 
              marginBottom: 24, 
              cursor: "pointer", 
              background: "#f8fafc" 
            }}
              onClick={() => fileRef.current?.click()}
              onDragOver={e => e.preventDefault()}
              onDrop={e => { 
                e.preventDefault(); 
                handleFileUpload({ target: { files: e.dataTransfer.files } } as React.ChangeEvent<HTMLInputElement>); 
              }}
            >
              <input 
                ref={fileRef} 
                type="file" 
                multiple 
                accept=".doc,.docx,.ppt,.pptx,.xls,.xlsx,.pdf" 
                style={{ display: "none" }} 
                onChange={handleFileUpload} 
              />
              <div style={{ color: "#9ca3af", fontSize: 15 }}>
                Drag & drop files here or <span style={{ color: "#1a56db", fontWeight: 600 }}>browse</span>
              </div>
              <div style={{ color: "#c4c9d4", fontSize: 13, marginTop: 8 }}>
                Supports .docx, .pptx, .xlsx, .pdf
              </div>
            </div>
            <div style={{ 
              display: "flex", 
              gap: 12, 
              justifyContent: "center", 
              flexWrap: "wrap" 
            }}>
              {["📄 Word (.docx)", "📑 PowerPoint (.pptx)", "📊 Excel (.xlsx)", "📕 PDF"].map(t => (
                <span 
                  key={t} 
                  style={{ 
                    background: "#f0f4ff", 
                    color: "#1a56db", 
                    padding: "6px 14px", 
                    borderRadius: 20, 
                    fontSize: 13, 
                    fontWeight: 600 
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            {uploadedFiles.length > 0 && (
              <div style={{ marginTop: 28, textAlign: "left" }}>
                <div style={{ fontWeight: 700, marginBottom: 12, color: "#374151" }}>
                  Uploaded ({uploadedFiles.length}):
                </div>
                {uploadedFiles.map((f, i) => (
                  <div 
                    key={i} 
                    style={{ 
                      padding: "10px 16px", 
                      background: "#f0fdf4", 
                      borderRadius: 8, 
                      marginBottom: 8, 
                      fontSize: 14, 
                      color: "#374151", 
                      display: "flex", 
                      justifyContent: "space-between" 
                    }}
                  >
                    <span>✅ {f.name}</span>
                    <span style={{ color: "#9ca3af" }}>{f.size}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "addlink" && (
          <div style={{ 
            background: "white", 
            borderRadius: 20, 
            padding: "48px", 
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)", 
            maxWidth: 600, 
            margin: "0 auto" 
          }}>
            <div style={{ fontSize: 48, textAlign: "center", marginBottom: 12 }}>🔗</div>
            <h3 style={{ 
              textAlign: "center", 
              fontSize: 22, 
              fontWeight: 700, 
              color: "#1a1a2e", 
              marginBottom: 8 
            }}>
              Add Quick Link
            </h3>
            <p style={{ 
              textAlign: "center", 
              color: "#6b7280", 
              marginBottom: 32 
            }}>
              Add external websites, internal portals, or useful tools to the Quick Links panel.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                ["Label / Name", "label", "e.g. HIS Portal"], 
                ["URL", "url", "https://..."], 
                ["Description", "desc", "What is this link for?"]
              ].map(([lbl, key, ph]) => (
                <div key={key}>
                  <label style={{ 
                    display: "block", 
                    fontWeight: 600, 
                    fontSize: 14, 
                    color: "#374151", 
                    marginBottom: 6 
                  }}>
                    {lbl}
                  </label>
                  <input 
                    value={linkForm[key as keyof typeof linkForm]} 
                    onChange={e => setLinkForm(p => ({ ...p, [key]: e.target.value }))} 
                    placeholder={ph}
                    style={{ 
                      width: "100%", 
                      padding: "12px 16px", 
                      border: "1.5px solid #e5e7eb", 
                      borderRadius: 10, 
                      fontSize: 15, 
                      outline: "none", 
                      boxSizing: "border-box" 
                    }} 
                  />
                </div>
              ))}
              <button 
                onClick={addLink} 
                style={{ 
                  background: "#1a56db", 
                  color: "white", 
                  border: "none", 
                  padding: "14px", 
                  borderRadius: 10, 
                  fontWeight: 700, 
                  fontSize: 16, 
                  cursor: "pointer", 
                  marginTop: 8 
                }}
              >
                Add Link
              </button>
              {customLinks.length > 0 && (
                <div style={{ 
                  background: "#f0fdf4", 
                  borderRadius: 10, 
                  padding: "16px" 
                }}>
                  <div style={{ fontWeight: 600, marginBottom: 8, color: "#374151" }}>
                    Added Links:
                  </div>
                  {customLinks.map((l, i) => (
                    <div key={i} style={{ fontSize: 14, color: "#1a56db", padding: "4px 0" }}>
                      ✅ {l.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
