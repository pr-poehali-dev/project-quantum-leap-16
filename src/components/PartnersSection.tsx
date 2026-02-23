import Icon from "@/components/ui/icon"

const features: { name: string; icon: string }[] = [
  { name: "Счёт до 100 ₽", icon: "Wallet" },
  { name: "Переводы", icon: "ArrowLeftRight" },
  { name: "Депозиты", icon: "PiggyBank" },
  { name: "Кредит", icon: "Landmark" },
  { name: "FoxToken", icon: "Coins" },
  { name: "Защита", icon: "ShieldCheck" },
  { name: "24/7 поддержка", icon: "Headphones" },
]

export function PartnersSection() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-4 py-8">
      {features.map((f) => (
        <div key={f.name} className="flex items-center gap-2 text-gray-500 hover:text-orange-400 transition-colors cursor-default">
          <Icon name={f.icon} size={16} />
          <span className="text-sm font-medium">{f.name}</span>
        </div>
      ))}
    </section>
  )
}
