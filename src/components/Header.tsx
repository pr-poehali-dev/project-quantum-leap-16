import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { OpenAccountModal } from "@/components/OpenAccountModal"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-3">
        <img
          src="https://cdn.poehali.dev/projects/2be188ec-3d5a-4738-9f51-8c824e92ee81/files/9d4f1cc3-528e-4742-a8bd-b2d858c604de.jpg"
          alt="Foxy"
          className="h-9 w-9 rounded-full object-cover border-2 border-orange-500/40"
        />
        <span className="text-lg font-bold text-white">
          Foxy<span className="text-orange-400">.bank</span>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Счёт
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1">
          Переводы <ChevronDown className="h-4 w-4" />
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Депозиты
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Кредит
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          FoxToken
        </a>
      </nav>

      <OpenAccountModal>
        <Button
          variant="outline"
          className="rounded-full border-orange-500 text-orange-400 hover:bg-orange-500/10 hover:text-orange-300 bg-transparent"
        >
          Открыть счёт
        </Button>
      </OpenAccountModal>
    </header>
  )
}