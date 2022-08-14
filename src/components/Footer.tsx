import { LogoRocket } from "./LogoRocket";

export function Footer(){
  return(
    <footer className="flex py-6 items-center justify-between border-t-[1px] border-gray-300 w-[90%] m-auto mt-2">
    <div className="flex gap-4 items-center">

      <LogoRocket />
      <span className="text-gray-300">
        Rocketseat - Todos os direitos reservados
      </span>

    </div>

    <div className="flex">
      <span className="text-gray-300">
        Políticas de privacidade
      </span>
    </div>

  </footer>
  )
}