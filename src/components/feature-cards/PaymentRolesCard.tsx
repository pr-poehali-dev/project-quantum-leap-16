import { ArrowUpRight, ChevronDown, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PaymentRolesCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <span className="text-2xl">🐾</span>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Депозиты и FoxToken</h3>
      <p className="mb-4 text-sm text-gray-400">Храни средства с выгодой — и получай бонусные FoxToken за каждый депозит</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-orange-400 hover:text-orange-300 transition-colors">
        Открыть депозит <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 mb-1">Баланс депозита</p>
            <p className="text-2xl font-bold text-white">87,50 ₽</p>
          </div>
          <div className="flex items-center gap-1 text-green-400 text-sm">
            <TrendingUp className="h-4 w-4" />
            <span>+12%</span>
          </div>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
            Тип депозита
          </label>
          <div className="flex items-center justify-between rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
            <span className="text-sm text-white">Лисья копилка 🦊</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
          <p className="mt-1 text-xs text-gray-500">Ставка 12% + бонус FoxToken.</p>
        </div>

        <div className="rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-2.5 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">FoxToken бонус</p>
            <p className="text-sm font-semibold text-orange-400">+5 FXT за депозит</p>
          </div>
          <span className="text-2xl">🦴</span>
        </div>

        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold">Пополнить депозит</Button>
      </div>
    </div>
  )
}
