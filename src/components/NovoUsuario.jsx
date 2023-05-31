import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { HeaderInicial } from "./HeaderInicial";
import "./novoUsuario.css"

export function NovoUsuario () {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();
 

    function handleCadastrarUsuario() {{

        if (email.length >= 8 && senha.length >= 8) {
            console.log("email:", email);
            console.log("senha:", senha);
            alert("Cadastro feito com sucesso!");

            navigate("/");
        } else{
            alert("Preencha todos os campos corretamente! A senha deve conter no mínimo 8 dígitos entre letras e números.")
        }
        }

    }

    return(
        < div>
        <HeaderInicial />

        <div className="text-novo-usuario">
            <h1>Cadastro Novo Usuário</h1>
        </div>

        <form className="form-novoUsuario" >
    
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

        
        
        <button className="Button-cadastro-novoUsuario" type="submit" onClick={handleCadastrarUsuario}>Cadastrar</button>
        

        </form>

        </div>
    )
}
