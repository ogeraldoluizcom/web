import { cn } from '@/lib/utils'

interface TitleProps {
  title?: string | null
  subtitle?: string | null
  description?: string | null
  align?: 'left' | 'center' | 'right'
}

export const Title = ({ title, subtitle, description, align }: TitleProps) => {
  return (
    <div
      className={cn(
        `
        flex
        flex-col
        items-center
        justify-center
        text-center
        gap-4
        mb-8
      `,
        align === 'left' && 'items-start text-left',
        align === 'right' && 'items-end text-right'
      )}
    >
      {title && <h2 className="text-3xl font-bold text-indigo-500">{title}</h2>}
      {subtitle && <h3 className="text-4xl font-bold">{subtitle}</h3>}
      {description && <p>{description}</p>}
    </div>
  )
}
