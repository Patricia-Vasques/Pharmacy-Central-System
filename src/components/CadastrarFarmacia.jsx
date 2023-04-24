import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";
import "./cadastrarFarmacia.css";

export function CadastrarFarmacia (props){
    const [razaoSocial, setRazaoSocial] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [emailFarmacia, setEmailFarmacia] = useState('');
    const [telefoneFarmacia, setTelefoneFarmacia] = useState('');
    const [celularFarmacia, setCelularFarmacia] = useState('');
    const [cepFarmacia, setCepFarmacia] = useState('');
    const [enderecoFarmacia, setEnderecoFarmacia] = useState('');
    const [numeroFarmacia, setNumeroFarmacia] = useState('');
    const [bairroFarmacia, setBairroFarmacia] = useState('');
    const [cidadeFarmacia, setCidadeFarmacia] = useState('');
    const [estadoFarmacia, setEstadoFarmacia] = useState('');
    const [complemento, setComplemento] = useState('');
    const navigate = useNavigate();

    
    const farmacia= {
        razaoSocial: razaoSocial,
        cnpj: cnpj,
        nomeFantasia: nomeFantasia,
        emailFarmacia: emailFarmacia,
        telefoneFarmacia: telefoneFarmacia,
        celularFarmacia: celularFarmacia,
        cepFarmacia: cepFarmacia,
        enderecoFarmacia: enderecoFarmacia,
        numeroFarmacia: numeroFarmacia,
        bairroFarmacia: bairroFarmacia,
        cidadeFarmacia: cidadeFarmacia,
        estadoFarmacia: estadoFarmacia,
        complemento: complemento,
    }

    //Buscar o Cep pelo site dos correios e preencher automatico os campos//

    const buscarCep = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        console.log (cep);
        setCepFarmacia(cep);
        if(cep.length ===8){
        fetch(`https://viacep.com.br/ws/${cep}/json/`)

        .then((response) => response.json())
        .then((dados) => {
            console.log(dados);
                setEnderecoFarmacia(dados.logradouro);
                setBairroFarmacia(dados.bairro);
                setCidadeFarmacia(dados.localidade);
                setEstadoFarmacia(dados.uf);

    })
.catch ((error) => {
    console.log("Ops! Ocorreu um erro!", error);
})}}

   
    //função para quando acionar o botão cadastrar nova farmácia só vá para frente se tiver preenchido os campos obrigatórios

    function handleCadastrarFarmacia(event) {
        event.preventDefault();

        if (razaoSocial !== ""  && cnpj !== "" && nomeFantasia !== "" && emailFarmacia !== "" && telefoneFarmacia !== "" 
        && celularFarmacia !== "" && cepFarmacia !== "" && enderecoFarmacia !== "" && numeroFarmacia !== "" && bairroFarmacia !== ""
        && cidadeFarmacia !== "" && estadoFarmacia !== "" && complemento == ""){

    

        alert("Farmácia cadastrada com sucesso!")
        navigate("/ListaDeFarmacia");

        

        var listaFarmacias = JSON.parse(localStorage.getItem("listaFarmacias")) || [];

        listaFarmacias.push(farmacia)
 
        localStorage.setItem("listaFarmacias", JSON.stringify(listaFarmacias))

       

        // campos que devem ser preenchidos obrigatoriamente
        

            setRazaoSocial('');
            setCnpj('');
            setNomeFantasia('');
            setEmailFarmacia('');
            setTelefoneFarmacia('');
            setCelularFarmacia('');
            setCepFarmacia('');
            setEnderecoFarmacia('');
            setNumeroFarmacia('');
            setBairroFarmacia('');
            setCidadeFarmacia('');
            setEstadoFarmacia('');
            
        

        }else{
            alert("Preencha todos os campos!")

            }}

    return(
        <div>
            <Header />
            <div className="text-cadastroNovaFarmacia"> 

            <h1>Cadastro de Nova Farmácia</h1>
            </div>

        <form className="form-cadastroFarmacia" onSubmit={handleCadastrarFarmacia}>
        

            <div className="form-group">
                <label className="label-razaoSocial" htmlFor="name"><b>Razão Social:</b></label>
                <input type="text"  className="input-razaoSocial" name="razaoSocial" id="razaoSocial" placeholder="Digite a razão social" onChange={(e) => setRazaoSocial(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-cnpj" htmlFor="cnpj"><b>CNPJ:</b></label>
                <input type="text"  className="input-cnpj" name="cnpj" id="cnpj" placeholder="Digite o CNPJ" onChange={(e) => setCnpj(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-nomeFantasia" htmlFor="nomeFantasia"><b>Nome fantasia:</b></label>
                <input type="text"  className="input-nomeFantasia" name="nomeFantasia" id="nomeFantasia" placeholder="Digite o Nome Fantasia" onChange={(e) => setNomeFantasia(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-emailFarmacia" htmlFor="emailFarmacia"><b>E-mail:</b></label>
                <input type="email" className="input-emailFarmacia" name="emailFarmacia" id="emailFarmacia" placeholder="Digite o e-mail" onChange={(e) => setEmailFarmacia(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-telefoneFarmacia" htmlFor="telefoneFarmacia"><b>Telefone:</b></label>
                <input type="tel"  className="input-telefoneFarmacia" name="telefoneFarmacia" id="telefoneFarmacia" placeholder="Digite o telefone" onChange={(e) => setTelefoneFarmacia(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-celularFarmacia" htmlFor="celularFarmcia"><b>Celular:</b></label>
                <input type="tel" className="input-celularFarmacia" name="celularFarmacia" id="celularFarmacia" placeholder="Digite o celular" onChange={(e) => setCelularFarmacia(e.target.value)} required/>
            </div>
           
            <hr />
            {/*Parte do endereço no formulário*/}
            
            <div className="form-group">
                <label className="label-cep" htmlFor="cep" ><b>CEP:</b></label>
                <input type="text" value={cepFarmacia} className="input-cep" name="cepFarmacia" id="cepFarmacia" placeholder="Digite o cep"onBlur={buscarCep} onChange={(e) =>  setCepFarmacia(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-endereçoFarmacia" htmlFor="endereçoFarmacia"><b>Endereço:</b></label>
                <input type="text" value={enderecoFarmacia } className="input-endereçoFarmacia" name="endereçoFarmacia" id="enderecoFarmacia" placeholder="Digite o endereço" onChange={(e) => setEnderecoFarmacia(e.target.value )} required/>
            </div>

            <div className="form-group">
                <label className="label-numeroEndereco" htmlFor="numeroEndereco"><b>Número:</b></label>
                <input type="text"  className="input-numeroEndereco" name="numeroEndereco" id="numeroEndereco" placeholder="Digite o número" onChange={(e) => setNumeroFarmacia(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-bairroFarmacia" htmlFor="bairroFarmacia"><b>Bairro:</b></label>
                <input type="text" value={bairroFarmacia } className="input-bairroFarmacia" name="bairroFarmacia" id="bairroFarmacia" placeholder="Digite o bairro" onChange={(e) => setBairroFarmacia(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-cidadeFarmacia" htmlFor="cidadeFarmacia"><b>Cidade:</b></label>
                <input type="text" value={cidadeFarmacia } className="input-cidadeFarmacia" name="cidadeFarmacia" id="cidadeFarmacia" placeholder="Digite a cidade" onChange={(e) => setCidadeFarmacia(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-estadoFarmacia" htmlFor="estadoFarmacia"><b>Estado:</b></label>
                <input type="text" value={estadoFarmacia } className="input-estadoFarmacia" name="estadoFarmacia" id="estadoFarmacia" placeholder="Digite o estado" onChange={(e) => setEstadoFarmacia(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-complementoFarmacia" htmlFor="complementoFarmacia"><b>Complemento:</b></label>
                <input type="text"  className="input-complementoFarmacia" name="complementoFarmacia" id="complementoFarmacia" placeholder="Digite um complemento" onChange={(e) => setComplemento(e.target.value)} />
            </div>
            <div >
            <button className="button-cadastroFarmacia" type="submit" onClick={handleCadastrarFarmacia}><b> Cadastrar Farmácia</b></button>
            </div>
            </form>
        </div>
    )
}

CadastrarFarmacia.propsType = {
    quandoCadastrarFarmacia: PropTypes.func.isRequired
}