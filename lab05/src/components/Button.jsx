export default function Button({ label, onClick, isFilled = true }){
    return (
      <button disabled={!isFilled} className="Button" onClick={onClick}>
        <div className="Button__Label">{label}</div>
      </button>
    );
}
