export const SectionAnimation = () => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative flex items-center justify-center"
        style={{ width: 300, height: 300 }}
      >
        <svg
          width="300"
          height="300"
          viewBox="0 0 180 180"
          className="absolute inset-0 animate-[spin_30s_linear_infinite] pointer-events-none"
        >
          <defs>
            <path
              id="circlePath"
              d="M 90, 90 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
            />
          </defs>
          <text
            fill="url(#gradientText)"
            fontSize="10"
            fontWeight="bold"
            letterSpacing="1.4"
          >
            <textPath href="#circlePath" startOffset="1%">
              • Fullstack • Frontend • Backend • Devops • Automação • Frontend •
              Frontend • Backend • Devops • Automação •
            </textPath>
          </text>
          <defs>
            <linearGradient
              id="gradientText"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="gray" />
            </linearGradient>
          </defs>
        </svg>

        <div className="z-10 text-center">
          <p className="text-sm font-bold text-white animate-pulse">
            Desenvolvendo soluções
          </p>
        </div>
      </div>
    </div>
  )
}
