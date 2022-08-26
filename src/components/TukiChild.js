import { useState } from "react"
import Contador from "./Contador";

const TukiChild = () => {
    //Nuestro primer hook es el useState, el cual nos permite crear un estado en nuestro componente.
    // let contador = 0;
    let animalsArray = ['Carpincho','Yacaré','Tatú','Yaguareté','Guazuncho']

    const [loading, setLoading] = useState(false)
    const [animals, setAnimals] = useState(['Raccoon'])
    const [info, setInfo] = useState({
        name: 'Fer',
        age: 32,
    })

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

// ### consola: un array de 6 elementos, ['Raccoon','Carpincho','Yacaré','Tatú','Yaguareté','Guazuncho'] ###
    const addAnimals = () => {
        //setAnimals(animals.concat(animalsArray))
        setAnimals([...animals,...animalsArray])
    }

    // console.log("TukiChild")
    // console.log("count", count)
    // console.log(info);
    // console.log(loading);
    // console.log(animals);
    
    return (
        <div className="TukiChild">
            <h1>Tuki Child!</h1>
            <h2>Soy hijo de TukiComponents y nieto de App</h2>
            <Contador />
            <div>
                <button className="button" onClick={changeInfo}>Change Info!</button>
                <button className="button" onClick={changeLoading}>Change Loading!</button>
                <button className="button" onClick={addAnimals}>Add Animals!</button>
            </div>
        </div>
    );
};

export default TukiChild
