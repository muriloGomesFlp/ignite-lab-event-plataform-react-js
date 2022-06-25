export type LessonProps = {
    title: string
    slug: string
    availableAt: Date
    type: 'live' | 'class'
}

export type GetLessonsQueryResponse = {
    lessons: {
        id: string
        title: string
        slug: string
        availableAt: string
        lessonType: 'live' | 'class'
    }[]
}