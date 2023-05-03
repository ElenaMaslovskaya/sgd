import React from "react";
//die Komponente für die Ausgabe importieren
import Ausgabe from "../Ausgabe/Ausgabe";

class Eingabe extends React.Component {
    //der Konstruktor
    constructor(props) {
        //den Konstruktor der übergeordneten Klasse aufrufen
        super(props);
        //den State setzen
        //er besteht aus zwei Elementen
        this.state = {
            wer: '',
            wen: ''
        };
        //die Methode an das Ereignis binden
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    //die Methode für die Ereignisbehandlung
    //bei Veränderungen wird der State über setState() angepasst
    handleChange(event) {
        //das Element abhängig vom Namen setzen
        this.setState({ [event.target.name]: event.target.value });
    }

    //für das Anklicken der Schaltfläche
    handleClick(event) {
        //die angepassten Werte setzen
        this.setState({
            wer: this.state.wer.charAt(0).toUpperCase() +
                this.state.wer.slice(1)
        });
        this.setState({
            wen: this.state.wen.charAt(0).toUpperCase() +
                this.state.wen.slice(1)
        });
        event.preventDefault();
    }

    //die Methode render()
    render() {
        return (
            <div>
                <Ausgabe wen={this.state.wen} wer={this.state.wer} />
                <form>
                    <label>
                        Wer?
                        <input
                            type="text"
                            name="wer"
                            value={this.state.wer}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        grüßt wen?
                        <input
                            type="text"
                            name="wen"
                            value={this.state.wen}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button onClick={this.handleClick}>Anpassen</button> 
                </form>
            </div>
        )
    }
}


export default Eingabe;