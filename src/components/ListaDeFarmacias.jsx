import { Header } from "./Header";
import { Link } from "react-router-dom";

export function ListaDeFarmacias(){
    return (
        <div>

            <Header />

            <div className="text-listaFarmacias">
                <h1>Farmácias cadastradas</h1>
            </div>
        
        <table className="table-listaFarmacias">
            <thead>
                <tr>
                    <th>Farmácia</th>
                </tr>
        </thead>
        </table>
    
        <Link to="/CadastrarFarmacia"><a className="link-cadastro-farmacia">Cadastrar Nova Farmácia</a></Link>

        </div>
    )
}

