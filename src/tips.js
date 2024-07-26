const FirstTip = ({tip, handleTip, children}) => {
  return (
    <div className="cont">
      <h2>{children}</h2>
      <select value={tip}  onChange={(e) => handleTip(+e.target.value)}>
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>It was okay(5%)</option>
        <option value={10}>It was good(10%)</option>
        <option value={20}>Absolute Amazing(20%)</option>
      </select>
    </div>
  );
};

export default FirstTip;
