const Bill = ({bill, handleBill}) => {
    return <div className="cont">
       <h2>How much was the bill?</h2>
       <input type="number" onChange={handleBill} value={bill}/>
    </div>
}

export default Bill