import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import "./login.css";

export function Login () {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();
    
    function handleEntrar() {
        {
          //regras para o usuario e senha e fazer o login
          if (usuario.length >= 8 && senha.length >= 8) {
            console.log("usuario:", usuario);
            console.log("senha:", senha);
            alert("Login feito com sucesso!");
      
            //redirecionar para a página de Lista de Farmácias
            navigate("/ListaDeFarmacias");
          } else {
            alert("Preencha os campos de usuário e senha corretamente!");
          }
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

                <button className="button-entrar" type="submit" onClick={handleEntrar} > <b>Entrar</b></button>
                <br />
            <Link to="/NovoUsuario"  className="link-cadastro">Cadastrar Usuário</Link>
        
        </form>
        </div>
        
    )
    }