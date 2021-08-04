export default HomePage;

function HomePage() {
  async function sendEnglish() {
    console.log("English");

    const data = {
      key: "",
      ui: "es",
      text: "yes",
      lang: "en",
      format: "plain",
    };

    await fetch("https://translate.yandex.net/api/v1.5/tr.json/getLangs", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log("English sent");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div style={{ backgroundColor: "black", height: 900, color: "white" }}>
      <div>
        <h1 style={{ textAlign: "center", paddingTop: 100, paddingBottom: 60 }}>
          Welcome to Triple Translator!
        </h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ flex: 3, display: "inline-block" }}>
          <h2 style={{ marginBottom: 40 }}>
            Translate English to Spanish, French, and Italian all at once!
          </h2>

          <div style={{ flexDirection: "column" }}>
            <h2 style={{ display: "inline-block", marginRight: 40 }}>
              English:
            </h2>
            <input
              type="text"
              style={{ width: 400 }}
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
                <textarea style={{ height: 400 }} />
              </div>
            </div>

            <div style={{ display: "inline-block", marginRight: 40 }}>
              French
              <div>
                <textarea style={{ height: 400 }} />
              </div>
            </div>

            <div style={{ display: "inline-block", marginRight: 40 }}>
              Italian
              <div>
                <textarea style={{ height: 400 }} />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            flex: 2,
            display: "inline-block",
            marginLeft: 250,
            flexDirection: "column",
          }}
        >
          <h2 style={{}}>Read these tips!</h2>
          <div
            style={{
              borderColor: "white",
              border: "1px solid white",
              height: 500,
              width: 400,
            }}
          >
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
}
