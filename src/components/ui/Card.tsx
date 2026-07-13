type Props = {
    children: React.ReactNode;
};

export default function Card({
    children,
}: Props) {
    return (
        <div className="
            rounded-2xl
            border
            border-slate-800
            bg-slate-900
            p-8
            transition
            hover:border-cyan-500
        ">
            {children}
        </div>
    );
}