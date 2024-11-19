import "./App.css";
import Menu from "./components/Menu";
import Card from "./components/Card";
import { cardData } from "./cardData";
import React from "react";

function App() {
  return (
    <div className="main">
      {cardData.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <Card
              title={item.title}
              subtitle={item.subtitle}
              time={item.time}
              bgImage={item.bgImage}
              date={item.date}
              isButtonShown={item.date === "Сегодня"}
            />
          </React.Fragment>
        );
      })}
      <Menu />
    </div>
  );
}

export default App;
