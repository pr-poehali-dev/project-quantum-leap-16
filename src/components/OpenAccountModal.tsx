import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Icon from "@/components/ui/icon"

interface OpenAccountModalProps {
  children: React.ReactNode
}

type Step = "form" | "success"

export function OpenAccountModal({ children }: OpenAccountModalProps) {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<Step>("form")
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "" })
  const [accountId, setAccountId] = useState("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function generateAccountId() {
    return "FX-" + Math.floor(1000 + Math.random() * 9000)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setAccountId(generateAccountId())
    setStep("success")
    setLoading(false)
  }

  function handleClose(val: boolean) {
    setOpen(val)
    if (!val) {
      setTimeout(() => {
        setStep("form")
        setForm({ name: "", email: "", phone: "" })
        setAccountId("")
      }, 300)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-[#141414] border border-[#262626] text-white max-w-md">
        {step === "form" ? (
          <>
            <DialogHeader>
              <div className="flex items-center gap-3 mb-1">
                <img
                  src="https://cdn.poehali.dev/projects/2be188ec-3d5a-4738-9f51-8c824e92ee81/files/9d4f1cc3-528e-4742-a8bd-b2d858c604de.jpg"
                  alt="Foxy"
                  className="h-10 w-10 rounded-full border-2 border-orange-500/40"
                />
                <DialogTitle className="text-lg font-bold">
                  Открыть счёт в Foxy.bank
                </DialogTitle>
              </div>
              <p className="text-sm text-gray-400">Заполни форму — счёт откроется мгновенно 🐾</p>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-gray-300 text-sm">Имя и фамилия</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Алиса Лисова"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="bg-[#0f0f0f] border-[#333] text-white placeholder-gray-600 focus:border-orange-500 focus:ring-orange-500/20"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-gray-300 text-sm">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="alisa@foxy.bank"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="bg-[#0f0f0f] border-[#333] text-white placeholder-gray-600 focus:border-orange-500 focus:ring-orange-500/20"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-gray-300 text-sm">Телефон</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+7 (900) 000-00-00"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="bg-[#0f0f0f] border-[#333] text-white placeholder-gray-600 focus:border-orange-500 focus:ring-orange-500/20"
                />
              </div>

              <div className="rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-2.5 flex items-center gap-2">
                <Icon name="Coins" size={16} className="text-orange-400 shrink-0" />
                <p className="text-xs text-orange-300">При открытии счёта дарим <strong>10 FoxToken</strong> 🎁</p>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <Icon name="Loader2" size={16} className="animate-spin" /> Открываем счёт...
                  </span>
                ) : (
                  "Открыть счёт бесплатно"
                )}
              </Button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center text-center py-4 gap-4">
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/2be188ec-3d5a-4738-9f51-8c824e92ee81/files/9d4f1cc3-528e-4742-a8bd-b2d858c604de.jpg"
                alt="Foxy"
                className="h-20 w-20 rounded-full border-4 border-orange-500/50"
              />
              <span className="absolute -bottom-1 -right-1 text-2xl">🎉</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Добро пожаловать, {form.name.split(" ")[0]}!</h2>
              <p className="text-gray-400 text-sm">Твой счёт в Foxy.bank успешно открыт</p>
            </div>
            <div className="w-full rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Номер счёта</span>
                <span className="text-orange-400 font-semibold">{accountId}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Баланс</span>
                <span className="text-white font-semibold">0,00 ₽</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">FoxToken бонус</span>
                <span className="text-orange-400 font-semibold">+10 FXT 🦴</span>
              </div>
            </div>
            <Button
              onClick={() => handleClose(false)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
            >
              Отлично, спасибо! 🐾
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
