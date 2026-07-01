interface SectionLabelProps {
  text: string;
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <span className="inline-block border border-gray-300 rounded-full px-3 py-1 text-[10px] font-semibold tracking-widest text-gray-500 uppercase mb-4">
      {text}
    </span>
  );
}
