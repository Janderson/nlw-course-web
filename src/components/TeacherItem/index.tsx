import  React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/186284?s=460&v=4" alt="JAnderson"></img>
                <div>
                    <strong>Janderson Ferreira</strong>
                    <span>Quimica</span>
                </div>
            </header>
            <p>
                Entuasiasta de empreendedorismo
                <br/>
                Apaixonado por novas tecnologias, twiter e mercado financeiro

            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 500,00</strong>
                </p>
                <button type="button"> 
                <img src={whatsappIcon} alt="Whatapps"/>
                Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;