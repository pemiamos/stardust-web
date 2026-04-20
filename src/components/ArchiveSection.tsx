export default function ArchiveSection() {
    const specimens = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      catalogNo: `ST-${4092 + i}`,
      name: ["青金石残片", "陨石球粒", "蕨类植物化石", "深海玄武岩", "结晶琥珀", "黑曜石碎片"][i],
      origin: ["7G 扇区", "奥尔特云", "泥盆纪地层", "马里亚纳海沟", "波罗的海", "火山灰积层"][i],
      type: ["矿物", "地外标本", "植物学", "地质学", "树脂", "火山岩"][i],
    }));
  
    return (
      <section className="w-full bg-earth-light text-deep-space py-24 md:py-32">
        <div className="container-12">
          <div className="grid grid-cols-12 gap-8 md:gap-12 relative">
            
            <div className="col-span-12 md:col-span-4 lg:col-span-3">
              <div className="md:sticky md:top-24">
                <div className="flex items-center text-deep-space/60 font-mono text-xs tracking-widest mb-4">
                  <span className="w-8 h-px bg-deep-space/40 mr-4"></span>
                  零叁
                </div>
                <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl mb-6">数字档案馆</h2>
                <div className="w-16 h-px bg-deep-space/30 mb-8"></div>
                <p className="text-deep-space/80 font-light mb-10 text-sm leading-relaxed tracking-wide">
                  极其严谨的数字化标本收藏。每件文物都经过精准对齐与编目，秉承学术级别的前沿保存标准，折射出浪漫与真理的微妙交汇。
                </p>
                
                <ul className="space-y-4 font-mono text-xs tracking-widest border-l border-deep-space/20 pl-5 text-deep-space/50">
                  <li className="text-deep-space font-semibold cursor-pointer hover:text-deep-space transition-colors relative">
                    <span className="absolute -left-[21px] top-1/2 -translate-y-1/2 w-[3px] h-4 bg-deep-space"></span>
                    所有分类
                  </li>
                  <li className="cursor-pointer hover:text-deep-space transition-colors">植物标本</li>
                  <li className="cursor-pointer hover:text-deep-space transition-colors">地质岩盘</li>
                  <li className="cursor-pointer hover:text-deep-space transition-colors">地外物质</li>
                </ul>
              </div>
            </div>
  
            <div className="col-span-12 md:col-span-8 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
              {specimens.map((item) => (
                <div key={item.id} className="group border border-deep-space/10 bg-[#f3ead7] hover:shadow-2xl hover:bg-[#f6ebd5] transition-all duration-500 cursor-pointer flex flex-col">
                  {/* Image Placeholder Frame */}
                  <div className="w-full aspect-[4/5] bg-[#ece0cc] relative flex items-center justify-center p-6 sm:p-8 overflow-hidden group-hover:bg-[#eae0cc] transition-colors">
                     <div className="w-full h-full border-[0.5px] border-dashed border-deep-space/20 relative flex items-center justify-center">
                        <span className="absolute top-2 left-2 text-[8px] font-mono text-deep-space/30">比例 1:1</span>
                        <div className="text-deep-space/10 font-sans italic text-6xl group-hover:scale-125 transition-transform duration-700 ease-in-out">
                            ⚗️
                        </div>
                     </div>
                  </div>
                  <div className="p-5 border-t border-deep-space/10 flex-1 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-center mb-3 font-mono text-[9px] sm:text-[10px] text-deep-space/60 tracking-widest">
                            <span>{item.type}</span>
                            <span className="text-right">{item.origin}</span>
                        </div>
                        <h4 className="font-sans text-lg font-medium text-deep-space leading-snug">{item.name}</h4>
                    </div>
                    <div className="mt-6 pt-4 border-t border-deep-space/10 flex justify-between items-center text-[10px] tracking-widest">
                      <span className="text-deep-space/50 font-mono">{item.catalogNo}</span>
                      <span className="opacity-0 translate-x-[-10px] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 font-bold tracking-[0.2em]">检 视</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section>
    );
  }
