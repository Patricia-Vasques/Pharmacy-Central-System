import React from "react";
import { Header } from "./Header";


export function CadastrarFarmacia () {

    
   

    return(
        <div>
            <Header />

           <form>
            <div> 
                <h1>Cadastro de Nova Farmácia</h1>
            </div>

            <div className="form-group">
                <label className="label-razaoSocial" htmlFor="name"><b>Razão Social:</b></label>
                <input type="text" className="input-razaoSocial" name="razaoSocial" id="razaoSocial" placeholder="Digite a razão social" onChange={(e) => setNomeCompleto(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-cnpj" htmlFor="cnpj"><b>CNPJ:</b></label>
                <input type="text" className="input-cnpj" name="cnpj" id="cnpj" placeholder="Digite o CNPJ" onChange={(e) => setNomeCompleto(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-nomeFantasia" htmlFor="nomeFantasia"><b>Nome fantasia:</b></label>
                <input type="text" className="input-nomeFantasia" name="nomeFantasia" id="nomeFantasia" placeholder="Digite o Nome Fantasia" onChange={(e) => setNomeCompleto(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-emailFarmacia" htmlFor="emailFarmacia"><b>E-mail:</b></label>
                <input type="email" className="input-emailFarmacia" name="emailFarmacia" id="emailFarmacia" placeholder="Digite o e-mail" onChange={(e) => setNomeCompleto(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-telefoneFarmcia" htmlFor="telefoneFarmcia"><b>Telefone:</b></label>
                <input type="text" className="input-telefoneFarmcia" name="telefoneFarmcia" id="telefoneFarmcia" placeholder="Digite o telefone" onChange={(e) => setNomeCompleto(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-celularFarmcia" htmlFor="celularFarmcia"><b>Celular:</b></label>
                <input type="text" className="input-celularFarmcia" name="celularFarmcia" id="celularFarmcia" placeholder="Digite o celular" onChange={(e) => setNomeCompleto(e.target.value)} required/>
            </div>
            </form>

            <form>

                <div>
                    <h1>Endereço Completo</h1>
                </div>
            
            <div className="form-group">
                <label className="label-cep" htmlFor="cep"><b>CEP:</b></label>
                <input type="text" className="input-cep" name="cep" id="cep" placeholder="Digite o cep" onChange={(e) => setNomeCompleto(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-endereçoFarmacia" htmlFor="endereçoFarmacia"><b>Endereço:</b></label>
                <input type="text" className="input-endereçoFarmacia" name="endereçoFarmacia" id="endereçoFarmacia" placeholder="Digite o endereço" onChange={(e) => setNomeCompleto(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-numeroEndereco" htmlFor="numeroEndereco"><b>Número:</b></label>
                <input type="text" className="input-numeroEndereco" name="numeroEndereco" id="numeroEndereco" placeholder="Digite o número" onChange={(e) => setNomeCompleto(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-bairroFarmacia" htmlFor="bairroFarmacia"><b>Bairro:</b></label>
                <input type="text" className="input-bairroFarmacia" name="bairroFarmacia" id="bairroFarmacia" placeholder="Digite o bairro" onChange={(e) => setNomeCompleto(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-cidadeFarmacia" htmlFor="cidadeFarmacia"><b>Cidade:</b></label>
                <input type="text" className="input-cidadeFarmacia" name="cidadeFarmacia" id="cidadeFarmacia" placeholder="Digite a cidade" onChange={(e) => setNomeCompleto(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-estadoFarmacia" htmlFor="estadoFarmacia"><b>Estado:</b></label>
                <input type="text" className="input-estadoFarmacia" name="estadoFarmacia" id="estadoFarmacia" placeholder="Digite o estado" onChange={(e) => setNomeCompleto(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label className="label-complementoFarmacia" htmlFor="complementoFarmacia"><b>Complemento:</b></label>
                <input type="text" className="input-complementoFarmacia" name="complementoFarmacia" id="complementoFarmacia" placeholder="Digite um complemento" onChange={(e) => setNomeCompleto(e.target.value)} required={"false"}/>
            </div>

            <button className="button-cadastroFarmacia" type="submit">Cadastrar</button>
           </form>
        </div>
    )
}