interface ExperienceItemProps {
  company: string
  role: string
  type: string
  description: string
  duration?: string | null
}

export const SectionExperienceItem = ({
  company,
  role,
  type,
  description,
  duration
}: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 before:content-[''] before:absolute before:left-2 before:top-2 before:w-1 before:bg-indigo-500 before:rounded-full">
      <div className="flex items-center gap-6">
        <div className="absolute left-[2px] top-2 w-4 h-4 bg-indigo-500 border-4 border-white rounded-full shadow-md" />
        <h3 className="text-2xl font-bold">{company}</h3>
      </div>
      <h4 className="mt-1 text-xs font-semibold animate-fade-in">
        {role} {duration && `(${duration})`}
      </h4>
      <b className="text-md font-bold text-indigo-400 animate-fade-in">
        {type}
      </b>
      <p className="mt-2 animate-fade-in">{description}</p>
    </div>
  )
}
