import React,{useState} from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };


const convertToUppercase = () => {
  setText(text.toUpperCase());
  props.showAlert("Converted to uppercase", "success");
};

const convertToLowercase = () => {
  setText(text.toLowerCase());
  props.showAlert("Converted to lowercase", "success");
};

const convertToClear = () => {
  setText("");
  props.showAlert("Text cleared", "warning");
};

const convertToSentenceCase = () => {
  const sentenceCaseText = text
    .toLowerCase()
    .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());

  setText(sentenceCaseText);
  props.showAlert("Converted to sentence case", "success");
};

const convertToTitleCase = () => {
  const titleCaseText = text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  setText(titleCaseText);
  props.showAlert("Converted to title case", "success");
};


  return (
    <div
      className={`container my-3 ${
        props.mode === "dark" ? "text-light" : "text-dark"
      }`}
    >
      <h1>{props.title}</h1>

      <div className="mb-3">
        <textarea
          className={`form-control ${
            props.mode === "dark" ? "bg-dark text-light" : ""
          }`}
          id="myBox"
          rows="8"
          value={text}
          onChange={handleChange}
          style={
            props.mode === "dark"
              ? { backgroundColor: "#13466e", color: "white" }
              : {}
          }
        />
      </div>

      <div className="d-flex gap-2 flex-wrap">
        <button className="btn btn-primary" onClick={convertToUppercase}>
          UPPERCASE
        </button>

        <button className="btn btn-primary" onClick={convertToLowercase}>
          lowercase
        </button>

        <button className="btn btn-primary" onClick={convertToClear}>
          Clear Text
        </button>

        <button className="btn btn-primary" onClick={convertToSentenceCase}>
          Sentence case
        </button>

        <button className="btn btn-primary" onClick={convertToTitleCase}>
          Title Case
        </button>
      </div>

      <div className="my-4">
        <h1>Text Summary</h1>

        <p>
          {text.length} characters and{" "}
          {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words
        </p>

        <p>
          {0.008 * (text.trim() === "" ? 0 : text.trim().split(/\s+/).length)}{" "}
          minutes to read
        </p>

        <h2>Preview</h2>
        <p>{text || "Nothing to preview!"}</p>
      </div>
    </div>
  );
}