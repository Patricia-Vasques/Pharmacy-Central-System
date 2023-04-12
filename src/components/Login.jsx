import React from "react"

export function Login () {
    return (
        <form className="form-container">

            <div className="form-group">
                <label className="label-name" htmlFor="name">Usuário</label>
                <div className="input-name">
                    <input type="text" className="" name="usuario" id="usuario" placeholder="Digite seu usuário" required/>
                </div>
            </div>

            <div className="form-group">
                <label className="label-password" htmlFor="name">Senha</label>
                <div className="">
                    <input type="password" className="input-password" name="senha" id="senha" placeholder="Digite sua senha" required/>
                </div>
            </div>

            
                <button className="button-entrar" type="submit">Entrar</button>
            
        </form>
    )
}
