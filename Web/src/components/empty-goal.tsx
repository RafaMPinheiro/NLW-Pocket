import { Plus } from 'lucide-react'

import { LetsStart } from './images/let-start'
import { LogoInOrbit } from './images/logo-in-orbit'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'

export const EmpytGoal = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <LogoInOrbit />
      <LetsStart />
      <div className="flex flex-col items-center gap-5">
        <p className="max-w-80 text-zinc-300 text-center leading-relaxed">
          Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora
          mesmo?
        </p>
        <DialogTrigger asChild>
          <Button>
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>
    </div>
  )
}
