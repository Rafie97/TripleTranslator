export default HomePage;
import { useState } from "react";
import hiddenKey from "../hiddenKey";
const axios = require("axios").default;

function HomePage() {
  const [french, setFrench] = useState("");
  const [english, setEnglish] = useState("");
  const [spanish, setSpanish] = useState("");
  const [italian, setItalian] = useState("");

  function sendEnglish() {
    var subscriptionKey = hiddenKey;
    var endpoint = "https://api.cognitive.microsofttranslator.com";

    // Add your location, also known as region. The default is global.
    // This is required if using a Cognitive Services resource.
    var location = "centralus";

    axios({
      baseURL: endpoint,
      url: "/translate",
      method: "post",
      headers: {
        "Ocp-Apim-Subscription-Key": subscriptionKey,
        "Ocp-Apim-Subscription-Region": location,
        "Content-type": "application/json",
      },
      params: {
        "api-version": "3.0",
        from: "en",
        to: ["fr", "it", "es"],
      },
      data: [
        {
          text: english,
        },
      ],
      responseType: "json",
    })
      .then(function (response) {
        setFrench(response.data[0].translations[0].text);
        setItalian(response.data[0].translations[1].text);
        setSpanish(response.data[0].translations[2].text);
      })
      .catch((error) => {
        console.log("RRRRRR", error);
      });
  }

  return (
    <div style={{ backgroundColor: "black", height: 1000, color: "white" }}>
      <div>
        <h1 style={{ textAlign: "center", paddingTop: 100, paddingBottom: 60 }}>
          Welcome to Triple Translator!
        </h1>
      </div>
      <h2 style={{ margin: 40 }}>
        Translate English to Spanish, French, and Italian all at once!
      </h2>

      <div
        style={{
          textAlign: "center",
          flexDirection: "row",
          display: "inline-block",
          width: "100%",
        }}
      >
        <div style={{ flex: 1, padding: 50, display: "inline-block" }}>
          <div style={{ flexDirection: "row" }}>
            <h2 style={{ marginRight: 0, display: "inline-block" }}>
              English:
            </h2>
            <input
              type="text"
              style={{ width: 400, display: "inline-block" }}
              onChange={(e) => setEnglish(e.target.value)}
              onSubmit={async () => await sendEnglish()}
              onKeyPress={async (e) => {
                if (e.key === "Enter") {
                  await sendEnglish();
                }
              }}
            />
          </div>
          <div style={{ flexDirection: "column" }}>
            <div
              style={{
                display: "inline-block",
                marginRight: 40,
                flexDirection: "column",
              }}
            >
              Spanish
              <div>
                <textarea style={{ height: 200 }} value={spanish} />
              </div>
            </div>

            <div style={{ display: "inline-block", marginRight: 40 }}>
              French
              <div>
                <textarea style={{ height: 200 }} value={french} />
              </div>
            </div>

            <div style={{ display: "inline-block", marginRight: 40 }}>
              Italian
              <div>
                <textarea style={{ height: 200 }} value={italian} />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            marginLeft: 0,
            display: "inline-block",
          }}
        >
          <h2 style={{}}>Read these tips!</h2>
          <div
            style={{
              borderColor: "white",
              border: "1px solid white",
              height: 300,
              width: 100,
            }}
          >
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
}
