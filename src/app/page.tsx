import HeroSection from "@/components/HeroSection";
import ExpeditionsSection from "@/components/ExpeditionsSection";
import TeamSection from "@/components/TeamSection";
import ArchiveSection from "@/components/ArchiveSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-deep-space selection:bg-earth-khaki selection:text-deep-space">
      <HeroSection />
      <ExpeditionsSection />
      <TeamSection />
      <ArchiveSection />

      <footer className="w-full bg-deep-space text-earth-khaki/50 py-16 border-t border-earth-khaki/10 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em]">
        <div className="container-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <p className="tracking-[0.3em]">© {new Date().getFullYear()} 星塵遠征隊。</p>
          <div className="flex space-x-6 sm:space-x-12">
            <a href="#" className="hover:text-earth-khaki transition-colors hover:scale-105 transform">关于我们</a>
            <a href="#" className="hover:text-earth-khaki transition-colors hover:scale-105 transform">航行日志</a>
            <a href="#" className="hover:text-earth-khaki transition-colors hover:scale-105 transform">联络频道</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
