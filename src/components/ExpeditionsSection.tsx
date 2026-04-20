export default function ExpeditionsSection() {
    const projects = [
      { id: 1, title: "极光观测项目", date: "2024.11", category: "大气层", span: "col-span-12 md:col-span-8", height: "h-96 md:h-[32rem]" },
      { id: 2, title: "深海热泉生态", date: "2024.08", category: "海洋学", span: "col-span-12 md:col-span-4", height: "h-96 md:h-[32rem]" },
      { id: 3, title: "撒哈拉古湖泊纪", date: "2023.12", category: "地质学", span: "col-span-12 md:col-span-4", height: "h-96 md:h-[28rem]" },
      { id: 4, title: "陨石轨迹追踪", date: "2023.09", category: "天文学", span: "col-span-12 md:col-span-4", height: "h-96 md:h-[28rem]" },
      { id: 5, title: "雨林树冠系统", date: "2023.05", category: "生物学", span: "col-span-12 md:col-span-4", height: "h-96 md:h-[28rem]" },
    ];
  
    return (
      <section className="w-full bg-deep-space py-24 md:py-32 border-t border-earth-khaki/10">
        <div className="container-12">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center text-earth-khaki/60 font-mono text-xs tracking-widest mb-4">
                  <span className="w-8 h-px bg-earth-khaki/50 mr-4"></span>
                  零壹
              </div>
              <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl text-stars mb-6 leading-tight">过往考察</h2>
              <p className="text-earth-khaki/80 font-light tracking-wide leading-relaxed">
                记录我们与自然界崇高机制的相遇，涵盖从最深的洋底到大气层边缘的广度。这是一份受好奇探索与科学严谨双重驱动的考察档案。
              </p>
            </div>
            <button className="mt-10 md:mt-0 px-8 py-3 border border-earth-khaki/40 text-earth-khaki hover:bg-earth-khaki hover:text-deep-space transition-all duration-300 tracking-[0.2em] text-xs font-mono">
              查阅所有日志
            </button>
          </div>
  
          {/* 12 Column Grid System is naturally implemented via grid grid-cols-12 */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {projects.map((project) => (
              <div key={project.id} className={`${project.span} ${project.height} group relative overflow-hidden bg-earth-light/5 border border-earth-khaki/10 hover:border-earth-khaki/40 transition-colors duration-500 cursor-pointer`}>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-deep-space/60 to-transparent z-10 opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                {/* Abstract Background Decoration (placeholder for project images) */}
                <div className="absolute inset-0 bg-earth-khaki/10 grayscale mix-blend-overlay group-hover:scale-110 transition-transform duration-1000 origin-center flex items-center justify-center overflow-hidden">
                    <div className="w-[150%] h-[150%] opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-earth-khaki)_1px,_transparent_1.5px)] [background-size:20px_20px] transform -rotate-12 group-hover:rotate-0 transition-transform duration-[2s]"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
                  <div className="flex items-center space-x-3 mb-4 text-[10px] md:text-xs font-mono tracking-widest text-earth-khaki/70">
                    <span>{project.date}</span>
                    <span className="w-1 h-1 rounded-full bg-earth-khaki/40"></span>
                    <span className="tracking-[0.2em] text-stars/80">{project.category}</span>
                  </div>
                  <h3 className="font-sans text-2xl md:text-3xl lg:text-4xl text-stars font-light tracking-wide group-hover:text-yellow-50 transition-colors">{project.title}</h3>
                  
                  <div className="mt-6 flex items-center text-xs tracking-widest text-earth-khaki opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                     <span>探索条目</span>
                     <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
