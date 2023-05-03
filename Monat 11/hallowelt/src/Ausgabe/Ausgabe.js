function Ausgabe(props) {
    //die Props abfragen
    //haben beide Werte?
    //dann liefern wir den persönlichen Gruß zurück
    if (props.wen && props.wer) {
        return (
            <div>
                <h1>Hallo {props.wen}! Es grüßt Dich {props.wer}.</h1>
            </div>
        );
    }
    //sonst den unpersönlichen
    else {
        return (
            <div>
                <h1>Hallo Welt!</h1>
            </div>
        );
    }
}
export default Ausgabe;