type Props = { name?: "bird" | "arrow" | "pin" | "leaf"; className?: string };
export function Icon({ name = "arrow", className }: Props) {
 const paths = { arrow: "M4 12h16m-6-6 6 6-6 6", pin: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z", leaf: "M20 3C8 2 2 7 5 15s15 4 15-12ZM5 20 16 8", bird: "M3 17c6 1 8-2 10-6l5 1 3-3-4-1c-1-4-5-4-7 0L3 4l3 8-3 5Zm9-9h.01" };
 return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>;
}
