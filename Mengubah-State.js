import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
class Header extends React.Component {
        constructor() {
            super();
            // membuat objek state
            this.state = {
                title: "Belajar Reactjs",
                subTitle: "Panduan step-by-step Reactjs untuk pemula"
            };
        }
        // fungsi untuk mengubah state
        changeTitle = function() {
            this.setState({
                title: "Aku Pasti Bisa Menjadi Programmer"
            });
        };
        // Nilai state berubah, akan dilakukan proses 
        render() {
            return (
                <div >
                    <h1> { this.state.title } </h1>
                    <h2> { this.state.subTitle } </h2>
                    <button onClick = { this.changeTitle }>Ubah Judul </button>
                </div>
            );
        }
    }
    // render komponen ke RealDOM
ReactDOM.render( <Header/> , document.getElementById("root"));