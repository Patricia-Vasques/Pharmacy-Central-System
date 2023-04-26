import "./header.css"
import { Link } from "react-router-dom"

export function Header () {
    return(
        <div className="title-header">
        <h1 className="text-header">Pharmacy Central System</h1>

        <div className="header-links">
            <div>
             <Link className="link-lista-farmacias" to="/ListaDeFarmacias">Lista de farmácia</Link>
             <Link className="link-cadastro-farmacias" to="/CadastrarFarmacia">Cadastrar farmácia</Link>
             <Link className="link-lista-medicamento" to="/ListaDeMedicamentos">Lista de medicamentos</Link>
             <Link className="link-cadastro-medicamento" to="/CadastroMedicamentos">Cadastrar medicamento</Link>
             <Link className="link-login" to="/">Logout</Link>
            </div> 
        </div>

        </div>
    )
}