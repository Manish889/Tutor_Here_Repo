import React from 'react'
import "../SuggestionBox/style.css"

export default function Index() {
    return (
    <div className="container_suggestion">
        <form id="suggestion_box" action="" method="post">
            <p className="text-center">How Can We Improve! </p>
            <fieldset className="center">
                <textarea placeholder="Suggestion" tabindex="5" name="suggestion_text" required></textarea>
            </fieldset>
            <fieldset>
                <button name="submit" type="submit" id="bbox" data-submit="...Sending" value="text to send" className="btn_suggestionbox ">Submit</button>
            </fieldset>
        </form>
    </div>
    )
}
