import React, { useState } from "react";
import "./DailyCheckIn.css";

const DailyCheckIn = () => {
  const [mood, setMood] = useState(null);
  const [checkInText, setCheckInText] = useState("");

  return (
    <section className="daily-checkin">
      <div className="checkin-wrapper">
        <div className="checkin-header">
          <h2>Daglig Check-in</h2>
          <p>Hur mår du idag?</p>
        </div>

        {mood === null ? (
          <div className="mood-selection">
            <div className="mood-options">
              <button
                onClick={() => setMood("happy")}
                className="mood-button happy"
              >
                😊
              </button>
              <button
                onClick={() => setMood("neutral")}
                className="mood-button neutral"
              >
                😐
              </button>
              <button
                onClick={() => setMood("sad")}
                className="mood-button sad"
              >
                😢
              </button>
            </div>
            <p className="anonymous-note">Ditt svar kan förbli anonymt</p>
          </div>
        ) : (
          <div className="mood-result">
            <div className="mood-emoji">
              {mood === "Glad" && "😊"}
              {mood === "neutral" && "😐"}
              {mood === "Ledsen" && "😢"}
            </div>
            <textarea
              placeholder="Vill du berätta mer om din dag? (valfritt)"
              value={checkInText}
              onChange={(e) => setCheckInText(e.target.value)}
            />
            <div className="checkin-actions">
              <button onClick={() => setMood(null)}>Ändra</button>
              <button>Skicka</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DailyCheckIn;



