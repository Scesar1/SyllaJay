"use client";
import { useEffect, useState } from "react";

function Table() {
  return (
    <div className="container bg-white shadow rounded-box">
      <div className="overflow-x-auto">
        <table className="table table-lg">
          <thead>
            <tr>
              <th className="text-lg"></th>
              <th className="text-lg">Class name</th>
              <th className="text-lg">Assignment</th>
              <th className="text-lg">Due date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Lorelei Blackstone</td>
              <td>Data Coordiator</td>
              <td>Witting, Kutch and Greenfelder</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
