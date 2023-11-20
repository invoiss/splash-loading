/* @refresh reload */
import { render } from "solid-js/web";
import "./app.css";

function App() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          background: "black",
          opacity: 1,
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            "flex-direction": "column",
            width: "256px",
            "align-items": "center",
          }}
        >
          <img
            // base64 from 192x192 webp icon:
            src="data:image/webp;base64,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"
            alt="icon"
            width={128}
            height={128}
          />
          <p
            style={{
              margin: "16px 0px 4px",
              "font-size": "12px",
              color: "white",
              "text-align": "center",
            }}
          >
            Please Wait
          </p>
          <div
            style={{
              width: "100%",
              height: "4px",
              background: "#eee",
              "border-radius": "1px",
              "margin-top": "2px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                "background-color": "#007bff",
                "border-radius": "1px",
                width: "50%",
                animation: "progress-bar-animation 1.2s linear infinite",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

const root = document.getElementById("root");

render(() => <App />, root);
