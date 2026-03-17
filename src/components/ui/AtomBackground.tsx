export function AtomBackground() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1200px] lg:h-[1200px] pointer-events-none opacity-30 select-none flex items-center justify-center z-0">
      {/* Nucleus */}
      <div className="absolute w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-gray-500/20 rounded-full blur-[8px]" />
      <div className="absolute w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gray-600 rounded-full shadow-[0_0_20px_rgba(75,85,99,0.8)]" />

      {/* Orbit 1 */}
      <div className="absolute w-[20%] h-[20%] border-[1px] border-text-muted/30 rounded-full">
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s', animationTimingFunction: 'linear' }}>
          <div className="absolute top-0 left-1/2 w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 -ml-[4px] -mt-[4px] md:-ml-[5px] md:-mt-[5px] lg:-ml-[6px] lg:-mt-[6px] bg-accent-primary rounded-full shadow-[0_0_8px_var(--accent-primary)]" />
          <div className="absolute bottom-0 left-1/2 w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 -ml-[4px] -mb-[4px] md:-ml-[5px] md:-mb-[5px] lg:-ml-[6px] lg:-mb-[6px] bg-accent-primary rounded-full shadow-[0_0_8px_var(--accent-primary)]" />
        </div>
      </div>

      {/* Orbit 2 */}
      <div className="absolute w-[36%] h-[36%] border-[1px] border-text-muted/30 rounded-full">
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '14s', animationTimingFunction: 'linear', animationDirection: 'reverse' }}>
          {[0, 120, 240].map(deg => (
            <div key={deg} className="absolute inset-0" style={{ transform: `rotate(${deg}deg)` }}>
              <div className="absolute top-0 left-1/2 w-2.5 h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 -ml-[5px] -mt-[5px] md:-ml-[6px] md:-mt-[6px] lg:-ml-[8px] lg:-mt-[8px] bg-accent-primary rounded-full shadow-[0_0_10px_var(--accent-primary)]" />
            </div>
          ))}
        </div>
      </div>

      {/* Orbit 3 */}
      <div className="absolute w-[52%] h-[52%] border-[1px] border-text-muted/30 rounded-full">
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s', animationTimingFunction: 'linear' }}>
          {[0, 90, 180, 270].map(deg => (
            <div key={deg} className="absolute inset-0" style={{ transform: `rotate(${deg}deg)` }}>
              <div className="absolute top-0 left-1/2 w-2.5 h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 -ml-[5px] -mt-[5px] md:-ml-[6px] md:-mt-[6px] lg:-ml-[8px] lg:-mt-[8px] bg-accent-primary rounded-full shadow-[0_0_10px_var(--accent-primary)]" />
            </div>
          ))}
        </div>
      </div>

      {/* Orbit 4 */}
      <div className="absolute w-[68%] h-[68%] border-[1px] border-text-muted/30 rounded-full">
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '26s', animationTimingFunction: 'linear', animationDirection: 'reverse' }}>
          {[0, 72, 144, 216, 288].map(deg => (
            <div key={deg} className="absolute inset-0" style={{ transform: `rotate(${deg}deg)` }}>
              <div className="absolute top-0 left-1/2 w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 -ml-[6px] -mt-[6px] md:-ml-[7px] md:-mt-[7px] lg:-ml-[8px] lg:-mt-[8px] bg-accent-primary rounded-full shadow-[0_0_10px_var(--accent-primary)]" />
            </div>
          ))}
        </div>
      </div>

      {/* Orbit 5 */}
      <div className="absolute w-[84%] h-[84%] border-[1px] border-text-muted/30 rounded-full">
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '32s', animationTimingFunction: 'linear' }}>
          {[0, 60, 120, 180, 240, 300].map(deg => (
            <div key={deg} className="absolute inset-0" style={{ transform: `rotate(${deg}deg)` }}>
              <div className="absolute top-0 left-1/2 w-3 h-3 md:w-3.5 md:h-3.5 lg:w-5 lg:h-5 -ml-[6px] -mt-[6px] md:-ml-[7px] md:-mt-[7px] lg:-ml-[10px] lg:-mt-[10px] bg-accent-primary rounded-full shadow-[0_0_10px_var(--accent-primary)]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
