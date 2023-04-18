import React from "react";
import { useState } from "react";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import "./login.css";

export function Login ({fazerLogin}) {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    function handleEntrar(){{

        if (usuario !== '' && senha !== ''){
            console.log("usuario:", usuario);
            console.log("senha:", senha);

            fazerLogin({ usuario, senha });

        } else{
            alert("Preencha os campos de usuário e senha!")
        }
            
            setUsuario([]);
            setSenha([]);
    
        }
        }
    

    return (
        <div>
            <Header />

            


        <form className="form-container">
       
        <div className="form-login">
            <h1>Login</h1>
        </div> 
            <div className="form-group">
                <label className="label-usuario" htmlFor="email"><b>E-mail</b></label>
                <div className="form-usuario">
                    <input type="email" className="input-usuario" name="email" id="email" placeholder="Digite seu e-mail" onChange={(e) => setUsuario(e.target.value)} required="Falta o e-mail" />
                </div>
            </div>

            <div className="form-group">
                <label className="label-password" htmlFor="name"><b>Senha</b></label>
                <div className="form-password">
                    <input type="password" className="input-password" name="senha" id="senha" placeholder="Digite sua senha" onChange={(e) => setSenha(e.target.value)} required/>
                </div>
            </div>

                <button className="button-entrar" type="submit" onClick={handleEntrar} > <Link to="./ListaDeFarmacias"> <b>Entrar</b></Link></button>
                <br />
            <Link to="/NovoUsuario"><a className="link-cadastro">Cadastrar Usuário</a></Link>
        
        </form>
        </div>
        
    )
    }