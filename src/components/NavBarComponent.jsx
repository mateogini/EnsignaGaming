import { useEffect, useState } from 'react';
import ButtonComponent from './ButtonComponent';
import CardWidgetComponent from './CardWidgetComponent';
import './Estilos/NavBarComponent.css';
import { getCategory } from './asyncMock';
import { Link } from 'react-router-dom';
export default function NavBarComponent(){
    
    return(
        <>
        <nav>
        <section className='section1'>
        <Link to={'/'} className='logo'><img className="logo" src="/src/components/img/logo.png"></img></Link>
         <input type="text" placeholder='Buscar' className='inputSearch'/>
         <CardWidgetComponent/>
         </section>
         <section className='section2'>
         <div className='botonesSection2'>
         <ButtonComponent categoria="PC's de Escritorio"/>
         <ButtonComponent categoria="Nootebook"/>
         <ButtonComponent categoria="Productos"/>
         <ButtonComponent categoria="Monitores"/>
         <ButtonComponent categoria="Arma Tu Pc"/>
         <ButtonComponent categoria="Ayuda"/>
         </div>
         </section>

        </nav>
        </>
    )

}