import React, { FC } from "react";
import "./style.scss";
import ClockIcon from "../Icons/ClockIcon";
import { ArrowIcon } from "../Icons/ArrowIcon";
import Button from "../Button";

type Props = {
  title: string;
  subtitle: string;
  time: number;
  bgImage: string;
  date: string;
  isButtonShown?: boolean;
};

const Card: FC<Props> = ({
  title,
  subtitle,
  time,
  date,
  bgImage,
  isButtonShown,
}) => {
  const handleButton = () => {
    console.log("Handle Button");
  };

  return (
    <div className="card">
      {!isButtonShown ? <div className="card__date">{date}</div> : <></>}
      <div
        className="card__inner"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="card__inner__wrapper">
          <div className="card__inner__title">{title}</div>
          <div className="card__inner__subtitle">{subtitle}</div>
          <div className="card__inner__time">
            <ClockIcon />
            {time} мин
          </div>
          {isButtonShown ? (
            <Button text={"Начать"} onClick={handleButton} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
