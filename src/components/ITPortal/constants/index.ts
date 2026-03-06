export const NAV_ITEMS = ["Home", "Services", "Our Team", "Documentary", "Resources", "Presentation", "Announcements", "Contact Us"];

export const SERVICES = [
  { icon: "🖥️", title: "Help Desk & Technical Support", desc: "First-line IT support for all hospital staff. Hardware troubleshooting, software assistance, and account management.", link: "Submit a ticket →", color: "#e8f0fe" },
  { icon: "🏥", title: "Hospital Information System", desc: "Administration and support for the HIS/EMR platform, ensuring clinical workflows run smoothly for all departments.", link: "Learn more →", color: "#e6f4ea" },
  { icon: "📡", title: "Network & Connectivity", desc: "Wired and wireless network management across all hospital buildings, ensuring fast and reliable connections.", link: "Network status →", color: "#fce8e6" },
  { icon: "🛡️", title: "Cybersecurity & Compliance", desc: "Data protection, firewall management, threat monitoring, and compliance with healthcare data security regulations.", link: "Security policy →", color: "#fff8e1" },
  { icon: "☁️", title: "Server & Cloud Infrastructure", desc: "On-premise server administration and cloud service management to ensure high availability of critical systems.", link: "View status →", color: "#f3e8fd" },
  { icon: "📊", title: "Data Management & Reporting", desc: "Database administration, backup systems, and business intelligence tools for hospital analytics.", link: "View reports →", color: "#e8f5e9" },
  { icon: "📱", title: "Device & Asset Management", desc: "Inventory tracking, provisioning, and lifecycle management for all hospital computers, tablets, and medical devices.", link: "Asset portal →", color: "#fce4ec" },
  { icon: "🎓", title: "IT Training & Onboarding", desc: "System orientation for new staff and periodic training for software updates, security best practices, and digital tools.", link: "Schedule training →", color: "#e3f2fd" },
];

export const SCOPE = [
  { icon: "🔒", title: "SECURITY", desc: "Taking care of every aspect of security to protect systems from cyber threats, malware and hacking attempts." },
  { icon: "☁️", title: "CLOUD SERVICES", desc: "Manage different cloud services and subscriptions critical to VisayasMed operations." },
  { icon: "🌐", title: "INTERNET BACKBONE", desc: "Ensures that VisayasMed is operating 24×7." },
  { icon: "🖧", title: "SERVER", desc: "Install, configure and maintain VisayasMed servers." },
  { icon: "🛠️", title: "TECHNICAL SUPPORT", desc: "End-to-end technical support for all departments and users." },
  { icon: "🔑", title: "ACCESS MANAGEMENT", desc: "User provisioning, role management, and access control." },
  { icon: "💾", title: "DATA & STORAGE", desc: "Data management, storage solutions, and backup systems." },
  { icon: "📞", title: "TELECOMS", desc: "Hospital communication systems and telephony infrastructure." },
];

export const GENERAL_REQUIREMENTS = [
  { num: "01", text: "Always lock your workstation whenever you leave the device unattended." },
  { num: "02", text: "Avoid leaving your laptop anywhere. Keep it in a locked drawer or cabinet before going home." },
  { num: "03", text: "Do not download or possess any unapproved, unauthorized, or unlicensed application or software." },
  { num: "04", text: "Do not write down passwords and/or stick them on tables or monitors." },
  { num: "05", text: "Do not leave printed or handwritten documents with sensitive information exposed; keep them locked away." },
  { num: "06", text: "Avoid downloading copyrighted content, such as music, images, and videos/movies." },
  { num: "07", text: "Do not use company internet for non-business purposes and accessing of prohibited sites." },
  { num: "08", text: "Avoid storing VisayasMed Information in portable media unless authorized and using approved encrypted media." },
  { num: "09", text: "Maintain regular back-up and saving of critical company files in an authorized location (SharePoint, OneDrive)." },
];

export const DOCS_GALLERY = [
  { title: "IT Team Building Activity", desc: "Team collaboration and bonding session with the IT department members.", date: "Feb 2024", tag: "IMAGE", color: "#e3f2fd" },
  { title: "Network Infrastructure Setup", desc: "Installation and configuration of network equipment for hospital connectivity.", date: "Feb 2024", tag: "IMAGE", color: "#e8f5e9" },
  { title: "Server Room Maintenance", desc: "Regular maintenance and optimization of server infrastructure.", date: "Feb 2024", tag: "IMAGE", color: "#fce4ec" },
  { title: "IT Training Session", desc: "Hands-on training for hospital staff on new systems.", date: "Mar 2024", tag: "IMAGE", color: "#fff8e1" },
  { title: "Hardware Installation", desc: "Installation of new workstations across hospital floors.", date: "Mar 2024", tag: "IMAGE", color: "#f3e8fd" },
  { title: "IT Team Meeting", desc: "Monthly team sync and project planning sessions.", date: "Mar 2024", tag: "DOC", color: "#e0f7fa" },
];

export const QUICK_LINKS = [
  { label: "🔗 SharePoint", url: "https://sharepoint.com", desc: "Company intranet & docs" },
  { label: "🔗 OneDrive", url: "https://onedrive.com", desc: "Cloud file storage" },
  { label: "🔗 HIS Portal", url: "#", desc: "Hospital Information System" },
  { label: "🔗 IT Ticket System", url: "#", desc: "Submit support requests" },
  { label: "🔗 Microsoft 365", url: "https://office.com", desc: "Email, Teams, Office apps" },
  { label: "🔗 Network Monitor", url: "#", desc: "Real-time network status" },
];

export const ANNOUNCEMENTS = [
  { title: "Scheduled Network Maintenance", date: "March 10, 2026", type: "MAINTENANCE", color: "#fef9c3", icon: "🔧", body: "Network maintenance will be conducted on March 10 from 10PM–2AM. Expect brief connectivity interruptions in Building C." },
  { title: "New HIS Module Rollout", date: "March 5, 2026", type: "UPDATE", color: "#dcfce7", icon: "🚀", body: "The new Laboratory Information module is now live in HIS. All lab staff are required to attend training." },
  { title: "Password Policy Reminder", date: "February 28, 2026", type: "POLICY", color: "#fce7f3", icon: "🔒", body: "Reminder: All hospital staff must update their passwords every 90 days. Ensure your new password meets the complexity requirements." },
  { title: "IT Helpdesk Hours Update", date: "February 20, 2026", type: "INFO", color: "#dbeafe", icon: "ℹ️", body: "IT Helpdesk is now available Monday–Saturday 7AM–8PM. Emergency support remains available 24/7." },
];

export const TEAM_MEMBERS = [
  { 
    name: "Romel Banquil", 
    role: "Manager", 
    icon: "👔", 
    color: "#dbeafe",
    image: "/images/Romel Banquil.png"
  },
  { 
    name: "Loudisah \"Liling\" Laspiñas", 
    role: "System Analyst", 
    icon: "🔍", 
    color: "#dcfce7",
    image: "/images/liling.jpg"
  },
  { 
    name: "John Agustin Baylon", 
    role: "Network Engineer Sr. Staff<br/>LAN / WAN & Connectivity", 
    icon: "🌐", 
    color: "#fce7f3",
    image: "/images/John.jpg"
  },
  { 
    name: "Jeswel B. Villamor", 
    role: "Network Engineer Jr. Staff<br/>LAN / WAN & Connectivity", 
    icon: "🖧", 
    color: "#fff8e1",
    image: "/images/jeswel.jpg"
  },
  { 
    name: "Security Analyst", 
    role: "Cybersecurity & Compliance", 
    icon: "🔒", 
    color: "#ede9fe",
    image: null
  },
  { 
    name: "Database Administrator", 
    role: "Data & Storage Management", 
    icon: "💾", 
    color: "#ffedd5",
    image: null
  },
];

export const OJT_STUDENTS = [
  { 
    name: "John Roli Yakit", 
    role: "IT OJT<br/>Help Desk & Hardware", 
    icon: "🎓", 
    color: "#e0f2fe",
    image: "/images/ojt.jpg"
  },
  { 
    name: "Angelu Banogbanogn", 
    role: "IT OJT<br/>Help Desk & Hardware", 
    icon: "🎓", 
    color: "#e0f2fe",
    image: "/images/ojt.jpg"
  },
  { 
    name: "Aljon Montecalvo", 
    role: "IT OJT<br/>Help Desk & Hardware", 
    icon: "🎓", 
    color: "#e0f2fe",
    image: "/images/ojt.jpg"
  },
  { 
    name: "Kerry Ecuasion", 
    role: "IT OJT<br/>Help Desk & Hardware", 
    icon: "🎓", 
    color: "#e0f2fe",
    image: "/images/ojt.jpg"
  },
];

export const CONTACT_INFO = [
  { icon: "📞", label: "Phone", value: "Local 200 / 201", desc: "IT Helpdesk Direct Line" },
  { icon: "📧", label: "Email", value: "it@visayasmed.com", desc: "For non-urgent requests" },
  { icon: "📍", label: "Location", value: "IT Department, 2nd Floor", desc: "Main Hospital Building" },
  { icon: "🕐", label: "Hours", value: "Mon–Sat, 7AM–8PM", desc: "Emergency: 24/7" },
];

export const SAMPLE_FILES = [
  { name: "VisayasMed IT Onboarding Guide.docx", type: "DOCX", size: "245 KB", date: "Jan 2024" },
  { name: "Network Setup Manual.pptx", type: "PPTX", size: "1.2 MB", date: "Feb 2024" },
  { name: "IT Asset Inventory.xlsx", type: "XLSX", size: "87 KB", date: "Mar 2024" },
  { name: "Security Policy Document.pdf", type: "PDF", size: "312 KB", date: "Jan 2024" },
  { name: "New Employee Presentation.pptx", type: "PPTX", size: "3.4 MB", date: "Mar 2024" },
  { name: "HIS Training Manual.docx", type: "DOCX", size: "560 KB", date: "Feb 2024" },
];
