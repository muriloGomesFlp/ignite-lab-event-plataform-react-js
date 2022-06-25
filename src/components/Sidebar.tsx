import { useQuery } from "@apollo/client"
import { GET_LESSONS_QUERY } from "../constants/Querys"
import { GetLessonsQueryResponse } from "../types/Event"
import { Lesson } from "./Lesson"

export const Sidebar = () => {

    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600" >
            {/* text-2xl: tamanho da font, pb:Padding Bottom, mb:Margin Bottom, border-b:Border Bottom , block: faz com que o span ocupe todo o espaço, isso porque o span é originalmente um display:inline */}
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">Cronogramas de aulas</span>
            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    )
                })}

            </div>

        </aside>
    )
}