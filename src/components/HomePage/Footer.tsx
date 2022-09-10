import logo from '../../assets/logo2.webp';

export function Footer(){
  return(
      <footer className="w-screen h-full mt-8 bg-gray-900">
        <div className="w-full h-full flex justify-center items-center">
          <img src={logo} alt="Logomarca." className="object-scale-down h-16 pr-18"/>
          <div className="grid grid-rows-2 grid-flow-col gap-3 place-content-center px-20 text-white ">
            <div>
              <ul>
                <li><h1 className='text-2xl font-bold'>Conheça o Blox</h1></li>
                <li>Blog</li>
                <li>Vídeos</li>
                <li>Quem inova com Blox</li>
                <li>Como funciona</li>
                <li>Declaração de Privacidade</li>
              </ul>
            </div>
            <div>
              <ul>
                <li><h1 className='text-2xl font-bold'>Soluções por ensino</h1></li>
                <li>Médio</li>
                <li>Superior</li>
                <li>Corporativo</li>
              </ul>
            </div>
            <div className='row-span-2 '>
              <ul>
                <li><h1 className='text-2xl font-bold'>Soluções</h1></li>
                <li>Gestor de ementas</li>
                <li>Flexibilidade Curricular</li>
                <li>E-commerce de vagas ociosas</li>
                <li>Soluções EAD e metodologias ativas</li>
                <li>Catálogos de planos de ensino</li>
                <li>Consultoria educacional</li>
              </ul>
            </div>
            <div>
              <ul>
                <li><h1 className='text-2xl font-bold'>Atendimento</h1></li>
                <li>
                    Segunda a Sexta: das 9h às 17h
                </li>
                <li>
                  55 11 95771-8374
                </li>
                <li>
                  contato@blox.education
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li><h1 className='text-2xl font-bold'>Conheça o Blox</h1></li>
                <li>
                  <p>Alameda Vicente Pinzon, 54 - Vila</p>
                  <p>Olímpia, São Paulo - SP, 04547-130</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='text-white' />
          <ul className='text-white'>
            <li>©2020, Blox. All Rights Reserved. Created with ♥︎ Cultiva <span>SIGA O BLOX</span></li>
            <li>Youtube</li>
            <li>Facebook</li>
            <li>Linkedin</li>
          </ul>
      </footer>
  )
}