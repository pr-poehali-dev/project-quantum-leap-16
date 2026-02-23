import { ArrowUpRight, Plus } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const clients = [
  { name: "Алиса Лисова", info: "alisa@foxy.bank", code: "FX-1001", color: "bg-orange-600" },
  { name: "Максим Рыжов", info: "+7 (900) 111-22-33", code: "FX-1002", color: "bg-amber-600" },
  { name: "Ольга Хвостова", info: "olga@foxy.bank", code: "FX-1003", color: "bg-red-600" },
  { name: "Игорь Пушистый", info: "+7 (900) 444-55-66", code: "FX-1004", color: "bg-yellow-600" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <span className="text-2xl">🏦</span>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Открытие счёта</h3>
      <p className="mb-4 text-sm text-gray-400">Зарегистрируйся и получи личный счёт Foxy.bank — быстро и без лишних бумаг</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-orange-400 hover:text-orange-300 transition-colors">
        Открыть счёт <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {clients.map((client, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarFallback className={`${client.color} text-white text-xs`}>
                  {client.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-white">{client.name}</p>
                <p className="text-xs text-gray-500">{client.info}</p>
              </div>
            </div>
            <span className="text-xs text-orange-400/70">{client.code}</span>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-center text-gray-500 hover:text-orange-400 hover:bg-[#1f1f1f] mt-2"
        >
          <Plus className="mr-2 h-4 w-4" /> Новый клиент
        </Button>
      </div>
    </div>
  )
}
