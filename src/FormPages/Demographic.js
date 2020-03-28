import React from "react";

function Demographic(props) {
  var [ageSpans, setAgeSpans] = React.useState([]);

  React.useEffect(() => {
      var ages = [];
      for (var i = 0; i < 100; i += 10) {
        ages.push(`${i} - ${i + 9}`);
      }
      setAgeSpans(ages);
  }, []);

  function setResponse(key, value) {
    window.Responses[key] = value;
  }
  console.log(`here ${window.Responses.sex === "FALSE"}`)
  return (
    <div className="FormPage" key="demographic">
      <div>
        <div className="flex flex-row items-center mt-8">
          <img
            src="https://coronastatus.us/static/images/map.svg"
            alt=""
            className="h-16 w-16"
          />
          <h3 className="text-cvs-red text-xl font-bold m-4">
            {window.i86n["Geography and demography"]}
          </h3>
        </div>

        <label className="text-h4" htmlFor="Age">
          {window.i86n["Your age"]}
        </label>
        <select
          required
          name="age"
          id="Age"
          className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="selected" disabled>
            {window.i86n["Choose your age"]}
          </option>
          {ageSpans.map(ageSpan => {
            return (
              <option
                key={ageSpan}
                value={window.Responses.age === ageSpan ? "selected" : ""}
                onChange={setResponse("age", ageSpan)}
              >
                {ageSpan}
              </option>
            );
          })}
        </select>

        <fieldset>
          <legend>{window.i86n["Biological gender"]}</legend>
          <p>
            <input
              required
              type="radio"
              id="gender-female"
              name="gender"
              value="female"
              defaultChecked={window.Responses.sex === "FALSE"}
              onChange={() => setResponse("sex", "FALSE")}
            />
            <label className="mr-4" htmlFor="gender-female">
              {window.i86n["Female"]}
            </label>

            <input
              required
              type="radio"
              id="gender-male"
              name="gender"
              value="male"
              defaultChecked={window.Responses.sex === "TRUE"}
              onChange={() => setResponse("sex", "TRUE")}
            />
            <label htmlFor="gender-male">{window.i86n["Male"]}</label>
          </p>
        </fieldset>

        <label htmlFor="postal-code">{window.i86n["Zip code"]}</label>
        <input
          className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          type="text"
          pattern={`[0-9]${window.locals.zipLength}`}
          maxLength={window.locals.zipLength}
          name="postal-code"
          id="postal-code"
          placeholder={window.locals.zipPlaceHolder}
          value={window.Responses.postalCode}
          onChange={e => {
            setResponse("postalCode", e.target.value);
          }}
        />

        <br />
        <button className="btn btn-blue m-2 center" onClick={()=>props.nextPage()}>{window.i86n['Next']}</button>
      </div>
    </div>
  );
}

export default Demographic;
