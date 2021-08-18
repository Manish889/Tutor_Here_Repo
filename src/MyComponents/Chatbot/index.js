import React from "react";
import "../Chatbot/chatbot.css";

const index = () => {
  const heartButton = () => {
    console.log("heartpressed");
  };
  const sendButton = () => {
    console.log("Button pressed");
  };
 
  return (
   

        <div className="full-chat-block">
          {/* <!-- Message Container --> */}
          <div className="outer-container">
            <div className="chat-container">
              {/* <!-- Messages --> */}
              <div id="chatbox">
                <h5 id="chat-timestamp"></h5>
                <p id="botStarterMessage" className="botText">
                  <span>Loading...</span>
                </p>
              </div>

              {/* <!-- User input box --> */}
              <div className="chat-bar-input-block">
                <div id="userInput">
                  <input
                    id="textInput"
                    className="input-box"
                    type="text"
                    name="msg"
                    placeholder="Tap 'Enter' to send a message"
                  />
                  <p></p>
                </div>

                <div className="chat-bar-icons">
                  <i id="chat-icon" className="fa" onClick={sendButton}>
                    send
                  </i>
                </div>
              </div>

              <div id="chat-bar-bottom">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      
  );
};

export default index;
