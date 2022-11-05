import React, { useState } from "react";

export default function FormCompnent(props) {
    function upperCase() {
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", 'success')

    }
    function lowerCase() {
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", 'success')

    }

    function grabText(event) {
        setText(event.target.value);
    }
    function readingTime() {
        if (text != 0) {
            const readTime = (0.008 * text.split(" ").filter((element) => { return element.length != 0 }).length);
            if (readTime >= 1) {
                const result = Math.round(readTime * 100) / 100 + " minute";
                // console.log(result);
                return result;
            }
            else {
                const result = Math.round(readTime * 100) / 100 + " seconds";
                return result;
            }
        }
        else {
            return 0;
        }
    }
    function resetText() {
        let newText = '';
        setText(newText);
        props.showAlert("Reset Successful", 'success')
    }
    function lineCount() {
        let result = text.split(/\r\n|\r|\n/).length;
        return result;
    }


    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3><label> Enter Text</label></h3>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                        value={text}
                        onChange={grabText}
                        style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={upperCase}>
                    Upper case
                </button>
                <button className="btn btn-primary mx-1 my-1" onClick={lowerCase}>
                    Lower Case
                </button>
                <button className="btn btn-danger mx-1 my-1" onClick={resetText}>
                    Reset
                </button>
            </div>

            <div className="container" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: 'white', color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h3><label>Summary</label></h3>

                <div><p>{text.split(" ").filter((element) => { return element.length != 0 }).length} words & {text.length} letters</p></div>
                <div><p>{readingTime()} read time</p></div>
                <div>Preview</div>
                <div className="container">
                    <div style={{ border: '1px solid rgba(0, 0, 0, 0.5)' }}>{text}</div>
                </div>
                <div>Line count is: {lineCount()}</div>

            </div>

        </>

    );
}
