export default function ResumeSection({ title, children }) {
  return (
    <div className="flex flex-col gap-4 bg-violet-800 p-4 rounded-lg">
      {title && <h4 className="text-2xl font-semibold">{title}</h4>}
      {children}
    </div>
  );
}
