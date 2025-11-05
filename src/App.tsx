import React, { useState } from "react";
import AllRouter from "./controllers/AllRouter";
import Sidebar from "./components/layout/Sidebars";
import Footer from "./components/layout/Footer";

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className={`main-content ${sidebarOpen ? "sidebar-open" : ""}`}>
        <AllRouter />
        <Footer />
      </div>
      
    </div>
  );
};

export default App;
