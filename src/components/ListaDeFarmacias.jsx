import { Header } from "./Header";

export function ListaDeFarmacias(){
    return (
        <div>

            <Header />

            <div className="text-listaFarmacias">
                <h1>Farmácias cadastradas</h1>
            </div>
        <div>
        <table className="table-listaFarmacias">
            <thead>
                <tr>
                    <th>Farmácia</th>
                </tr>
        </thead>
        </table>
        </div>

        </div>
    )
}

