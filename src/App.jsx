import React,{ useState} from 'react'

//const tiempo = Date('Y,m,d');

export default function Clock() {

    const[col, setColor] = useState('');
    const[fontSi, setFontSi] = useState('');
    const[nombre, setNombre] = useState('');


    function handleColor(e) {
        setColor(e.target.value);
    }
    function handleSize(e) {
        setFontSi(e.target.value);
    }
    function handleName(e) {
        setNombre(e.target.value);

    }
    return (
        <div>
            <select onChange={handleColor} name="" id="">
                <option defaultValue={''} >elije un color</option>
                <option value='blue'>Blue</option>
                <option value='black'>Black</option>
                <option value='orange'>Orange</option>
                <option value='gray'>Gray</option>
                <option value='red'>Red</option>
            </select>
            <select onChange={handleSize} name="" id="">
                <option defaultValue={''} >elije tamano</option>
                <option value='1rem'>1 rem</option>
                <option value='2rem'>2 rem</option>
                <option value='3rem'>3 rem</option>
            </select>
            <input onChange={handleName} type="text" placeholder='coloca tu nombre'/>
        <h2
        style={{color: col, fontSize: fontSi}}
        >{nombre.length <= 30 ? `tu nombre es ${nombre}` : 'el limite es 30' }`</h2>
        <button onClick={function(){ if(!nombre) {alert('primero pon tu nombre')} else{ alert(`tu nombre es ${nombre}`)}}}>Click y te digo tu nombre</button>
        

        </div>
    );
  }