import React from "react";
import "./StockList.css"; // Import CSS for styling

const StockList = () => {
  const stockData = [
    {
      sNo: 1,
      particulars: "LONG SIZE NOTE",
      openingStock: 10,
      purchasedQty: 80,
      salesQty: 20,
      balance: 60,
      remarks: "NIL",
    },
    {
      sNo: 2,
      particulars: "BROWN TAPE",
      openingStock: 35,
      purchasedQty: 65,
      salesQty: 44,
      balance: 11,
      remarks: "NIL",
    },
    {
      sNo: 3,
      particulars: "PENCIL",
      openingStock: 45,
      purchasedQty: 56,
      salesQty: 2,
      balance: 54,
      remarks: "NIL",
    },
    {
      sNo: 4,
      particulars: "CHALK BOX",
      openingStock: 67,
      purchasedQty: 74,
      salesQty: 10,
      balance: 64,
      remarks: "NIL",
    },
    {
      sNo: 5,
      particulars: "SCISSOR BIG SIZE",
      openingStock: 65,
      purchasedQty: 50,
      salesQty: 25,
      balance: 25,
      remarks: "NIL",
    },
    {
      sNo: 6,
      particulars: "LONG SIZE NOTE",
      openingStock: 20,
      purchasedQty: 50,
      salesQty: 10,
      balance: 40,
      remarks: "NIL",
    },
    {
      sNo: 7,
      particulars: "BROWN TAPE",
      openingStock: 56,
      purchasedQty: 72,
      salesQty: 12,
      balance: 60,
      remarks: "NIL",
    },
    {
      sNo: 8,
      particulars: "CHALK BOX",
      openingStock: 42,
      purchasedQty: 75,
      salesQty: 15,
      balance: 60,
      remarks: "NIL",
    },
    {
      sNo: 9,
      particulars: "PENCIL",
      openingStock: 35,
      purchasedQty: 55,
      salesQty: 33,
      balance: 22,
      remarks: "NIL",
    },
    {
      sNo: 10,
      particulars: "PEN",
      openingStock: 30,
      purchasedQty: 80,
      salesQty: 40,
      balance: 40,
      remarks: "NIL",
    },
  ];

  return (
    <div className="stock-list">
      <h2>Stocks List</h2>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Particulars</th>
            <th>Opening Stocks</th>
            <th>Purchased Qty</th>
            <th>Sales Qty</th>
            <th>Balance</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((stock, index) => (
            <tr key={index}>
              <td>{stock.sNo}</td>
              <td>{stock.particulars}</td>
              <td>{stock.openingStock}</td>
              <td>{stock.purchasedQty}</td>
              <td>{stock.salesQty}</td>
              <td>{stock.balance}</td>
              <td>{stock.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockList;
