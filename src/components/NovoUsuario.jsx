import React from "react";
import { Header } from "./Header";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./novoUsuario.css"

export function NovoUsuario ({cadastrarUsuario}) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
 

    function handleCadastrarUsuario() {{

        if (nome !== ''  && senha !== '' & senha >= 8 && senha /[0-9] [A-Za-z] !== ""){
            console.log("nome:", nome);
            console.log("email:", email);
            console.log("usuario:", usuario);
            console.log("senha.:", senha);
        } else{
            alert("Preencha todos os campos!")
        }
            cadastrarUsuario({ nome, email, senha });
            setNome([]);
            setEmail([]);
            setSenha([]);
        }

    }


    return(
        < div>
        <Header />

        <form className="form-novoUsuario" >

        <div className="text-novo-usuario">
            <h1>Cadastro Novo Usuário</h1>
        </div>

        <div className="form-group">
        <label className="label-novoUsuario-name" htmlFor="name"><b>Nome Completo:</b></label>
        <div className="form-novoUsuario-name">
            <input type="text" className="input-novoUsuario-name" name="nome" id="nome" placeholder="Digite seu nome completo" onChange={(e) => setNomeCompleto(e.target.value)} required/>
        </div>
        </div>

        <div className="form-group">
        <label className="label-novoUsuario-email" htmlFor="email"><b>E-mail:</b></label>
        <div className="form-novoUsuario-email">
            <input type="email" className="input-novoUsuario-email" name="email" id="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        </div>


        <div className="form-group">
        <label className="label-novoUsuario-senha" htmlFor="senha"><b>Senha:</b></label>
        <div className="form-novoUsuario-senha">
            <input type="password" className="input-novoUsuario-senha" name="senha" id="senha"  placeholder="Digite uma senha" onChange={(e) => setSenha(e.target.value)} required="Senha deve conter 8 caracteres entre números e letras!"/>
        </div>
        </div>

        <button className="Button-cadastro-novoUsuario" type="submit" onClick={handleCadastrarUsuario}> <Link to="./Login"><b>Castrar Usuário</b></Link></button>
        

        </form>

        </div>
    )
}

//ref='({minLength: 8, pattern:"/^[0-9] [A-Za-z]" }}'