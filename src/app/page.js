// pages/index.js
import Head from 'next/head'
import Link from 'next/link'
import { IoMdHome } from "react-icons/io";

export default function Home() {
  return (
    <>
      {/* Head para meta tags e título da página */}
      <Head>
        <title>Clareia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Container principal: flex para sidebar e conteúdo */}
      <div className="flex bg-neutral-300 min-h-screen">

        {/* Sidebar: largura fixa, fundo branco e borda direita */}
        <aside className="w-60 bg-yellow-200 border-r border-amber-200 h-screen sticky top-0">
          <nav className="mt-4">
            {/* Link de navegação: Home */}
            <Link href="/" className="flex items-center px-4 py-2 hover:bg-yellow-100">
               
              <IoMdHome className="w-6 h-6 mr-3"></IoMdHome>
              <span className="font-medium">Início</span>
            </Link>
            {/* Link Em alta */}
            <Link href="/trending" className="flex items-center px-4 py-2 hover:bg-yellow-100">
              <span className="w-6 h-6 mr-3 bg-gray-300 rounded"></span>
              <span className="font-medium">Em alta</span>
            </Link>
            {/* Adicione mais links aqui seguindo o mesmo padrão */}
          </nav>
        </aside>

        {/* Área de conteúdo principal */}
        <div className="flex-1 flex flex-col">

          {/* Header superior fixo */}
          <header className="flex items-center justify-between bg-white p-4 border-b border-gray-200 sticky top-0 z-10">
            {/* Menu e logo */}
            <div className="flex items-center">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <span className="w-6 h-6 bg-gray-300 rounded"></span>
              </button>
              <Link href="/" className="ml-4 text-xl font-semibold hover:text-yellow-300">
                Clareia
              </Link>
            </div>

            {/* Barra de pesquisa */}
            <div className="flex flex-1 max-w-md mx-4">
              <input
                type="text"
                placeholder="Pesquisar"
                className="flex-1 border border-gray-300 rounded-l-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gray-100 px-4 rounded-r-full hover:bg-gray-200">
                <span className="w-5 h-5 bg-gray-300 rounded"></span>
              </button>
            </div>

            {/* Ícones de ações */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <span className="w-6 h-6 bg-gray-300 rounded"></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <span className="w-6 h-6 bg-gray-300 rounded"></span>
              </button>
              {/* Avatar do usuário */}
              <img
                src="https://via.placeholder.com/32"
                alt="Avatar"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </header>

          {/* Conteúdo principal: grid de vídeos */}
          <main className="p-4 overflow-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Card de vídeo - duplicar conforme necessário */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <img
                  src="https://via.placeholder.com/360x200"
                  alt="Thumbnail"
                  className="w-full"
                />
                <div className="p-3">
                  <h3 className="font-medium text-sm mb-1 truncate">Título do Vídeo Exemplo</h3>
                  <p className="text-xs text-gray-500">Canal Exemplo • 1,2 mi de visualizações • 2 dias atrás</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

