import { useState } from "react"

const TukiChild = () => {
    //Nuestro primer hook es el useState, el cual nos permite crear un estado en nuestro componente.
    // let contador = 0;
    let animalsArray = ['Carpincho','Yacaré','Tatú','Yaguareté','Guazuncho']

    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false)
    const [animals, setAnimals] = useState(['Raccoon'])
    const [info, setInfo] = useState({
        name: 'Fer',
        age: 32,
    })
    
    const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count -1)
    }
    const changeInfo = () => {
        setInfo({
            ...info,
            name: 'Fernando',
            lastName: 'Clemens',
        })
    }
    const changeLoading = () => {
        setLoading(!loading)
    }
// ### consola: un array de 2 elementos, ['Raccoon',['Carpincho','Yacaré','Tatú','Yaguareté','Guazuncho']] ###
/*     const addAnimals = () => {
        setAnimals([...animals, animalsArray])
    } */

// ### consola: un array 6 strings, ['Raccoon','Carpincho','Yacaré','Tatú','Yaguareté','Guazuncho'] ###
    const addAnimals = () => {
        setAnimals(animals.concat(animalsArray))
    }

    console.log("TukiChild")
    console.log("count", count)
    console.log(info);
    console.log(loading);
    console.log(animals);
    
    return (
        <div className="TukiChild">
            <h1>Tuki Child!</h1>
            <h2>Soy hijo de TukiComponents y nieto de App</h2>
            <h3>Contador: {count}</h3>
            <div>
                <button className="button" onClick={increase}>Aumentar count!</button>
                <button className="button" onClick={decrease}>Disminuir count!</button>
            </div>
            <div>
                <button className="button" onClick={changeInfo}>Change Info!</button>
                <button className="button" onClick={changeLoading}>Change Loading!</button>
                <button className="button" onClick={addAnimals}>Add Animals!</button>
            </div>
        </div>
    );
};

export default TukiChild
