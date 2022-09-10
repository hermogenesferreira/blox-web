import icon1 from '../../assets/icon1.webp';
import icon2 from '../../assets/icon2.webp';
import icon3 from '../../assets/icon3.webp';
import icon4 from '../../assets/icon4.webp';

import { Link } from "react-router-dom";

export function Soluctions(){
  return(
    <section>
      <div className="grid grid-rows-2 grid-flow-col gap-3 place-content-center px-20 text-gray-800">
      <div className="border-2 rounded-[24px] px-8 pt-8 pb-16">
        <img src={icon1} alt="Icone gestor digital"/>
        <h1 className="font-bold text-2xl pb-6">Gestor digital de ementas + Dashboard de Gestão</h1>
        <p>Os serviços da nossa base estão disponíveis de forma gratuita, 
          para qualquer instituição de ensino.</p>
      </div>
      <div className="border-2 rounded-[24px]  px-8 pt-8">
      <img src={icon3} alt="Icone gestor digital"/>
        <h1 className="font-bold text-2xl pb-6">Flexibilização curricular</h1>
        <p>Os serviços da nossa base estão disponíveis de forma gratuita, 
          para qualquer instituição de ensino.</p>
      </div>
      <div className="border-2 rounded-[24px]  px-8 pt-8">
      <img src={icon2} alt="Icone gestor digital"/>
        <h1 className="font-bold text-2xl pb-6">Catálogos de planos de ensino</h1>
        <p>Os serviços da nossa base estão disponíveis de forma gratuita, 
          para qualquer instituição de ensino.</p>
      </div>
      <div className="border-2 rounded-[24px]  px-8 pt-8">
      <img src={icon4} alt="Icone gestor digital"/>
        <h1 className="font-bold text-2xl pb-6">E-commerce de vagas ociosas</h1>
        <p>Os serviços da nossa base estão disponíveis de forma gratuita, 
          para qualquer instituição de ensino.</p>
      </div>

      <div className="row-span-2 px-8 pt-8">
        <h1 className="font-bold text-5xl pb-6">Soluções modulares para inovar na educação</h1>
        <p>
          O Blox te convida a dar o primeiro passo da trilha de inovação. 
          A jornada de transformação continua com os serviços que fizerem 
          sentido ao momento de cada instituição.
        </p>
        <Link to="dashboard">
        <button className="text-white bg-blue-400 ml-28 px-10 py-3 rounded-md hover:bg-blue-600">
          TESTE GRÁTIS
        </button>
        </Link>
        </div>
      </div>
    </section>
  )
}