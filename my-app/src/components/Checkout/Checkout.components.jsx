import React from "react";
import { useState } from 'react';
import Swal from 'sweetalert2';
import './Checkout.css'


function Checkout(props) {

    const [direccion, setDireccion] = useState({
        nombre: "",
        calle: "",
        estado: "",
        zipcode: "",
        telefono: ""
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(props.products[0])
    }

    return (
        <>
            <nav id="topNav">
                <h1>Proceder al pago</h1>
            </nav>

            <form onSubmit={handleSubmit} id="direccionForm">
                <h1>Datos de envio</h1>

                <label >
                    Nombre completo (nombre y apellidos)
                </label>
                <input
                    type="text"
                    placeholder="Nombre completo"
                    value={direccion.nombre}
                    onChange={(e) => setDireccion({ ...direccion, nombre: e.target.value })}
                >

                </input>

                <label >
                    Ingrese la calle y el número
                </label>
                <input
                    type="text"
                    placeholder="Calle número"
                    value={direccion.calle}
                    onChange={(e) => setDireccion({ ...direccion, calle: e.target.value })}
                >

                </input>

                <label >
                    Ingrese el estado
                </label>
                <input
                    type="text"
                    placeholder="Estado"
                    value={direccion.estado}
                    onChange={(e) => setDireccion({ ...direccion, estado: e.target.value })}
                >

                </input>

                <label >
                    Ingrese el código postal
                </label>
                <input
                    type="text"
                    placeholder="Código postal"
                    value={direccion.zipcode}
                    onChange={(e) => setDireccion({ ...direccion, zipcode: e.target.value })}
                >

                </input>

                <label >
                    Ingrese su numero teléfonico
                </label>
                <input
                    type="text"
                    placeholder="Numero de teléfono"
                    value={direccion.telefono}
                    onChange={(e) => setDireccion({ ...direccion, telefono: e.target.value })}
                >

                </input>
                <button
                    id="saveBtn"
                    type="submit"
                    onClick={() => Swal.fire("Dirección guardada", "Se guardó correctamente", "success")}
                >
                    Guardar dirección
                </button>
            </form>

            <div id="pagoyart">
                <div id="pago">
                    <h1>Método de pago</h1>
                    <h3>Paga en efectivo en Oxxo con el número de orden: 1234567890</h3>

                </div>

                <div id="articulo">
                    <h1>Artículo</h1>
                    <h2>{props.products[0].instrumento}</h2>
                    <img
                        key="0"
                        id="imgArticulo"
                        alt={props.products[0].instrumento}
                        src={props.products[0].url}

                    ></img>
                </div>

                <button
                    onClick={() => Swal.fire("Pedido realizado correctamente", "Has tu pago dentro de las próximas 48 horas", "success")}
                    id="terminarBtn"
                >Terminar pedido</button>
            </div>





        </>
    );
}

export default Checkout;