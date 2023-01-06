import React, {useState} from "react";

const Searchbar = () => {
  const [search, setSearch] = useState("")
  const onChange = (evt) => {
    console.log(evt.target.value);
    search = evt.target.value
  };
  return (
    <div>
      <div>
        <input placeholder="Search Pokemon" onChange={onChange}></input>
      </div>
      <div>{search}</div>
    </div>
  );
};

export default Searchbar;
