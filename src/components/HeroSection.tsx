import { ArrowUpRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-12 pb-8 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] py-2 text-sm px-2">
        <span className="rounded-full bg-orange-500/20 px-2 py-0.5 text-xs font-medium text-orange-400">НОВИНКА</span>
        <span className="text-gray-300">FoxToken — наш собственный токен!</span>
        <ArrowUpRight className="h-4 w-4 text-gray-400" />
      </div>

      <h1 className="mb-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
        Банк, который{" "}
        <span className="text-orange-400">виляет хвостом</span>{" "}
        от радости
      </h1>

      <p className="mb-8 max-w-xl text-gray-400">
        Открывай счёт, переводи до 100 ₽, копи на депозите и бери кредит — всё с улыбкой корги.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button className="rounded-full bg-orange-500 px-6 hover:bg-orange-600 text-white font-semibold">
          Открыть счёт <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" className="rounded-full border-gray-700 bg-transparent text-white hover:bg-gray-800">
          <Icon name="Coins" className="mr-2 h-4 w-4 text-orange-400" /> Получить FoxToken
        </Button>
      </div>

      <div className="mt-12 flex items-center gap-6 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <Icon name="ShieldCheck" className="h-4 w-4 text-orange-400" />
          <span>Безопасно</span>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="Zap" className="h-4 w-4 text-orange-400" />
          <span>Мгновенно</span>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="Heart" className="h-4 w-4 text-orange-400" />
          <span>С любовью</span>
        </div>
      </div>
    </section>
  )
}
