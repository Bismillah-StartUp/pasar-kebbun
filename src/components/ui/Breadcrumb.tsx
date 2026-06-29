interface BreadcrumbProps {
  items: string[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="px-6 py-4 bg-white border-b border-slate-100 flex items-center justify-between select-none">
      <div className="flex items-center gap-2 text-xs font-semibold tracking-wide">
        {items.map((item, index) => (
          <span key={item} className="contents">
            <span className={index === items.length - 1 ? 'text-slate-800' : 'text-slate-400'}>{item}</span>
            {index < items.length - 1 && <span className="text-slate-300 font-normal">&gt;</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
