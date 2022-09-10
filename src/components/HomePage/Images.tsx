import estudantes from '../../assets/image2.webp';
import texto from '../../assets/image1.webp';
import background from '../../assets/background.png';


export function Images(){
  return(
    <section className="mt-6">
      <div>
        <img src={background} alt="Imagem de background." className='absolute flex justify-start'/>
      </div>
      <div className='flex flex-row justify-center'>
        <img src={estudantes} alt="Imagem com Estudantes." className='inline-block'/>
        <img src={texto} alt="Imagem com texto, personalização da educação." className='absolute inline-block mt-56'/>
    </div>
    </section>
  )
}