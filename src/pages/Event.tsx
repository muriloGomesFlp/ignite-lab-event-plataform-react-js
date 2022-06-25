import { Header, Sidebar, Video } from '../components/Index'

export const Event = () => {
    return (
        // esta div faz uso do display=flex, organizando os elemetos um abaixo do outro (flex-col) e esticando-os ate o final da página. Se o conteudo for maior uma barra de rolagem é criada
        <div className='flex flex-col min-h-screen'>
            <Header />
            {/* o uso do felx-1 permite que o main ocupe todo o espaço (flex-1) */}
            <main className='flex flex-1'>
                <Video />
                <Sidebar />
            </main>
        </div>
    )
}