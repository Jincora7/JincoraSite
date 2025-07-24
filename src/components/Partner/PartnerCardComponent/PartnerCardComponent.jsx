
import "./PartnerCardComponent.css"

const PartnerCardComponent = ({ image, heading, para }) => (
  <div className="partner-card-component">
    <img src={image} alt={heading} />
    <h3>{heading}</h3>
    <p>{para}</p>
  </div>
);
export default PartnerCardComponent