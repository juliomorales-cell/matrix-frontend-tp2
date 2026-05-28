import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Terminal,
  Users,
  Database,
  Globe,
  Image as ImageIcon,
  BookOpen,
  Network,
  Menu,
  X,
} from "lucide-react";

function NavItem({ to, icon, text, collapsed, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className="list-none">
      <Link
        to={to}
        onClick={onClick}
        title={collapsed ? text : undefined}
        className={`
          flex items-center gap-3 p-2 rounded no-underline
          font-bold transition-all duration-200 group
          ${
            isActive
              ? "text-white bg-green-900/40 border border-green-700/50"
              : "text-[#00FF41] hover:text-white hover:bg-green-900/30 border border-transparent"
          }
          ${collapsed ? "justify-center" : ""}
        `}
        style={{
          textShadow: isActive ? "0 0 8px rgba(0,255,65,0.8)" : undefined,
        }}
      >
        <span
          className="shrink-0 text-[#00FF41] group-hover:drop-shadow-[0_0_6px_rgba(0,255,65,0.9)] transition-all"
          style={{
            filter: isActive ? "drop-shadow(0 0 6px #00FF41)" : undefined,
          }}
        >
          {icon}
        </span>
        {!collapsed && (
          <span className="text-sm tracking-wide whitespace-nowrap overflow-hidden">
            {text}
          </span>
        )}
      </Link>
    </li>
  );
}

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Cerrar drawer si se agranda la pantalla
  useEffect(() => {
    if (!isMobile) setMobileOpen(false);
  }, [isMobile]);

  const navItems = [
    { to: "/", icon: <Terminal size={20} />, text: ">_Inicio" },
    { to: "/integrantes", icon: <Users size={20} />, text: "Tripulación" },
    { to: "/datos", icon: <Database size={20} />, text: "Archivos JSON" },
    { to: "/api", icon: <Globe size={20} />, text: "Red Externa" },
    { to: "/galeria", icon: <ImageIcon size={20} />, text: "Galería" },
    { to: "/bitacora", icon: <BookOpen size={20} />, text: "Bitácora" },
    { to: "/arbol", icon: <Network size={20} />, text: "Árbol Render" },
  ];

  /* ── Contenido interior del sidebar ── */
  const SidebarContent = ({ collapsed = false, onNavClick }) => (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div
        className={`border-b-2 border-green-900 flex flex-col items-center gap-2
          ${collapsed ? "p-3" : "p-5"}`}
      >
        <div
          className={`bg-black border-2 border-green-500 rounded-full flex items-center justify-center
            shadow-[0_0_15px_rgba(0,255,65,0.5)]
            ${collapsed ? "w-10 h-10" : "w-14 h-14"}`}
        >
          <Terminal
            size={collapsed ? 18 : 28}
            className="text-green-500 animate-pulse"
          />
        </div>
        {!collapsed && (
          <h1 className="text-xl font-black text-green-500 text-center tracking-tighter leading-tight drop-shadow-[0_0_10px_rgba(0,255,65,0.8)]">
            THE SYSTEM
            <br />
            GROUP 1
          </h1>
        )}
      </div>

      {/* Nav links */}
      <ul
        className={`flex-1 overflow-y-auto space-y-1
          ${collapsed ? "p-2" : "p-4"}`}
      >
        {navItems.map((item) => (
          <NavItem
            key={item.to}
            {...item}
            collapsed={collapsed}
            onClick={onNavClick}
          />
        ))}
      </ul>

      {/* Footer */}
      {!collapsed && (
        <div className="p-3 border-t-2 border-green-900 text-xs text-center text-green-800 shrink-0">
          V 2.0.26 — THE SYSTEM GROUP 1
        </div>
      )}
    </div>
  );

  /* ── MOBILE ── */
  if (isMobile) {
    return (
      <>
        {/* Sidebar colapsado: solo íconos */}
        <nav className="w-16 border-r-2 border-green-900 bg-black/90 flex flex-col z-10 shrink-0 shadow-[4px_0_20px_rgba(0,255,65,0.1)]">
          {/* Botón hamburguesa arriba */}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex items-center justify-center p-3 border-b-2 border-green-900 text-green-500 hover:text-white hover:bg-green-900/30 transition-colors"
            aria-label="Abrir menú"
          >
            <Menu size={20} />
          </button>

          {/* Solo íconos */}
          <ul className="flex-1 p-2 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <NavItem key={item.to} {...item} collapsed={true} />
            ))}
          </ul>
        </nav>

        {/* Drawer fullscreen */}
        {mobileOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/70 z-20"
              onClick={() => setMobileOpen(false)}
            />
            {/* Panel */}
            <div
              className="fixed inset-y-0 left-0 w-64 border-r-2 border-green-900 z-30 shadow-[4px_0_30px_rgba(0,255,65,0.2)]"
              style={{ backgroundColor: "#000000" }}
            >
              {/* Botón cerrar */}
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-3 right-3 text-green-500 hover:text-white transition-colors"
                aria-label="Cerrar menú"
              >
                <X size={20} />
              </button>
              <SidebarContent
                collapsed={false}
                onNavClick={() => setMobileOpen(false)}
              />
            </div>
          </>
        )}
      </>
    );
  }

  /* ── DESKTOP ── */
  return (
    <nav className="w-64 border-r-2 border-green-900 bg-black/90 flex flex-col z-10 shrink-0 shadow-[4px_0_20px_rgba(0,255,65,0.1)]">
      <SidebarContent collapsed={false} />
    </nav>
  );
}
