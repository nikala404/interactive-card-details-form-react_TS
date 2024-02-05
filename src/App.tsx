import React, { useState } from "react";
import frontSideCard from "../public/images/bg-card-front.png";
import backSideCard from "../public/images/bg-card-back.png";
import AsideComponent from "./components/AsideComponent.tsx";
import Form from "./components/Form.tsx";
import "./App.css";

function App() {
  const [cardHolder, setCardHolder] = useState<string>("Jane Appleseed");
  const [cardNumber, setCardNumber] = useState<string>("0000 0000 0000 0000");
  const [mm, setMM] = useState<string>("00");
  const [yy, setYY] = useState<string>("00");
  const [cvc, setCVC] = useState<string>("000");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [isCardHolderValid, setIsCardHolderValid] = useState<boolean>(true);
  const [isCardNumberValid, setIsCardNumberValid] = useState<boolean>(true);
  const [isMMValid, setIsMMValid] = useState<boolean>(true);
  const [isYYValid, setIsYYValid] = useState<boolean>(true);
  const [isCVCValid, setIsCVCValid] = useState<boolean>(true);

  function cardHolderCard(value: string) {
    setCardHolder(value);

    setIsCardHolderValid(value.includes(" ") && value.length !== 0);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      isCardHolderValid &&
      isCardNumberValid &&
      isMMValid &&
      isYYValid &&
      isCVCValid
    ) {
      setIsSubmitted(true);
    } else {
      alert("Please fill in all fields correctly");
    }
  }

  function cardNumberCard(value: string) {
    const cleanedValue = value.replace(/\D/g, "");
    if (cleanedValue.length > 16) {
      return;
    }
    const formattedValue = cleanedValue.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(formattedValue);
    setIsCardNumberValid(cleanedValue.length === 16);
  }

  function mmCard(value: string) {
    setMM(value);

    setIsMMValid(value.length === 2);
  }

  function yyCard(value: string) {
    setYY(value);

    setIsYYValid(value.length === 2);
  }

  function cvcCard(value: string) {
    setCVC(value);

    setIsCVCValid(value.length === 3);
  }

  return (
    <>
      <div id="parent">
        <main>
          <AsideComponent
            frontSideCard={frontSideCard}
            backSideCard={backSideCard}
            cardHolder={cardHolder}
            cardNumber={cardNumber}
            date={`${mm}/${yy}`}
            cvc={cvc}
          />

          {isSubmitted ? (
            <>
              <div id="submitted">
                <div id="ellispe"></div>
                <h1>THANK YOU!</h1>
                <p>We've added your card details</p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    cardHolderCard("Jane Appleseed");
                    cardNumberCard("0000 0000 0000 0000");
                    mmCard("00");
                    yyCard("00");
                    cvcCard("000");
                  }}
                >
                  Continue
                </button>
              </div>
            </>
          ) : (
            <Form
              cardHolderCard={cardHolderCard}
              cardNumberCard={cardNumberCard}
              mmCard={mmCard}
              yyCard={yyCard}
              cvcCard={cvcCard}
              submitForm={handleSubmit}
            />
          )}
        </main>
      </div>
    </>
  );
}

export default App;
