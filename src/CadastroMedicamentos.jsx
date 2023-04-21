import React from "react";
import { Header } from "./components/Header"
import { useForm } from "react-hook-form"

export function CadastroMedicamentos (){

    return(
        <div>
            < Header/>
            <form ClassName="Form-cadastroMedicamentos">
                
                <div className="form-group">
                    <label className="label-cadastroMedicamento" htmlFor="nome-medicamento">Nome do Medicamento:</label>
                    <input className="input-cadastroMedicamento" type="text" name="nome -medicamento" id="nome-medicamento" placeholder="Nome do medicamento"  onChange={(e) => setNomeMedicamento(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label className="label-cadastroMedicamento" htmlFor="nome-laboratorio">Nome do Laboratório:</label>
                    <input className="input-cadastroMedicamento" type="text" name="nome-laboratorio" id="nome-laboratorio" placeholder="Nome do laboratório"  onChange={(e) => setNomeLaboratorio(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label className="label-cadastroMedicamento" htmlFor="dosagem-medicamento">Dosagem do medicamento:</label>
                    <input className="input-cadastroMedicamento" type="text" name="dosagem-medicamento" id="dosagem-medicamento" placeholder="Dosagem do medicamento"  onChange={(e) => setDosagemMedicamento(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label className="label-cadastroMedicamento" htmlFor="descricao-medicamento">Descrição do medicamento:</label>
                    <textarea className="input-cadastroMedicamento"  name="descricao-medicamento" id="descricao-medicamento" placeholder="Descrição do medicamento"  onChange={(e) => setDescricapMedicamento(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label className="label-cadastroMedicamento" htmlFor="preco-medicamento">Preço: R$</label>
                    <input className="input-cadastroMedicamento" type="number" min="0" name="preco-medicamento" id="preco-medicamento" placeholder="Preço" onChange={(e) => setPrecoMedicamento(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label className="label-cadastroMedicamento" htmlFor="tipo-medicamento">Tipo do medicamento:</label>
                    <select className="input-cadastroMedicamento"  name="tipo-medicamento" id="tipo-medicamento"   onChange={(e) => setTipoMedicamento(e.target.value)} required>
                        <option value="medicamento-controlado">Controlado</option>
                        <option value="medicamento-comum">Comum</option>
                    </select>
                </div>

            </form>
        </div>
    )
}