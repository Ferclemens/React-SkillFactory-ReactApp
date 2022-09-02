// Arriba del componente, van los IMPORTS
// En el medio, declaramos el componente funcional con lo que debe renderizar y la lógica que tenga
// Abajo del componente, van los EXPORTS
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ErrorNotFound from "./components/ErrorNotFound";
import Landing from "./components/Landing";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="*" element={<ErrorNotFound />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;

// export default - Exporta el componente App para usarlo en otro archivo. En ese otro  archivo, se puede importar con el nombre App o le puedo poner un alias (Ponerle otro nombre).

// export - Exporta el componente para usarlo en otro archivo y debo invocarlo con el mismo nombre que en el export y llamarlo entre llaves.
