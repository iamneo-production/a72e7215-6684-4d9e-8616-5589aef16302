import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import './Csv.css'


const TableComponent = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://localhost:8082/api/v1/user/get')
      .then((response) => response.json())
      .then((data) => setTableData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {tableData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <CSVLink data={tableData} filename={'table_data.csv'}>
            <div className="tab1"><b><u>Download Table as CSV file</u></b></div>
          </CSVLink>
        </>
      )}
    </div>
  );
};

export default TableComponent;