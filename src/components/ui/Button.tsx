type Props = {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    className?: string; // <-- Importante: Aceptamos className
}

export default function Button({
    href,
    children,
    variant = "primary",
    className = "" // <-- Por defecto string vacío
}: Props) {

    // Definimos estilos de variantes (los primarios son cian, secundarios grises)
    const variantStyle = variant === "primary"
        ? "bg-cyan-500 hover:bg-cyan-600 text-white"
        : "bg-slate-700/50 hover:bg-slate-700 text-white border border-slate-600";

    return (
        <a
            href={href}
            // Combinamos las clases base con las que vienen de afuera
            className={`inline-block transition-all duration-300 text-center ${variantStyle} ${className}`}
        >
            {children}
        </a>
    );
}