import { Logo } from "./Index"

export const Header = () => {
    return (
        //uso das classes do tailwind (w: width; py:padding eixo y + valor multiplo de 4(px)). 
        <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600 ">
            <Logo />
        </header>
    )
} 