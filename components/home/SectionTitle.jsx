export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="text-center mb-14">

      <p className="text-blue-600 font-semibold uppercase tracking-widest">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-3">
        {title}
      </h2>

    </div>
  );
}