interface TechBadgeProps {
  name: string;
  icon?: React.ReactNode;
}

export function TechBadge({ name, icon }: TechBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium text-sm">
      {icon}
      <span>{name}</span>
    </div>
  );
}
