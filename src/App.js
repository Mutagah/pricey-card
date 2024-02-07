import "./App.css";
import React, { useState } from "react";
import Switch from "./components/Switch/Switch";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  console.log(isToggled);
  return (
    <div className="bg-neutral-950 h-screen">
      <div className="current-plan">
        <p>Your current plan:</p>
        <h5>Starter Trial.500MAUs</h5>
      </div>
      <div className="card-container">
        <div className="plan-container">
          <h3>Choose a plan</h3>
          <Switch
            isToggled={isToggled}
            onToggle={() => setIsToggled(!isToggled)}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "75%",
            margin: "10px auto 0 auto",
          }}
        >
          <div className="card">
            <div className="card-header">
              <h3>Starter</h3>
              <p>$19</p>
            </div>
            <ul className="list-features">
              <li>500 MAUS</li>
              <li>3 projects</li>
              <li>Unlimited guides</li>
              <li>Unlimited flows</li>
              <li>Unlimited branded themes</li>
              <li>Email support</li>
            </ul>
            <button>Choose Plan</button>
          </div>
          <div className="card">
            <div className="card-header">
              <h3>Pro</h3>
              <p>
                $99
                <sub className="subscript-tags">/month</sub>
              </p>
              <select name="monthly-packages" className="select-package">
                <option value="2500MAUs">2500MAUS</option>
              </select>
              <p id="select-tag">Monthly active users</p>
            </div>
            <ul className="list-features">
              <li>All starter features,plus:</li>
              <li>Unlimited Projects</li>
              <li>Unlimited fully customizable themes</li>
              <li>A dedicated Customer Success Manager</li>
            </ul>
            <button>Choose Plan</button>
          </div>
          <div className="card">
            <div className="card-header">
              <h3>Enterprise</h3>
              <p>Let's Talk!</p>
            </div>
            <ul className="list-features">
              <li>All pro features</li>
              <li>Unlimited MAUs</li>
              <li>Dedicated Environment</li>
              <li>Dedicated Enterprise account administration</li>
              <li>Premium support and services</li>
            </ul>
            <button>Contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
