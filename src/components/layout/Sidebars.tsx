import React, { useState } from "react";
import "../../styles/Sidebar.scss";
import CardProfile from "./cardprofile";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const [showCard, setShowCard] = useState(false);

  const handleClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // ถ้ากดซ้ำ ลบสี
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-light bg-light shadow-sm px-3">
        <div className="navbar-content d-flex align-items-center">
          <button
            className="navbar-toggler border-0 me-2"
            type="button"
            onClick={() => setOpen(!open)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <img src="/imges/baac-header-hover 1.png" alt="BAAC Logo" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            onClick={() => setShowCard(!showCard)}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img
              src="/icons/Container.svg"
              alt="check"
              style={{ width: 60, height: 70, marginRight: 8 }}
            />
          </div>

          {showCard && (
            <div
              style={{
                position: "absolute",
                top: "70px",
                right: 0,
                zIndex: 1000,
              }}
            >
              <CardProfile />
            </div>
          )}
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <ul className="list-unstyled m-0">
          {/* จัดการมาสเตอร์ */}
          <li className="sidebar-item">
            <div
              className={`sidebar-link ${activeIndex === 0 ? "active" : ""}`}
              onClick={() => {
                handleClick(0);
                setSubmenuOpen(!submenuOpen);
              }}
            >
              <img src="/icons/Vector12.svg" className="sidebar-icon" />
              จัดการมาสเตอร์
              <i
                className={`bi ms-auto ${
                  submenuOpen ? "bi-chevron-up" : "bi-chevron-down"
                }`}
              ></i>
            </div>
            {submenuOpen && (
              <ul className="submenu list-unstyled">
                <li className="sidebar-item">
                  <a href="/" className="sidebar-link">
                    รายการ 1
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="#" className="sidebar-link">
                    รายการ 2
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Item อื่น ๆ */}
          {[
            { icon: "/icons/Vector1.svg", label: "สัญญาหลักประกัน", href: "#" },
            {
              icon: "/icons/18.svg",
              label: "ตรวจสอบสัญญาหลักประกัน",
              href: "#",
            },
            { icon: "/icons/20.svg", label: "มอบหมายงาน", href: "#" },
            {
              icon: "/icons/Vector1.svg",
              label: "ค้นหาสัญญาหลักประกัน",
              href: "/SearchForm",
            },
            { icon: "/icons/1.svg", label: "รายงานแดชบอร์ด", href: "#" },
            { icon: "/icons/19.svg", label: "ประวัติการใช้งาน", href: "#" },
          ].map((item, index) => (
            <li className="sidebar-item" key={index + 1}>
              <a
                href={item.href} // ใช้ href สำหรับลิงก์
                className={`sidebar-link ${
                  activeIndex === index + 1 ? "active" : ""
                }`}
                onClick={() => handleClick(index + 1)}
              >
                <img src={item.icon} className="sidebar-icon" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
