import { CheckCircle, Lock } from 'phosphor-react'
import {isPast, format} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames'

interface LessonProps{
  title: string;
  slug: string;
  avaliableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps){
  const { slug } = useParams<{slug: string}>()

  const isLessonAvaileble = isPast(props.avaliableAt)
  const availebleDateFormatted = format(props.avaliableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })

  const isActiveLesson = slug === props.slug;

  return(
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className="text-gray-300">
        {availebleDateFormatted}
      </span>

      <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500',{
        'bg-green-500': isActiveLesson,
      })}>
        <header className="flex items-center justify-between">
          {isLessonAvaileble ? (
          <span className={classNames('text-sm flex items-center gap-2 font-medium',{
            'text-white': isActiveLesson,
            'text-blue-500': !isActiveLesson
          })}>
            <CheckCircle size={20}/>
            conteudo Liberado
          </span>
          ):(
          <span className="text-sm flex items-center gap-2 text-orange-500 font-medium">
            <Lock size={20}/>
            Em breve
          </span>
          )}

          <span className={classNames('text-xs rounded py-[0.124rem] px-2 text-white border font-bold',{
            'border-white': isActiveLesson,
            'border-green-300': !isActiveLesson,
          })}>
            {props.type == 'live' ? 'AO VIVO': 'AULA PRATICA'}
          </span>
        </header>
        <strong className={classNames('mt-5 block',{
          'text-white': isActiveLesson,
          'text-gray-200': !isActiveLesson,
        })}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}