import React from "react"
import { useState } from "react";
import { Header } from "./Header";
import "./login.css"

function Login ({fazerLogin}) {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    function handleEntrar( event) {
       
        
        if (usuario && senha !== ''){
            fazerLogin({ usuario, senha });
            setUsuario([]);
            setSenha([]);
        }
    }

    return (
        <div>
            <Header />

        <form className="form-container">
            <div className="form-group">
                <label className="label-usuario" htmlFor="usuario"><b>Usuário</b></label>
                <div className="form-usuario">
                    <input type="text" className="input-usuario" name="usuario" id="usuario" placeholder="Digite seu usuário" onChange={(e) => setUsuario(e.target.value)} required/>
                </div>
            </div>

            <div className="form-group">
                <label className="label-password" htmlFor="name"><b>Senha</b></label>
                <div className="form-password">
                    <input type="password" className="input-password" name="senha" id="senha" placeholder="Digite sua senha" onChange={(e) => setSenha(e.target.value)} required/>
                </div>
            </div>

                <button className="button-entrar" type="submit" onClick={handleEntrar} > <b>Entrar</b></button>

        </form>
        </div>
        
    )
}

export default Login;