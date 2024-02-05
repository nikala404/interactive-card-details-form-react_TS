interface AsideComponentProps {
  frontSideCard: HTMLImageElement | string | undefined;
  backSideCard: HTMLImageElement | string | undefined;
  cardNumber?: string;
  cardHolder?: string;
  date?: string;
  cvc?: string;
}
export default function AsideComponent({
  frontSideCard,
  backSideCard,
  cardNumber,
  cardHolder,
  date,
  cvc,
}: AsideComponentProps) {
  return (
    <aside>
      <div className="front">
        {frontSideCard && (
          <img
            src={frontSideCard.toString()}
            alt="card-front"
            id="front-side-card-main"
          />
        )}
        <div id="front-side-card">
          <div id="card-chip"></div>
          <div id="ellipse"></div>
          <div id="card-number">
            <span>{cardNumber}</span>
          </div>
          <div id="card-holder">
            <span>{cardHolder}</span>
          </div>
          <div id="card-expiry">
            <span>{date}</span>
          </div>
        </div>
      </div>
      <div className="back">
        {backSideCard && (
          <img
            src={backSideCard.toString()}
            alt="card-back"
            id="back-side-card-main"
          />
        )}
        <div id="back-side-card">
          <div id="card-cvc">
            <span>{cvc}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
