import React from 'react';
import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers">
                <div className="input-block">
                        <label htmlFor="subject">Materia</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da Semana</label>
                        <input type="text" id="week_day"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Materia</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>
            <main>
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
                            Preco/hora
                            <strong>R$ 500,00</strong>
                        </p>
                        <button type="button"> 
                        <img src={whatsappIcon} alt="Whatapps"/>
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    )
}

export default TeacherList;