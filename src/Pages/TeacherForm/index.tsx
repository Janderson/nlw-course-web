import React from 'react';
import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Select from '../../components/Select';

import './styles.css'

function TeacherForm(){
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que voce quer dar aulas" 
                description="O primeiro passo é preencher esse formulário"/>
        
        <main>
        <fieldset>
                <legend>Seus Dados</legend>
                <Input name="name" label="Nome Completo"></Input>
                <Input name="avatar" label="Avatar"></Input>
                <Input name="whatsapp" label="WhatsApp"></Input>
                <Textarea name="bio" label="Biografia" />
            </fieldset>
            <fieldset>
                <legend>Sobre a aula</legend>
                <Select 
                    name="subject"
                    label="Matéria"
                    options={[
                        { value: 'Artes', label: 'Artes'},
                        { value: 'Biologia', label: 'Biologia'},
                        { value: 'Ciências', label: 'Ciências'},
                        { value: 'Educação Física', label: 'Educação Física'},
                        { value: 'Geografia', label: 'Geografia'},
                        { value: 'Matemática', label: 'Matemática'}
                    ]}
                />
                <Input name="cost" label="Custo da sua hora por aula"></Input>
            </fieldset>
            <footer>
            <p>
                <img src={warningIcon} alt="Aviso Importante"/>
                Importante! <br />
                Preencha todos os dados
            </p>
            <button type="button">Salvar Cadastro</button>
            </footer>
        </main>

        </div>
    )
}

export default TeacherForm;