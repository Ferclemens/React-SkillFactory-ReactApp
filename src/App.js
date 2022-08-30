// Arriba del componente, van los IMPORTS
// En el medio, declaramos el componente funcional con lo que debe renderizar y la lógica que tenga
// Abajo del componente, van los EXPORTS
import ProductList from './components/ProductList'
import NavBar from "./components/NavBar";

const App = () => {
    // Logica del componente
    //console.log("App");

    // Renderizar el componente
    return (
        <div className="App">
            <NavBar nameEcommerce={'Carrefourcito'}/>
            <ProductList />
        </div>
    );
};

export default App;

// export default - Exporta el componente App para usarlo en otro archivo. En ese otro  archivo, se puede importar con el nombre App o le puedo poner un alias (Ponerle otro nombre).

// export - Exporta el componente para usarlo en otro archivo y debo invocarlo con el mismo nombre que en el export y llamarlo entre llaves.
