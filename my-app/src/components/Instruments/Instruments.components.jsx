import React from "react";
import './instruments.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';



function Instruments(props) {

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const [modalArt, setModalArt] = useState([]);
    const fun = article => {
        onOpenModal();
        setModalArt(article);
        console.log(article.descripcion)
    }

    const details = (
        <>
            <img
                className="imagesDisplay"
                key={modalArt.instrumento}
                name={modalArt.instrumento}
                alt={modalArt.instrumento}
                src={modalArt.url}
            />

            <button name="buyBtn">Comprar</button>
            <button name="addBtn">Agregar al carrito</button>

            <div id="details">
                <p id="artName">{modalArt.instrumento}</p>
                <p id="artGen">{modalArt.genero}</p>
                <p id="artP">{"$" + modalArt.precio}</p>

                <p>Descripcion</p>
                <p id="descripcion">{modalArt.descripcion}</p>
            </div>



        </>

    );

    return (
        <>
            {props.products.map((article) => {

                return (

                    <div className="App" key={article.instrumento} onClick={() => fun(article)}>
                        <div id="instTable" key={article.instrumento}>
                            <div id="artSquare"
                                className="artTabs"
                                type="button"
                                key={article.instrumento}
                                name={article.instrumento}
                                style={{
                                    width: '305px',
                                    height: '490px',
                                    margin: '2px solid black',
                                }}
                            >
                                <img
                                    className="imagesDisplay"
                                    key={article.instrumento}
                                    name={article.instrumento}
                                    alt={article.instrumento}
                                    src={article.url}
                                    style={{
                                        width: '250px',
                                        height: '280px',
                                        marginBottom: '10px',

                                    }}
                                />

                                <p id="artName">{article.instrumento}</p>
                                <p id="artGen">{article.genero}</p>
                                <p id="artP">{"$" + article.precio}</p>
                            </div>
                        </div>

                    </div>



                );


            })}

            <Modal open={open} onClose={onCloseModal} center>
                {details}
            </Modal>

        </>
    );
}

export default Instruments;