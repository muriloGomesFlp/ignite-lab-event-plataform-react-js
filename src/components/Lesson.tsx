import { CheckCircle, Lock } from 'phosphor-react'
import { LessonProps } from '../types/Event'
import {isPast, format} from 'date-fns'
import { ptBR } from 'date-fns/locale'


export const Lesson = (props: LessonProps) => {
    const isLassonAvalible = isPast(props.availableAt) //se a data estiver no passado, ele retorna true.
    const avaliableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm",{
        locale: ptBR,
    })//formata a data e passa para o padrão BR

    return (

        <a href="#">
            <span className="text-gray-300" >
                {avaliableDateFormatted}
            </span>
            {/* rounded: add um bordera-radius de 4px */}
            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                    {/* Uso do flex item-center e gap-2 para arrumar a quebra de layout ocasionado ao add o icone  */}
                    {isLassonAvalible ? (
                        < span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20} />
                            Conteúdo Liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Em Breve
                        </span>
                    )}
                    <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold ">
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className="text-gray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </a >

    )
}