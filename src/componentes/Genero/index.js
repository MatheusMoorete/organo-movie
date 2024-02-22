import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './genero.css'

const Genero = ({ genero, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
    return (

        colaboradores.length > 0 && <section className='genero' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(genero.cor, '0.6') }}>
            <input type='color' className='input-cor' value={genero.cor} onChange={evento => {
                mudarCor(evento.target.value, genero.id);
            }} />
            <h3 style={{ borderColor: genero.cor }}>{genero.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => <Colaborador key={indice} colaborador={colaborador} corDeFundo={genero.cor} aoDeletar={aoDeletar} aoFavoritar={aoFavoritar} />)}
            </div>
        </section>

    )
}

export default Genero
