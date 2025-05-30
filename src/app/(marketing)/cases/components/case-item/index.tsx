import Image from 'next/image'
import Link from 'next/link'

import { ArrowUpRight } from 'lucide-react'

interface CaseItemProps {
  imageUrl: string
  title: string
  description: string
  url: string
}

export const CaseItem = ({
  imageUrl,
  title,
  description,
  url
}: CaseItemProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="bg-indigo-900 shadow-lg rounded-lg p-4">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={500}
          className="rounded-lg mb-4 w-full"
        />
        <div className="flex items-center justify-between gap-2">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
          <div className="flex items-center w-10 h-10">
            <Link
              href={url}
              className="
                bg-white
                text-indigo-600
                p-2
                rounded-lg
                shadow-lg
                transition-transform
                duration-300
                scale-105
                hover:scale-110
                hover:shadow-xl
                hover:bg-indigo-500
                hover:text-white
              "
            >
              <ArrowUpRight className="size-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
