import { useState } from "react";
import React from "react";
import "../customComponentsStyle/Search.css";
import { Button, Chat } from "@morph-data/components";

interface SearchPrompt {
  chatReguest: string;
  saveLastFunc: () => Promise<void>;
  saveAllFunc: () => Promise<void>;
}

const Search: React.FC<SearchPrompt> = ({
  chatReguest,
  saveAllFunc,
  saveLastFunc,
}) => {
  const [inputKeys, setInputKeys] = useState<string | null>(null);
  // const [responseLoad, setResponseLoad] = useState<boolean>(false);

  const inputSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputKeys);
  };

  return (
    <div className="searchPage">
      {/* <div>
        {responseLoad ? null : <h1>Just write the word!</h1>}
        <form onSubmit={inputSubmitHandler}>
          <input
            placeholder="Write..."
            onChange={(e) => setInputKeys(e.target.value)}
          />
        </form>
        {responseLoad ? <ResponseCard /> : <></>}
      </div> */}
      <h1>Just write the word!</h1>
      <div className="chat-block">
        <Chat postData={chatReguest} />
      </div>
      <div className="buttons-block">
        <Button onClick={() => saveLastFunc()}>Save Last One</Button>
        <Button onClick={() => saveAllFunc()}>Save All Data</Button>
      </div>
    </div>
  );
};

export default Search;
