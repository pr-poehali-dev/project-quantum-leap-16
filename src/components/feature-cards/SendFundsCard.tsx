import { ChevronDown, Info, ArrowUpRight } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export function SendFundsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <span className="text-2xl">💸</span>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Переводы и кредит</h3>
      <p className="mb-4 text-sm text-gray-400">Переводи другим клиентам Foxy.bank или оформи кредит до 100 ₽ за минуту</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-orange-400 hover:text-orange-300 transition-colors">
        Перевести <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <div className="flex items-center justify-between rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
          <div className="flex items-center gap-3">
            <span className="text-lg">🐕</span>
            <div>
              <p className="text-sm font-medium text-white">Счёт Foxy.bank</p>
              <p className="text-xs text-gray-500">Доступно: 100,00 ₽</p>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
            Сумма перевода <Info className="h-3 w-3" />
          </label>
          <div className="flex items-center rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
            <span className="text-orange-400 mr-2 font-medium">₽</span>
            <input
              type="text"
              placeholder="0,00"
              className="flex-1 bg-transparent text-white placeholder-gray-600 outline-none text-sm"
            />
            <span className="text-xs text-gray-600">макс. 100 ₽</span>
          </div>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
            Получатель <span className="text-orange-400">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="FX-1001 или @foxy_nickname"
              className="w-full rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5 text-sm text-white placeholder-gray-600 outline-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <Switch className="data-[state=checked]:bg-orange-500" />
            <span className="text-sm text-gray-400">Это кредит</span>
          </div>
          <span className="text-xs text-orange-400/70">до 100 ₽</span>
        </div>

        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold">
          Отправить 🐾
        </Button>
      </div>
    </div>
  )
}
