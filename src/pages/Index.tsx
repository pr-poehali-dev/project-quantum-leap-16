import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PartnersSection } from "@/components/PartnersSection"
import { FeaturesSection } from "@/components/FeaturesSection"

export default function Index() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />

      <footer className="py-10 flex flex-col items-center gap-4 text-center">
        <div className="relative inline-block">
          <img
            src="https://cdn.poehali.dev/projects/2be188ec-3d5a-4738-9f51-8c824e92ee81/files/9d4f1cc3-528e-4742-a8bd-b2d858c604de.jpg"
            alt="Foxy the Corgi"
            className="h-24 w-24 rounded-full object-cover border-4 border-orange-500/40 shadow-lg shadow-orange-500/10"
          />
          <span className="absolute -bottom-1 -right-1 text-xl">🐾</span>
        </div>
        <p className="text-sm text-gray-500">
          Банк, где каждый — свой. От счёта до кредита —{" "}
          <span className="font-medium text-orange-400">Foxy.bank всегда рядом.</span>
        </p>
        <p className="text-xs text-gray-700">© 2026 Foxy.bank · FoxToken™ · Лицензия ЦБ РФ №00001-WOOF</p>
      </footer>
    </main>
  )
}
