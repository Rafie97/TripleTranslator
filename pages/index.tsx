export default HomePage;
import { useState } from "react";
import hiddenKey from "../hiddenKey";
import { AiFillSound } from "react-icons/ai";
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
      <h2 style={{ margin: 40, marginLeft: 100 }}>
        Translate English to Spanish, French, and Italian all at once!
      </h2>

      <div
        style={{
          textAlign: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <div
          style={{
            flex: 1,
            padding: 50,
            display: "inline-block",
            position: "absolute",
            left: 100,
          }}
        >
          <div style={{ flexDirection: "row", marginBottom: 30 }}>
            <h3 style={{ marginRight: 20, display: "inline-block" }}>
              English:
            </h3>
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
              <AiFillSound
                style={{ marginTop: 10 }}
                color="white"
                size={30}
              ></AiFillSound>
            </div>

            <div style={{ display: "inline-block", marginRight: 40 }}>
              French
              <div>
                <textarea style={{ height: 200 }} value={french} />
              </div>
              <AiFillSound
                style={{ marginTop: 10 }}
                color="white"
                size={30}
              ></AiFillSound>
            </div>

            <div style={{ display: "inline-block", marginRight: 40 }}>
              Italian
              <div>
                <textarea style={{ height: 200 }} value={italian} />
              </div>
              <AiFillSound
                style={{ marginTop: 10 }}
                color="white"
                size={30}
              ></AiFillSound>
            </div>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            marginLeft: 0,
            display: "inline-block",
            position: "absolute",
            right: 100,
          }}
        >
          <h2>Read these tips!</h2>
          <div
            style={{
              borderColor: "white",
              border: "1px solid white",
              height: 600,
              width: 400,
            }}
          >
            <ul>
              <li style={styles.tipListItem}>
                Interchangable Letters: <br></br>
                J=I=Y <br></br>
                C=S=Z <br></br>
                W=V=U
              </li>
              <li style={styles.tipListItem}>Like in English, tion=sion</li>
              <li style={styles.tipListItem}>
                Often pronouns such as "I" and "he" are absorbed by the verb and
                the prefix or suffix changes from the root verb
              </li>
              <li style={styles.tipListItem}>
                Sometimes translations sound like a word in English but are a
                rare synonym of the original. Think about what English word the
                translation sounds like and try to build an intuition for how
                it's similar.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  tipListItem: {
    marginTop: 20,
    marginBottom: 20,
  },
};
