export default function TeamSection() {
  const members = [
    { id: 1, name: "Dr. Aris Thorne", role: "首席天体物理学家", tag: "ASTRO", desc: "专攻深空异常现象与引力波解析，领导了奥尔特云的多次远程探测任务。" },
    { id: 2, name: "Elias Vance", role: "地质勘探主管", tag: "GEO", desc: "擅长极端地貌条件下的岩脉开采，曾深入撒哈拉古湖泊纪断层进行为期两个月的独立科考。" },
    { id: 3, name: "Dr. Lyra Jin", role: "极地生物学家", tag: "BIO", desc: "对极限环境下的生命特征有独特的理解，在深海热泉生态系统中发现了三种未知的微生物链。" },
    { id: 4, name: "Kaelen Voss", role: "考察队工程师", tag: "ENG", desc: "主管所有深潜与大气层探测设备的维护，设计了能在极端气压下隐蔽作业的微型无人潜航器。" },
  ];

  return (
    <section className="w-full bg-deep-space py-24 md:py-32 border-t border-earth-khaki/10">
      <div className="container-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center text-earth-khaki/60 font-mono text-xs tracking-widest mb-4">
                <span className="w-8 h-px bg-earth-khaki/50 mr-4"></span>
                零贰
            </div>
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl text-stars mb-6 leading-tight">考察队员</h2>
            <p className="text-earth-khaki/80 font-light tracking-wide leading-relaxed">
              远征的背后是各领域顶尖学者的不懈钻研。我们的团队由具备极高专业素养与浪漫探索精神的科学家及工程师组成。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {members.map((member) => (
            <div key={member.id} className="col-span-12 sm:col-span-6 lg:col-span-3 group cursor-pointer">
              <div className="w-full aspect-[3/4] bg-earth-light/5 border border-earth-khaki/10 relative overflow-hidden mb-6 group-hover:border-earth-khaki/40 transition-colors duration-500">
                  <div className="absolute inset-0 bg-earth-khaki/5 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"></div>
                  {/* Portrait Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                     <span className="text-earth-khaki/10 font-serif font-light text-8xl md:text-9xl group-hover:text-earth-khaki/20 transition-colors duration-500">
                        {member.name.charAt(0)}
                     </span>
                  </div>
                  <div className="absolute top-4 right-4 text-[9px] font-mono tracking-widest text-earth-khaki/50 border border-earth-khaki/30 px-2 py-1 uppercase bg-deep-space/50 backdrop-blur-sm">
                     {member.tag}
                  </div>
              </div>
              <h3 className="font-sans text-xl md:text-2xl text-stars mb-1 tracking-wide group-hover:text-earth-khaki transition-colors">{member.name}</h3>
              <p className="font-mono text-[10px] md:text-xs text-earth-khaki/70 mb-4 tracking-[0.2em]">{member.role}</p>
              <div className="w-6 h-px bg-earth-khaki/30 mb-4 group-hover:w-12 transition-all duration-300"></div>
              <p className="text-earth-khaki/60 text-xs md:text-sm font-light leading-relaxed">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
