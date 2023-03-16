export default function Field({ label, value, onChange, errorMsg = "" }) {
  return (
    <div className="Field">
      <div className="Field__Label">{label}</div>
      <input name={label} className="Field__Input" value={value} onChange={onChange} />
      <div className="Field__HelperMessage">{errorMsg}</div>
    </div>
  );
}
