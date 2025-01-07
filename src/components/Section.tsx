interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <div id={id} className={`min-h-screen flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}
