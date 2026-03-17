interface TechBadgeProps {
  name: string;
  icon?: React.ReactNode;
}

export function TechBadge({ name, icon }: TechBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-[0_14px_28px_rgba(15,23,42,0.04)]">
      {icon}
      <span>{name}</span>
    </div>
  );
}
