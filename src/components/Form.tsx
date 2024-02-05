import React, { useState } from "react";

interface FormProps {
  cardHolderCard: (value: string) => void;
  cardNumberCard: (value: string) => void;
  mmCard: (value: string) => void;
  yyCard: (value: string) => void;
  cvcCard: (value: string) => void;
  submitForm: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({
  cardHolderCard,
  cardNumberCard,
  mmCard,
  yyCard,
  cvcCard,
  submitForm,
}: FormProps) {
  const [cardHolder, setCardHolder] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [mm, setMM] = useState<string>("");
  const [yy, setYY] = useState<string>("");
  const [cvc, setCVC] = useState<string>("");

  const [cardHolderClicked, setCardHolderClicked] = useState<boolean>(false);
  const [cardNumberClicked, setCardNumberClicked] = useState<boolean>(false);
  const [mmClicked, setMMClicked] = useState<boolean>(false);
  const [yyClicked, setYYClicked] = useState<boolean>(false);
  const [cvcClicked, setCVCClcked] = useState<boolean>(false);

  function handleCardHolderChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;
    value.length > 20 ? (value = value.slice(0, 20)) : value;
    setCardHolder(value);
    cardHolderCard(value);
  }

  function handleCardNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;
    value.length > 16 ? (value = value.slice(0, 16)) : value;
    setCardNumber(value);
    cardNumberCard(value);
  }

  function handleMMChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;
    value.length > 2 ? (value = value.slice(0, 2)) : value;
    setMM(value);
    mmCard(value);
  }

  function handleYYChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;
    value.length > 2 ? (value = value.slice(0, 2)) : value;
    setYY(value);
    yyCard(value);
  }

  function handleCVCChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;
    value.length > 3 ? (value = value.slice(0, 3)) : value;
    setCVC(value);
    cvcCard(value);
  }

  return (
    <div id="form-div">
      <form onSubmit={submitForm}>
        <label>
          <span>CARDHOLDER NAME</span>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            value={cardHolder}
            onChange={handleCardHolderChange}
            maxLength={25}
            required
            onClick={() => setCardHolderClicked(true)}
            style={{
              border:
                cardHolderClicked && !cardHolder.includes(" ")
                  ? "2px solid red"
                  : cardHolder.includes(" ") && cardHolder.length !== 0
                  ? "2px solid lightgreen"
                  : "1px solid #DFDEE0",
            }}
          />
        </label>
        <label>
          <span>CARD NUMBER</span>
          <input
            type="number"
            placeholder="e.g. 1234 5678 9123 0000"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength={16}
            required
            onClick={() => setCardNumberClicked(true)}
            style={{
              border:
                cardNumberClicked && cardNumber.length < 16
                  ? "2px solid red"
                  : cardNumber.length === 16
                  ? "2px solid lightgreen"
                  : "1px solid #DFDEE0",
            }}
          />
        </label>
        <label className="mm-yy-label">
          <div className="mm-cvc-span-div">
            <span>EXP. DATE (MM/YY)</span>
            <span className="cvc-span">CVC</span>
          </div>
          <div className="mm-yy-input">
            <input
              type="number"
              placeholder="MM"
              id="mm-input"
              value={mm}
              onChange={handleMMChange}
              maxLength={2}
              required
              onClick={() => setMMClicked(true)}
              style={{
                border:
                  mmClicked && mm.length < 2
                    ? "2px solid red"
                    : mm.length === 2
                    ? "2px solid lightgreen"
                    : "1px solid #DFDEE0",
              }}
            />
            <input
              type="number"
              placeholder="YY"
              id="yy-input"
              value={yy}
              onChange={handleYYChange}
              onClick={() => setYYClicked(true)}
              maxLength={2}
              required
              style={{
                border:
                  yyClicked && yy.length < 2
                    ? "2px solid red"
                    : yy.length === 2
                    ? "2px solid lightgreen"
                    : " 1px solid #DFDEE0 ",
              }}
            />
            <input
              type="text"
              placeholder="e.g. 123"
              id="cvc-input"
              value={cvc}
              onChange={handleCVCChange}
              onClick={() => setCVCClcked(true)}
              pattern="[0-9]*"
              maxLength={3}
              required
              style={{
                border:
                  cvcClicked && cvc.length < 3
                    ? "2px solid red"
                    : cvc.length === 3
                    ? "2px solid lightgreen"
                    : "1px solid #DFDEE0",
              }}
            />
          </div>
        </label>

        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}
