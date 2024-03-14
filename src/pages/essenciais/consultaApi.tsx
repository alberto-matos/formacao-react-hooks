import Pagina from '@/components/template/Pagina'
import { use, useEffect, useState } from 'react'

export default function () {
  const [imgUrl, setImgUrl] = useState('')

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => setImgUrl(data.message))
  }, [])

  return (
    <Pagina titulo='Requisição à API' subtitulo='Requerendo dados'>
      <img className='max-w-sm' src={imgUrl} alt='Imagem' />
    </Pagina>
  )
}