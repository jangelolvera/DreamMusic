import React from "react";
import './instruments.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';
import Courses from "../Courses/Courses.components";
import { useNavigate } from "react-router-dom";

import {
    BrowserRouter as
        Router,
    Route,
    Routes,
    Link,
} from "react-router-dom";


function Instruments(props) {

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const [modalArt, setModalArt] = useState([]);
    const [query, setQuery] = useState("");

    const fun = article => {
        onOpenModal();
        setModalArt(article);
        console.log(article.id)
    }

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `checkout`; 
      navigate(path);
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

            <button id="buyBtn" onClick={routeChange}>
                Comprar
            </button>
            <button id="addBtn">Agregar al carrito</button>

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
        <div id="general">

            <nav id="topBar">

                <input id="inputQuery" placeholder="¿Buscas algún instrumento?" onChange={event => setQuery(event.target.value)} />
                <Link to='/cursos' id="irCursos">Ver cursos</Link>
            </nav>

            <div id="grid">
                {
                    props.products.filter(article => {
                        if (query === "") {
                            //if query is empty
                            return article;
                        } else if (article.instrumento.toLowerCase().includes(query.toLowerCase())) {
                            //returns filtered array
                            return article;
                        }
                    }).map((article) => {

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
            </div>

            <Modal open={open} onClose={onCloseModal} center>
                {details}
            </Modal>

        </div>
    );
}

export default Instruments;