import "./Login.css"
export const Login = () => {
    return (
        <div className="container-login">
            <div className="cubo-login">
                <h1>Faça seu login</h1>
                <div className="container-input-login">
                    <label>
                        <input type="email" placeholder="Email" />
                    </label>
                    <label>
                        <input type="password" placeholder="Senha" />
                    </label>
                </div>
                <a href="#" class="btn btn3">Entrar</a>
            </div>
        </div>
    )
}