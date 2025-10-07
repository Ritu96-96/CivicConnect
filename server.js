const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Sample reports data
const reports = [
  {
    id: 1,
    photo: "/uploads/photo1.jpg",
    description: "Pothole on main road",
    category: "Road",
    location: "Pune",
    status: "Pending",
    reportedAt: new Date().toLocaleString()
  },
  {
    id: 2,
    photo: "/uploads/photo2.jpg",
    description: "Streetlight not working",
    category: "Electricity",
    location: "Mumbai",
    status: "Verified",
    reportedAt: new Date().toLocaleString()
  }
];

// Serve static files from public/
app.use(express.static(path.join(__dirname, "public")));

// Default route "/" → admin dashboard
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin.html"));
});

// API endpoint for reports
app.get("/api/reports", (req, res) => {
  res.json(reports);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
