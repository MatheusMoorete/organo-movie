import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Genero from "./componentes/Genero"; 
import { v4 as uuidv4 } from 'uuid';
//imagens
import aboutTimeImg from './imagens/abouttime.jpg';
import OneDayImg from './imagens/oneday.jpg';

function App() {

  const [generos, setGeneros] = useState([
    {
      id: uuidv4(),
      nome: 'Terror',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Drama Romântico',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Ficção Científica',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Comédia Romântia',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'Ação',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Fantasia',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Faroeste',
      cor: '#FF8A29'
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAST LIVES',
      cargo: 'Celine Song',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtNAScjajLQRXQkb9vm83QFX3XFyUnIAg7IgYKlTNV2fD-nAiOETcLIiu2g8MeVvFzfI&usqp=CAU',
      genero: generos[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ABOUT TIME',
      cargo: 'Richard Curtis',
      imagem: aboutTimeImg,
      genero: generos[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'BEFORE SUNSET',
      cargo: 'Richard Linklater',
      imagem: '	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkhJlZby2lkeyHe_Vk3okIn4y8qMRisYNuPqUutU6c7l9pznVurmneb1lvoNa9sye1gfs&usqp=CAU',
      genero: generos[0].nome
    },
    {
      id: uuidv4(),
      nome: 'ONE DAY',
      cargo: ' Lone Scherfig',
      imagem: OneDayImg,
      genero: generos[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAST LIVES',
      cargo: 'Celine Song',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtNAScjajLQRXQkb9vm83QFX3XFyUnIAg7IgYKlTNV2fD-nAiOETcLIiu2g8MeVvFzfI&usqp=CAU',
      genero: generos[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ABOUT TIME',
      cargo: 'Richard Curtis',
      imagem: aboutTimeImg,
      genero: generos[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'BEFORE SUNSET',
      cargo: 'Richard Linklater',
      imagem: '	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkhJlZby2lkeyHe_Vk3okIn4y8qMRisYNuPqUutU6c7l9pznVurmneb1lvoNa9sye1gfs&usqp=CAU',
      genero: generos[1].nome
    },
    {
      id: uuidv4(),
      nome: 'ONE DAY',
      cargo: ' Lone Scherfig',
      imagem: OneDayImg,
      genero: generos[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAST LIVES',
      cargo: 'Celine Song',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtNAScjajLQRXQkb9vm83QFX3XFyUnIAg7IgYKlTNV2fD-nAiOETcLIiu2g8MeVvFzfI&usqp=CAU',
      genero: generos[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ABOUT TIME',
      cargo: 'Richard Curtis',
      imagem: aboutTimeImg,
      genero: generos[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'BEFORE SUNSET',
      cargo: 'Richard Linklater',
      imagem: '	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkhJlZby2lkeyHe_Vk3okIn4y8qMRisYNuPqUutU6c7l9pznVurmneb1lvoNa9sye1gfs&usqp=CAU',
      genero: generos[2].nome
    },
    {
      id: uuidv4(),
      nome: 'ONE DAY',
      cargo: ' Lone Scherfig',
      imagem: OneDayImg,
      genero: generos[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAST LIVES',
      cargo: 'Celine Song',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtNAScjajLQRXQkb9vm83QFX3XFyUnIAg7IgYKlTNV2fD-nAiOETcLIiu2g8MeVvFzfI&usqp=CAU',
      genero: generos[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ABOUT TIME',
      cargo: 'Richard Curtis',
      imagem: aboutTimeImg,
      genero: generos[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'BEFORE SUNSET',
      cargo: 'Richard Linklater',
      imagem: '	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkhJlZby2lkeyHe_Vk3okIn4y8qMRisYNuPqUutU6c7l9pznVurmneb1lvoNa9sye1gfs&usqp=CAU',
      genero: generos[3].nome
    },
    {
      id: uuidv4(),
      nome: 'ONE DAY',
      cargo: ' Lone Scherfig',
      imagem: OneDayImg,
      genero: generos[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAST LIVES',
      cargo: 'Celine Song',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtNAScjajLQRXQkb9vm83QFX3XFyUnIAg7IgYKlTNV2fD-nAiOETcLIiu2g8MeVvFzfI&usqp=CAU',
      genero: generos[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ABOUT TIME',
      cargo: 'Richard Curtis',
      imagem: aboutTimeImg,
      genero: generos[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'BEFORE SUNSET',
      cargo: 'Richard Linklater',
      imagem: '	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkhJlZby2lkeyHe_Vk3okIn4y8qMRisYNuPqUutU6c7l9pznVurmneb1lvoNa9sye1gfs&usqp=CAU',
      genero: generos[4].nome
    },
    {
      id: uuidv4(),
      nome: 'ONE DAY',
      cargo: ' Lone Scherfig',
      imagem: OneDayImg,
      genero: generos[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAST LIVES',
      cargo: 'Celine Song',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtNAScjajLQRXQkb9vm83QFX3XFyUnIAg7IgYKlTNV2fD-nAiOETcLIiu2g8MeVvFzfI&usqp=CAU',
      genero: generos[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ABOUT TIME',
      cargo: 'Richard Curtis',
      imagem: aboutTimeImg,
      genero: generos[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'BEFORE SUNSET',
      cargo: 'Richard Linklater',
      imagem: '	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkhJlZby2lkeyHe_Vk3okIn4y8qMRisYNuPqUutU6c7l9pznVurmneb1lvoNa9sye1gfs&usqp=CAU',
      genero: generos[5].nome
    },
    {
      id: uuidv4(),
      nome: 'ONE DAY',
      cargo: ' Lone Scherfig',
      imagem: OneDayImg,
      genero: generos[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial);

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCor(cor, id) {
    setGeneros(generos.map(genero => {
      if(genero.id === id) {
        genero.cor = cor;
      }
      return genero;
    }));
  }

  function cadastrarGenero({ nome, cor }) {
    setGeneros([...generos, { nome, cor, id: uuidv4() }]);
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }));
  }

  return (
    <div>
      <Banner />
      <Formulario aoCriarGenero={cadastrarGenero} generos={generos.map(genero => genero.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="generos"> {/* Alterado o nome da classe aqui */}
        <h1>Minha organização</h1>
        {generos.map((genero, indice) => <Genero mudarCor={mudarCor} key={indice} genero={genero} colaboradores={colaboradores.filter(colaborador => colaborador.genero === genero.nome)} aoDeletar={deletarColaborador} aoFavoritar={resolverFavorito} />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;