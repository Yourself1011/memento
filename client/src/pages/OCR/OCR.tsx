import { useState } from "react";
import { createMoment } from "../../utils/createMoment";
import { useNavigate } from "react-router-dom";
import Tesseract from "tesseract.js";

const OCR = () => {
  const [imagePath, setImagePath] = useState<string>("");
  const [text, setText] = useState<string | undefined>("");
  const [confidence, setConfidence] = useState<number | undefined>();
  const navigate = useNavigate();

  const handleChange = (event: any) => {
    setImagePath(URL.createObjectURL(event.target.files[0]));
  };

  const handleClick = () => {
    Tesseract.recognize(imagePath, "eng", {})
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        setConfidence(result?.data.confidence);
        setText(result?.data.text);
      });
  };

  return (
    <div className="w-full">
      <div className="w-full bg-accentbutyoucanbarelyseeit p-6">
        <h1>OCR</h1>
        <p className="flex items-center">
          Convert a photo of a whiteboard, textbook, or scientific document into
          usable text
        </p>
      </div>
      <div className="p-10">
        <div className="container">
          <h1>Image Upload</h1>
          {imagePath ? (
            <img src={imagePath} alt="logo" />
          ) : (
            <p>No image found, upload one below</p>
          )}
          <input
            className="mt-4"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
          <div className="flex items-center mt-4 gap-2">
            <button
              className={`bg-accent text-white hover:bg-accentlight ${
                imagePath ? "" : "no"
              }`}
              onClick={
                imagePath
                  ? handleClick
                  : () => {
                      return;
                    }
              }
            >
              {" "}
              Extract text
            </button>
            <button
              className={imagePath ? "" : "no"}
              onClick={
                imagePath
                  ? () => {
                      location.reload();
                    }
                  : () => {
                      return;
                    }
              }
            >
              {" "}
              Clear
            </button>
          </div>
        </div>
        <div className="container mt-8">
          <h1>Extracted text</h1>
          <p className="font-bold">
            Note: the extracted text may not be perfect
          </p>
          <div className="mt-4">
            <p>
              <span className="font-bold">Text</span>: {text ? text : "None"}{" "}
            </p>
            <p>
              <span className="font-bold">Confidence</span>:{" "}
              {confidence ? confidence : "None"}
            </p>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              className={imagePath ? "" : "no"}
              onClick={() => {
                navigator.clipboard.writeText(text || "");
              }}
            >
              Copy text
            </button>
            <button
              className={imagePath ? "" : "no"}
              onClick={() => {
                navigate(`/edit/${createMoment(text)}`);
              }}
            >
              Create new Moment with text
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OCR;
