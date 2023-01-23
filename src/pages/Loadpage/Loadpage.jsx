import "./Loadpage.css"
import { Link } from "react-router-dom"
export function Loadpage() {
    return (
        <div className="conteudo-loadpage">
            <main className="mainload">
                <div class="conteudo-principal">
                    <h1 class="titulo-primario">Malhar não fica mais fácil, você que fica melhor!</h1>
                    <h2 class="titulo-secundario">SE INSCREVA AGORA E MUDE DE VIDA</h2>
                    <div class="botoes">
                        <button class="btn-exp">Agendar aula experimental</button>
                        <button class="btn-personal">contactar personal Trainer</button>
                        <Link to="/login"><button class="btn-personal">Entrar</button></Link>
                    </div>
                </div>
            </main>
            <div class="container">
                <h1 class="titulo-primario">Nossos Planos</h1>
                <div class="divs-cards">
                    <div class="img1">
                        <h1 class="titulo-planos">PLANO JÚNIOR</h1>
                        <button class="btn-planos" id="btn-planos">GO!</button>
                    </div>
                    <div class="img2">
                        <h1 class="titulo-planos">PLANO SENIOR</h1>
                        <button class="btn-planos" id="btn-planos">GO!</button>
                    </div>
                    <div class="img3">
                        <h1 class="titulo-planos">PLANO PLENO</h1>
                        <button class="btn-planos" id="btn-planos">GO!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}