interface TechSectionProps {
  title: string
  icons: React.ReactNode[]
}

export const SectionTechSection = ({ title, icons }: TechSectionProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mb-8">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 max-w-screen-lg">
        {icons.map((icon, idx) => (
          <span
            key={idx}
            className="
              bg-indigo-500
              rounded-lg
              shadow-lg
              border
              border-indigo-700
              p-2
              transition-transform
              duration-300
              scale-105
              hover:scale-110
              hover:shadow-xl
            "
          >
            {icon}
          </span>
        ))}
      </p>
    </div>
  )
}
