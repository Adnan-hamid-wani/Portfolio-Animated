interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 ${className}`}>
      {children}
    </div>
  );
}