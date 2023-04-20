import React from "react";
import { useState } from "react";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import "./login.css";

export function Login ({fazerLogin}) {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    function handleEntrar(){{
        // tornando os campos de usuario e senha obrigatórios
        if (usuario == "" || senha == ""){
        console.log("Preencha todos os campos!")
        return;
    }
    //regras para o usuario e senha e fazer o login
        if (usuario.match (/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i) && senha.match (!senha.length >=8 , /^[a-zA-Z\d]{8,}$/)){
            console.log("usuario:", usuario);
            console.log("senha:", senha);

            fazerLogin({ usuario, senha });

            setUsuario([]);
            setSenha([]);
            console.log("Login feito com sucesso!")

        } else{
            console.log("Preencha os campos de usuário e senha corretamente!")
        }
            
        }}
    return (
        <div>
            <Header />

        <form className="form-container">
       
        <div className="form-login">
            <h1>Login</h1>
        </div> 
            <div className="form-group">
                <label className="label-usuario" htmlFor="email"><b>E-mail:</b></label>
                <div className="form-usuario">
                    <input type="email" className="input-usuario" value={usuario} name="email" id="email" placeholder="Digite seu e-mail" onChange={(e) => setUsuario(e.target.value)} required="Falta o e-mail" />
                </div>
            </div>

            <div className="form-group">
                <label className="label-password" htmlFor="name" ><b>Senha:</b></label>
                <div className="form-password">
                    <input type="password" className="input-password" value={senha} name="senha" id="senha" placeholder="Digite sua senha" onChange={(e) => setSenha(e.target.value)} required/>
                </div>
            </div>

            <h5 className="text-senhaUsuario"> *Senha deve conter 8 caracteres com letras e números </h5>

                <button className="button-entrar" type="submit" onClick={handleEntrar} > <Link to="./ListaDeFarmacias"> <b>Entrar</b></Link></button>
                <br />
            <Link to="/NovoUsuario"  className="link-cadastro">Cadastrar Usuário</Link>
        
        </form>
        </div>
        
    )
    }