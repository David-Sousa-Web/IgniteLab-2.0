import { CheckCircle, Lock } from 'phosphor-react'
import {isPast, format} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps{
  title: string;
  slug: string;
  avaliableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps){
  const isLessonAvaileble = isPast(props.avaliableAt)
  const availebleDateFormatted = format(props.avaliableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })

  return(
    <a href="#">
      <span className="text-gray-300">
        {availebleDateFormatted}
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isLessonAvaileble ? (<span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
            <CheckCircle size={20}/>
            conteudo Liberado
          </span>
          ):(<span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
            <Lock size={20}/>
            Em breve
          </span>
          )}

          <span className="text-xs rounded py-[0.124rem] px-2 text-white border border-green-300 font-bold">
            {props.type == 'live' ? 'AO VIVO': 'AULA PRATICA'}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">
          {props.title}
        </strong>
      </div>
    </a>
  )
}