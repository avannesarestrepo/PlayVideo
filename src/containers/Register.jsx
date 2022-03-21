import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/components/Register.scss';
import Header from '../components/Header';

const Register = (props) =>{
    const navegate = useNavigate();
    const[formulario, setFormulario] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleInput = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.registerRequest(formulario);
        navegate('/');
    }

    return(
        <>
            <Header isRegister/>
            <section className="register">
                <section className="register__container">
                <h2>Regístrate</h2>
                <form className="register__container--form" onSubmit={handleSubmit}>
                    <input 
                        name="name"
                        className="input" 
                        type="text" 
                        placeholder="Nombre"
                        onChange={handleInput}/>
                    <input 
                        name="email"
                        className="input" 
                        type="text" 
                        placeholder="Correo"
                        onChange={handleInput}/>
                    <input 
                        name="password"
                        className="input" 
                        type="password" 
                        placeholder="Contraseña"
                        onChange={handleInput}/>
                    <button className="button">Registrarme</button>
                </form>
                <Link to="/login">Iniciar sesión</Link>
                </section>
            </section>
        </>
    )
}

const mapDispatchToProps = {
    registerRequest,
}

export default connect(null,mapDispatchToProps)(Register);