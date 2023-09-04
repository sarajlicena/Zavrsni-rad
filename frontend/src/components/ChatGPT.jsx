import axios from "axios";
import React, { useState } from "react";

const ChatGPT = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/mydata", {
        prompt,
      });
      console.log(res.data);
      setResponse(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrompt = (e) => setPrompt(e.target.value);
  return (
    <React.Fragment>
      <div className="container container p-1" style={{
        width: 200}}>
        <div>Postavi pitanje</div>
        <form className="form" action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              style={{
                width:400
              }}
              type="text"
              className="shadow-sm"
              placeholder="Enter text"
              value={prompt}
              onChange={handlePrompt}
            />
          </div>
              </form>
              <div className="bg-darkGreen mt-2 p-1 border-5">
                  <p className="">{response ? response: ""}</p>
              </div>
      </div>
    </React.Fragment>
  );
}
export default ChatGPT;