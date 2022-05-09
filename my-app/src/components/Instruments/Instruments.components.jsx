import React from "react";
import './instruments.css';


function Instruments(props) {
    return (
        <>
            {props.products?.map((article) => {
                return (
                    <div className="App" key={article.instrumento}>
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
        </>
    );
}

export default Instruments;