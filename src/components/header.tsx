import { navigation } from "@/content/home";
import { Icon } from "./icon";
import { MobileMenu } from "./mobile-menu";
export function Header() { return <header className="site-header"><a href="#inicio" className="brand" aria-label="Tocotá Aves y Naturaleza, inicio"><Icon name="bird"/><span>TOCOTÁ<small>AVES Y NATURALEZA</small></span></a><nav className="desktop-nav" aria-label="Navegación principal">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><a className="header-link" href="#recorrido">Explora Tocotá <Icon /></a><MobileMenu /></header>; }
