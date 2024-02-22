import React, { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import './formulario.css';

const Formulario = ({ aoCadastrar, generos, aoCriarGenero }) => {
    const [nome, setNome] = useState('');
    const [diretor, setDiretor] = useState('');
    const [imagem, setImagem] = useState('');
    const [genero, setGenero] = useState('');
    const [nomeGenero, setNomeGenero] = useState('');
    const [corGenero, setCorGenero] = useState('');

    const aoSubmeter = (evento) => {
        evento.preventDefault();
        console.log('form enviado', nome, diretor, imagem, genero);
        aoCadastrar({
            nome,
            diretor,
            imagem,
            genero
        });
    };

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do seu filme favorito.</h2>
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome "
                    valor={nome}
                    aoAlterado={(valor) => setNome(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Diretor"
                    placeholder="Digite o nome do diretor "
                    valor={diretor}
                    aoAlterado={(valor) => setDiretor(valor)}
                />
                <Campo
                    label="Imagem"
                    placeholder="Informe o endereço da imagem (500x500) "
                    aoAlterado={(valor) => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Gêneros"
                    items={generos}
                    valor={genero}
                    aoAlterado={(valor) => setGenero(valor)}
                />
                <Botao texto="Criar card" />
            </form>
            <form
                className="formulario"
                onSubmit={(evento) => {
                    evento.preventDefault();
                    aoCriarGenero({ nome: nomeGenero, cor: corGenero });
                }}
            >
                <h2>Preencha os dados para criar um novo gênero.</h2>
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome do gênero"
                    valor={nomeGenero}
                    aoAlterado={(valor) => setNomeGenero(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Cor"
                    type="color"
                    placeholder="Digite sua cor"
                    valor={corGenero}
                    aoAlterado={(valor) => setCorGenero(valor)}
                />
                <Botao texto="Criar Gênero" />
            </form>
        </section>
    );
};

export default Formulario;
