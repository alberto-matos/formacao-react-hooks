import Botao from '@/components/template/Botao'
import Display from '@/components/template/Display'
import Flex from '@/components/template/Flex'
import Pagina from '@/components/template/Pagina'
import { useEffect, useState } from 'react'

export default function () {
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)
  const [greater, setGreater] = useState(0)

  useEffect(() => {
    setGreater(Math.max(n1, n2))
  }, [n1, n2])

  return (
    <Pagina titulo='Número Maior' subtitulo='Entendendo useEffect'>
      <Display texto={`N1: ${n1} | N2: ${n2}`} textoComplementar={`O maior número é ${greater}`} />
      <Flex gap={5}>
        <Botao texto='N1' redondo tamanho='3xl' onClick={() => setN1(n1 + 1)} />
        <Botao texto='N2' redondo tamanho='3xl' onClick={() => setN2(n2 + 1)} />
      </Flex>
    </Pagina>
  )
}