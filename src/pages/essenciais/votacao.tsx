import Botao from '@/components/template/Botao'
import Display from '@/components/template/Display'
import Flex from '@/components/template/Flex'
import Pagina from '@/components/template/Pagina'
import { useState } from 'react'

export default function(){
  const [votos, setVotos] = useState({verde: 0, roxo: 0});

  function votar(cor: string){
    if(cor === 'verde'){
      // aos se trabalhar com objetos, é necessário fazer uma cópia do objeto para depois alterar o valor
      // setVotos({verde: votos.verde+1, roxo: votos.roxo})
      setVotos((_votos)=>{return {verde: _votos.verde+1, roxo: _votos.roxo}})
    }else{
      setVotos((_votos)=>{return {verde: _votos.verde, roxo: _votos.roxo+1}})
    }
  }

  return(
    <Pagina titulo='Votação' subtitulo='Utilizando estado com objeto'>
      <Flex col center>
        <Display texto='Selecione sua cor preferida' textoComplementar={`Verde: ${votos.verde} | Roxo: ${votos.roxo}`}/>
        <Flex gap={5}>
          <Botao texto='Verde' cor='bg-green-500' tamanho='2xl' redondo onClick={()=>votar('verde')}/>
          <Botao texto='Roxo' cor='bg-purple-500' tamanho='2xl' redondo onClick={()=>votar('roxo')}/>
        </Flex>
        <Botao texto='Limpar' cor='bg-zinc-500' tamanho='2xl' redondo onClick={()=>setVotos({verde: 0, roxo: 0})}/>
      </Flex>
    </Pagina>
  )
}