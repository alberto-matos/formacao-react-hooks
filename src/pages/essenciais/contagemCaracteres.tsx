import Display from '@/components/template/Display'
import Pagina from '@/components/template/Pagina'
import { clear } from 'console'
import { useEffect, useState } from 'react'

export default function () {
  const qtdCaracteres = 400
  const [caracteresRestantes, setCaracteresRestantes] = useState(qtdCaracteres)
  const [texto, setTexto] = useState('')

  // esta função será executada sempre que o texto mudar, após 1 segundo
  // a cada mudança de texto, o timeout é reiniciado e a função só é executada após 1 segundo
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCaracteresRestantes(qtdCaracteres - texto.length)
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [texto])

  return (
    <Pagina titulo='Contagem de caracteres' subtitulo='Entendendo as funções de limpeza'>
      <Display texto='Digite seu texto' textoComplementar={`${caracteresRestantes} caracteres restantes!`} />
      <textarea
        value={texto}
        onInput={(e) => setTexto(e.currentTarget.value)}
        className={`
          w-3/5 h-72 p-5 
          border border-zinc-700 bg-zinc-700 rounded-lg 
          text-white text-2xl
          focus:outline-none focus:border-blue-500`}
      >

      </textarea>

    </Pagina>
  )
}