import React from "react";
import { connect } from "react-redux/es/exports";
import cancha from "../cancha.svg"

const Titulares = ({titulares, quitarTitular}) => (
    <section>
        <h2>Titulares</h2>
        <div className="cancha">
            {
                titulares.map(j => (
                    <article className="titular" key={j.id}>
                        <div>
                            <img src={j.foto} alt={j.nombre}></img>
                            <button onClick={() => quitarTitular(j)}>X</button>
                        </div>
                        <p>{j.nombre}</p>
                    </article>
                ))
            }
            <img src={cancha} alt="Cancha de futbol" />
        </div>
    </section>
)

const mapStateToProps = state => ({
    titulares: state.titulares
}) 

const mapDispachToProps = dispath => ({
    quitarTitular(jugador){
        dispath({
            type: "QUITAR_TITULAR",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispachToProps)(Titulares)