import React from "react";
import "./data.css";

export default function Data() {
  return (
    <div className="container">
      <div className="Rounded">
        <span className="date"> 11-12-2023-12-1-2024</span>
        <svg
          width="16"
          height="9"
          viewBox="0 0 16 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.8"
            d="M1 1L8 8L15 0.999998"
            stroke="white"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <table className="table-1">
        <tr>
          <th>اسم القناة</th> <th>المشروع</th> <th>عدد العملاء</th>
          <th>مكسب القناة</th>
        </tr>
        <tr>
          <td>الشرق 1</td> <td>كشكول</td>
          <td>30</td> <td>3000</td>
        </tr>
      </table>

      <table className="table-2">
        <tr>
          <th>اسم القناة</th> <th>عدد العملاء</th>
          <th>مكسب القناة</th>
        </tr>
        <tr>
          <td>الشرق 1</td> <td>30</td> <td>3000</td>
        </tr>
      </table>
      <div className="button">
        <button type="submit"> تسجيل خروج</button>
      </div>
    </div>
  );
}
