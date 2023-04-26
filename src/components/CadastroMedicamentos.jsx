import React from "react";
import PropTypes from "prop-types";
import{ useState } from "react"
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";
import "./cadastroMedicamentos.css"

export const CadastroMedicamentos = (props) => {
    const [nomeMedicamento, setNomeMedicamento] =useState('');
    const [laboratorioMedicamento, setLaboratorioMedicamento] = useState('');
    const [dosagemMedicamento, setDosagemMedicamento] = useState('');
    const [descricaoMedicamento, setDescricaoMedicamento] = useState('');
    const [precoMedicamento, setPrecoMedicamento] = useState('');
    const [tipoMedicamento, setTipoMedicamento] = useState('');
    const navigate = useNavigate();

    const medicamento= {
        nomeMedicamento: nomeMedicamento,
        laboratorioMedicamento: laboratorioMedicamento,
        dosagemMedicamento: dosagemMedicamento,
        descricaoMedicamento: descricaoMedicamento,
        precoMedicamento: precoMedicamento,
        tipoMedicamento: tipoMedicamento,
        
    }

    function handleCadastrarMedicamentos (event) {
        event.preventDefault();

        
        alert("Medicamento cadastrado com sucesso!");

        const  listaMedicamentos = JSON.parse(localStorage.getItem("listaMedicamentos")) || [];

        if(!Array.isArray(listaMedicamentos)){
            listaMedicamentos=[];
        }
        listaMedicamentos.push(medicamento)

        localStorage.setItem("listaMedicamentos", JSON.stringify(listaMedicamentos))
        
        

        //resetar os valores 
        setNomeMedicamento("");
        setLaboratorioMedicamento("");
        setDosagemMedicamento("");
        setDescricaoMedicamento("");
        setPrecoMedicamento("");
        setTipoMedicamento("");

        navigate("/ListaDeMedicamentos");
    }

    return (
        <div>
            < Header/>

            <h2 className="text-cadastro-medicamentos">Cadastro de Medicamentos</h2>
            
            <form className="form-cadastro-medicamentos" onSubmit={handleCadastrarMedicamentos}>

                
                
                <div className="form-group">
                    <label className="label-cadastroMedicamento" htmlFor="nome-medicamento">Nome do Medicamento:</label>
                    <input className="input-cadastroMedicamento" type="text" name="nome -medicamento" id="nome-medicamento" placeholder="Nome do medicamento"  onChange={(e) => setNomeMedicamento(e.target.value)} />
                </div>

                <div className="form-group">
                    <label className="label-cadastroMedicamento" htmlFor="nome-laboratorio">Nome do Laboratório:</label>
                    <input className="input-cadastroMedicamento" type="text" name="nome-laboratorio" id="nome-laboratorio" placeholder="Nome do laboratório"   onChange={(e) => setNomeLaboratorio(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label className="label-cadastroMedicamento" htmlFor="dosagem-medicamento">Dosagem do medicamento:</label>
                    <input className="input-cadastroMedicamento" type="text" name="dosagem-medicamento" id="dosagem-medicamento" placeholder="Dosagem do medicamento"  onChange={(e) => setDosagemMedicamento(e.target.value)} />
                </div>

                <div className="form-group">
                    <label className="label-cadastroMedicamento" htmlFor="descricao-medicamento">Descrição do medicamento:</label>
                    <textarea className="input-cadastroMedicamento"  name="descricao-medicamento" id="descricao-medicamento" placeholder="Descrição do medicamento"  onChange={(e) => setDescricaoMedicamento(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label className="label-cadastroMedicamento" htmlFor="preco-medicamento">Preço: R$</label>
                    <input className="input-cadastroMedicamento" type="text" min="0" name="preco-medicamento" id="preco-medicamento" placeholder="Preço" onChange={(e) => setPrecoMedicamento(e.target.value)} />
                </div>

                <div className="form-group">
                    <label className="label-cadastroMedicamento" htmlFor="tipo-medicamento">Tipo do medicamento:</label>
                    <select className="input-cadastroMedicamento"  name="tipo-medicamento" id="tipo-medicamento"   onChange={(e) => setTipoMedicamento(e.target.value)} required>
                        <option value="medicamento-controlado">Controlado</option>
                        <option value="medicamento-comum">Comum</option>
                    </select>
                    <div>
                    <button className="button-cadastro-medicamento"> Cadastrar </button>
                    </div>
                </div>

            </form>
        </div>
    )}
    

    CadastroMedicamentos.propTypes = {
        quandoCadastrar: PropTypes.func.isRequired
    }
