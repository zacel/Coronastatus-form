import React from "react";

function Submit(props) {
  return (
    <div className="FormPage">
      <h3 className="text-cvs-red text-xl font-bold m-4 ml-0 mt-8 mb-0">
        {window.i86n["How will my data be used?"]}
      </h3>

      <p className="mt-0 mb-4">
        {
          window.i86n[
            "Your health information is stored anonymously, and can not be used to identify you."
          ]
        }
        <br />
        <a
          target="_blank"
          className="text-cvs-red hover:underline"
          href={window.urls.privacyPolicy}
        >
          {window.i86n["Our privacy policy can be found here"]}
        </a>
        .
      </p>

      <p>
        <label className="checkbox" for="accept-privacy-policy">
          <input
            required
            type="checkbox"
            id="accept-privacy-policy"
            name="accept-privacy-policy"
            defaultChecked={window.passcode ? true : false}
          />
          <span>
            {
              window.i86n[
                "I agree to my data being stored in accordance with the privacy statement"
              ]
            }{" "}
            {window.i86n["required"]}
          </span>
          <span className="checkmark"></span>
        </label>
      </p>

      <p>
        <label className="checkbox" for="accept-remember">
          <input type="checkbox" id="accept-remember" name="accept-remember" />
          <span>
            {
              window.i86n[
                "I agree to set a cookie so I can change my health condition later e.g. to report recovery/getting sick"
              ]
            }{" "}
            {window.i86n["recommended"]}
          </span>
          <span className="checkmark"></span>
        </label>
      </p>

      <ul className="mt-4">
        <li>
          <input
            type="hidden"
            name="passcode"
            value={window.i86n["passcode"]}
          />
          <input
            className="inverse"
            type="submit"
            value={window.i86n["Submit report"]}
          />
        </li>
      </ul>
    </div>
  );
}

export default Submit;
