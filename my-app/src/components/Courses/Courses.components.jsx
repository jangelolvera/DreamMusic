import React from "react";
import './courses.css';
import { useState } from 'react';
import cursos from '../Courses/data/cursos'

function Courses() {

    const [query, setQuery] = useState("");


    return (

        cursos.map((curso) => {
            return (

                <div id="courseInGrid" key={curso.id}>
                    <div id="courseSquare"
                        className="coursesDiv"
                        type="button"
                        key={curso.id}
                        name={curso.name}
                        style={{
                            width: '305px',
                            height: '490px',
                            margin: '2px solid black',
                        }}
                    >
                        <a href={curso.url}>
                            <img
                                className="courseImages"
                                key={curso.id}
                                name={curso.name}
                                alt={curso.name}
                                src={curso.image_url}
                                style={{
                                    width: '250px',
                                    height: '280px',
                                    marginBottom: '10px',

                                }}
                            />
                        </a>

                        <p id="cursoName">{curso.name}</p>
                        <p id="cursoInstrumento">{curso.instrumento}</p>


                    </div>
                </div>
            );
        })

    );
}

export default Courses;
