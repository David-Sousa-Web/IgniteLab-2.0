import { useParams } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { IconBemVindo } from "../components/IconBemVindo"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"



export function Event(){
  const { slug } = useParams<{slug: string}>()

  return(
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex flex-1">
        {slug 
          ? <Video lessonSlug={slug}/> 
          : <div className="flex-1">
              <div className="px-14 py-8 flex justify-between items-center">
                <div className="">
                  <h1 className="font-bold text-5xl">Bem vindo a nossa plataforma de Aulas</h1>
                  <p className="pt-6 text-gray-200">Se torne um Herói na programação com esse cronograma de aulas</p>
                </div>
                <div>
                  <IconBemVindo />
                </div>
              </div>
              
              <Footer />
            </div>}
        <Sidebar/>
        
      </main>
      
    </div>   
  )
}