import { useState } from "react";

interface TicketForm {
  name: string;
  dept: string;
  type: string;
  priority: string;
  desc: string;
}

interface FormField {
  label: string;
  key: keyof TicketForm;
  placeholder: string;
}

interface SelectField {
  label: string;
  key: keyof TicketForm;
  options: string[];
}

export default function SubmitTicketPage() {
  const [form, setForm] = useState<TicketForm>({ 
    name: "", 
    dept: "", 
    type: "", 
    priority: "", 
    desc: "" 
  });
  const [submitted, setSubmitted] = useState(false);

  const textFields: FormField[] = [
    { label: "Full Name", key: "name", placeholder: "Your name" }, 
    { label: "Department", key: "dept", placeholder: "Your department" }
  ];

  const selectFields: SelectField[] = [
    { label: "Issue Type", key: "type", options: ["Hardware", "Software", "Network", "Account Access", "HIS/EMR", "Other"] }, 
    { label: "Priority", key: "priority", options: ["Low", "Medium", "High", "Critical"] }
  ];

  if (submitted) return (
    <div style={{ 
      fontFamily: "'Segoe UI', sans-serif", 
      minHeight: "100vh", 
      background: "#f8fafc", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center" 
    }}>
      <div style={{ 
        background: "white", 
        borderRadius: 20, 
        padding: "60px 48px", 
        textAlign: "center", 
        boxShadow: "0 4px 24px rgba(0,0,0,0.1)", 
        maxWidth: 480 
      }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>✅</div>
        <h2 style={{ 
          fontSize: 26, 
          fontWeight: 800, 
          color: "#1a1a2e", 
          margin: "0 0 12px" 
        }}>
          Ticket Submitted!
        </h2>
        <p style={{ 
          color: "#6b7280", 
          fontSize: 15, 
          marginBottom: 32 
        }}>
          Your IT support ticket has been received. Our team will respond within 4 business hours.
        </p>
        <button 
          onClick={() => setSubmitted(false)} 
          style={{ 
            background: "#1a56db", 
            color: "white", 
            border: "none", 
            padding: "14px 32px", 
            borderRadius: 10, 
            fontWeight: 700, 
            cursor: "pointer", 
            fontSize: 16 
          }}
        >
          Submit Another
        </button>
      </div>
    </div>
  );

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
          IT HELPDESK
        </div>
        <h2 style={{ 
          fontSize: 38, 
          fontWeight: 900, 
          color: "#1a1a2e", 
          margin: 0 
        }}>
          Submit a Support Ticket
        </h2>
      </div>
      <div style={{ 
        maxWidth: 640, 
        margin: "0 auto", 
        background: "white", 
        borderRadius: 20, 
        padding: "48px", 
        boxShadow: "0 2px 16px rgba(0,0,0,0.08)" 
      }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1fr", 
          gap: 20, 
          marginBottom: 20 
        }}>
        {textFields.map(({ label, key, placeholder }) => (
            <div key={key}>
              <label style={{ 
                display: "block", 
                fontWeight: 600, 
                fontSize: 14, 
                color: "#374151", 
                marginBottom: 6 
              }}>
                {label}
              </label>
              <input 
                value={form[key]} 
                onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))} 
                placeholder={placeholder}
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
        </div>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1fr", 
          gap: 20, 
          marginBottom: 20 
        }}>
        {selectFields.map(({ label, key, options }) => (
            <div key={key}>
              <label style={{ 
                display: "block", 
                fontWeight: 600, 
                fontSize: 14, 
                color: "#374151", 
                marginBottom: 6 
              }}>
                {label}
              </label>
              <select 
                value={form[key]} 
                onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
                style={{ 
                  width: "100%", 
                  padding: "12px 16px", 
                  border: "1.5px solid #e5e7eb", 
                  borderRadius: 10, 
                  fontSize: 15, 
                  outline: "none", 
                  background: "white", 
                  boxSizing: "border-box" 
                }}
              >
                <option value="">Select...</option>
                {options.map((option: string) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <div style={{ marginBottom: 28 }}>
          <label style={{ 
            display: "block", 
            fontWeight: 600, 
            fontSize: 14, 
            color: "#374151", 
            marginBottom: 6 
          }}>
            Description
          </label>
          <textarea 
            value={form.desc} 
            onChange={e => setForm(p => ({ ...p, desc: e.target.value }))} 
            placeholder="Describe your issue in detail..."
            rows={5} 
            style={{ 
              width: "100%", 
              padding: "12px 16px", 
              border: "1.5px solid #e5e7eb", 
              borderRadius: 10, 
              fontSize: 15, 
              outline: "none", 
              resize: "vertical", 
              boxSizing: "border-box" 
            }} 
          />
        </div>
        <button 
          onClick={() => setSubmitted(true)} 
          style={{ 
            width: "100%", 
            background: "#1a56db", 
            color: "white", 
            border: "none", 
            padding: "16px", 
            borderRadius: 12, 
            fontWeight: 700, 
            fontSize: 17, 
            cursor: "pointer" 
          }}
        >
          🎫 Submit Ticket
        </button>
      </div>
    </div>
  );
}
