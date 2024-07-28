import React from 'react'

export default function About() {
    return (
        <>
            <div className="container mt-3">
                <h5>TextUtils</h5>
                <p>TextUtils is a utility which can be used to manipulate your text in the way you want.</p>
            </div>
            <div class="container mt-5">
                <label for="formGroupExampleInput" class="form-label"><strong>Feedback :</strong></label>
                <input type="text" style={{ width: '50%' }} id="feedback" placeholder="Please give your feedback." />
                <br />
                <input class="btn btn-primary" type="submit" value="Submit" />
            </div>
        </>
    )
}