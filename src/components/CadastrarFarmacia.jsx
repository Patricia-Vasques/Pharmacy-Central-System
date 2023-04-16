import React from "react";
import { useState } from "react";
import { Header } from "./Header";



export function CadastrarFarmacia ({cadastrarNovaFarmacia}) {

    const [razaoSocial, setrazaoSocial] = useState('');
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

    function cadastrarFarmacias(e){
        e.preventDefault();
        console.log("Farmácia cadastrada com sucesso!")
    }
    
    
    function handleCadastrarFarmacia(event) {
        event.preventDefault();

        if (razaoSocial !== ''  && cnpj !== '' && nomeFantasia !== "" && emailFarmacia !== "" && telefoneFarmacia !== "" 
        && celularFarmacia !== "" && cepFarmacia !== "" && enderecoFarmacia !== "" && numeroFarmacia !== "" && bairroFarmacia !== ""
        && cidadeFarmacia !== "" && estadoFarmacia !== "" && complemento == ""){

        CadastrarFarmacia (cadastrarNovaFarmacia) ({ razaoSocial, cnpj, nomeFantasia, emailFarmacia, telefoneFarmacia, celularFarmacia, cepFarmacia,
                enderecoFarmacia, numeroFarmacia, bairroFarmacia, cidadeFarmacia, estadoFarmacia, complemento});
           
            console.log("razao social:", razaoSocial);
            console.log("cnpj:", cnpj);
            console.log("nome fantasia:", nomeFantasia);
            console.log("email farmacia", emailFarmacia);
            console.log("telefone farmacia:", telefoneFarmacia);
            console.log("celular farmacia:", celularFarmacia);
            console.log(" cep farmacia:", cepFarmacia);
            console.log("endereco farmacia", enderecoFarmacia);
            console.log("numero farmacia:", numeroFarmacia);
            console.log("bairro farmacia:", bairroFarmacia);
            console.log("cidade farmacia:", cidadeFarmacia);
            console.log("estado farmacia", estadoFarmacia);
            console.log("complemento", complemento);

        } else{
            alert("Preencha todos os campos!")
      
                setrazaoSocial([]);
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
                
                localStorange.setItem(("razaoSocial", razaoSocial), ("cnpj", cnpj), ("nomeFantasia", nomeFantasia), ("emailFarmacia", emailFarmacia), ("telefoneFarmacia", telefoneFarmacia), ("celularFarmacia", celularFarmacia), ("cepFarmacia",cepFarmacia),
                ("enderecoFarmacia", enderecoFarmacia), ("numeroFarmacia", numeroFarmacia), ("bairroFarmacia", bairroFarmacia), ("cidadeFarmacia", cidadeFarmacia), ("estadoFarmacia", estadoFarmacia), ("complemento", complemento))
            }}

    return(
        <div>
            <Header />

           <form onSubmit={cadastrarFarmacias}>
            <div> 
                <h1>Cadastro de Nova Farmácia</h1>
            </div>

            <div className="form-group">
                <label className="label-razaoSocial" htmlFor="name"><b>Razão Social:</b></label>
                <input type="text"  className="input-razaoSocial" name="razaoSocial" id="razaoSocial" placeholder="Digite a razão social" onChange={(e) => setrazaoSocial(e.target.value)} required/>
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
                <label className="label-telefoneFarmcia" htmlFor="telefoneFarmcia"><b>Telefone:</b></label>
                <input type="tel"  className="input-telefoneFarmcia" name="telefoneFarmcia" id="telefoneFarmcia" placeholder="Digite o telefone" onChange={(e) => setTelefoneFarmacia(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-celularFarmacia" htmlFor="celularFarmcia"><b>Celular:</b></label>
                <input type="tel" className="input-celularFarmcia" name="celularFarmcia" id="celularFarmcia" placeholder="Digite o celular" onChange={(e) => setCelularFarmacia(e.target.value)} required/>
            </div>

            {/*Parte do endereço no formulário*/}

                <div>
                    <h1>Endereço Completo</h1>
                </div>
            
            <div className="form-group">
                <label className="label-cep" htmlFor="cep"><b>CEP:</b></label>
                <input type="text" className="input-cep" name="cep" id="cep" placeholder="Digite o cep" onChange={(e) =>  setCepFarmacia(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-endereçoFarmacia" htmlFor="endereçoFarmacia"><b>Endereço:</b></label>
                <input type="text"  className="input-endereçoFarmacia" name="endereçoFarmacia" id="endereçoFarmacia" placeholder="Digite o endereço" onChange={(e) => setEnderecoFarmacia(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-numeroEndereco" htmlFor="numeroEndereco"><b>Número:</b></label>
                <input type="text"  className="input-numeroEndereco" name="numeroEndereco" id="numeroEndereco" placeholder="Digite o número" onChange={(e) => setNumeroFarmacia(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-bairroFarmacia" htmlFor="bairroFarmacia"><b>Bairro:</b></label>
                <input type="text"  className="input-bairroFarmacia" name="bairroFarmacia" id="bairroFarmacia" placeholder="Digite o bairro" onChange={(e) => setBairroFarmacia(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-cidadeFarmacia" htmlFor="cidadeFarmacia"><b>Cidade:</b></label>
                <input type="text"  className="input-cidadeFarmacia" name="cidadeFarmacia" id="cidadeFarmacia" placeholder="Digite a cidade" onChange={(e) => setCidadeFarmacia(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-estadoFarmacia" htmlFor="estadoFarmacia"><b>Estado:</b></label>
                <input type="text"  className="input-estadoFarmacia" name="estadoFarmacia" id="estadoFarmacia" placeholder="Digite o estado" onChange={(e) => setEstadoFarmacia(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-complementoFarmacia" htmlFor="complementoFarmacia"><b>Complemento:</b></label>
                <input type="text"  className="input-complementoFarmacia" name="complementoFarmacia" id="complementoFarmacia" placeholder="Digite um complemento" onChange={(e) => setComplemento(e.target.value)} />
            </div>

            <button className="button-cadastroFarmacia" type="submit" onClick={handleCadastrarFarmacia}> Cadastrar Farmácia</button>
           </form>
          
        </div>
    )
}