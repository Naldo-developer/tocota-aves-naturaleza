"use client";
import { useState } from "react";
import { navigation } from "@/content/home";
export function MobileMenu() { const [open, setOpen] = useState(false); return <div className="mobile-menu"><button type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? "Cerrar" : "Menú"}<span aria-hidden="true">{open ? "×" : "☰"}</span></button><nav id="mobile-navigation" hidden={!open} aria-label="Navegación móvil" onKeyDown={e => { if (e.key === "Escape") setOpen(false); }}>{navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}</nav></div>; }
