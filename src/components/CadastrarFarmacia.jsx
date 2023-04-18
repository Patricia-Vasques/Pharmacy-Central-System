import React from "react";
import { useState } from "react";
import { Header } from "./Header";
import "./cadastrarFarmacia.css";


export function CadastrarFarmacia ({cadastrarNovaFarmacia}) {
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

    //Buscar o Cep pelo site dos correios e preencher automatico os campos//

    const buscarCep = (e) => {
        try{
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
                setEndereco(dados.logradouro);
                setBairro(dados.bairro);
                setCidade(dados.localidade)
                setEstado(dados.uf)
          
    });
}} catch (error){
    console.log("Ops! Ocorreu um erro!", error);
}};

//mensagem quando enviar o formulário
    function cadastrarFarmacias(event){
        event.preventDefault();
        console.log("Farmácia cadastrada com sucesso!")
    }
    
    //função para quando acionar o botão cadastrar nova farmácia só vá para frente se tiver preenchido os campos obrigatórios
    //
    function handleCadastrarFarmacia(event) {
        event.preventDefault();
        // campos que devem ser preenchidosobrigatoriamente
        if (razaoSocial !== ''  && cnpj !== '' && nomeFantasia !== "" && emailFarmacia !== "" && telefoneFarmacia !== "" 
        && celularFarmacia !== "" && cepFarmacia !== "" && enderecoFarmacia !== "" && numeroFarmacia !== "" && bairroFarmacia !== ""
        && cidadeFarmacia !== "" && estadoFarmacia !== "" && complemento == ""){

        cadastrarNovaFarmacia({ razaoSocial, cnpj, nomeFantasia, emailFarmacia, telefoneFarmacia, celularFarmacia, cepFarmacia,
                enderecoFarmacia, numeroFarmacia, bairroFarmacia, cidadeFarmacia, estadoFarmacia, complemento});

                localStorange.setItem("razaoSocial", razaoSocial),     
                localStorange.setItem("cnpj", cnpj),
                localStorange.setItem("nomeFantasia", nomeFantasia),
                localStorange.setItem("emailFarmacia", emailFarmacia),
                localStorange.setItem("telefoneFarmacia", telefoneFarmacia),
                localStorange.setItem("celularFarmacia", celularFarmacia),
                localStorange.setItem("cepFarmacia",cepFarmacia),
                localStorange.setItem("enderecoFarmacia", enderecoFarmacia),
                localStorange.setItem("numeroFarmacia", numeroFarmacia),
                localStorange.setItem("bairroFarmacia", bairroFarmacia),
                localStorange.setItem("cidadeFarmacia", cidadeFarmacia),
                localStorange.setItem("estadoFarmacia", estadoFarmacia),
                localStorange.setItem("complemento", complemento),

            console.log("razao social:", razaoSocial);
            console.log("cnpj:", cnpj);
            console.log("nome fantasia:", nomeFantasia);
            console.log("email farmacia", emailFarmacia);
            console.log("telefone farmacia:", telefoneFarmacia);
            console.log("celular farmacia:", celularFarmacia);
            console.log("cep farmacia:", cepFarmacia);
            console.log("endereco farmacia", enderecoFarmacia);
            console.log("numero farmacia:", numeroFarmacia);
            console.log("bairro farmacia:", bairroFarmacia);
            console.log("cidade farmacia:", cidadeFarmacia);
            console.log("estado farmacia", estadoFarmacia);
            console.log("complemento", complemento);


        }else{
            alert("Preencha todos os campos!")

                setRazaoSocial([]);
                setCnpj([]);
                setNomeFantasia([]);
                setEmailFarmacia([]);
                setTelefoneFarmacia([]);
                setCelularFarmacia([]);
                setCepFarmacia([]);
                setEnderecoFarmacia([]);
                setNumeroFarmacia([]);
                setBairroFarmacia([]);
                setCidadeFarmacia([]);
                setEstadoFarmacia([]);
                setComplemento([]);
            }}

    return(
        <div>
            <Header />

        <form className="form-cadastroFarmacia" onSubmit={cadastrarFarmacias}>
            <div className="text-cadastroNovaFarmacia"> 
                <h1>Cadastro de Nova Farmácia</h1>
            </div>

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

                <div className="text-enderecoCompleto">
                    <h1>Endereço Completo</h1>
                </div>
            
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

            <button className="button-cadastroFarmacia" type="submit" onClick={handleCadastrarFarmacia}><b> Cadastrar Farmácia</b></button>
            </form>

        </div>
    )
}