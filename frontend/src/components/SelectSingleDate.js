import React, { useState } from 'react';

  import DatePicker from "react-datepicker";

  import "react-datepicker/dist/react-datepicker.css";

  const SelectSingleDate = ({ handleDateChange }) => {
    const [startDate, setStartDate] = useState(null);
// 
    return (
      <div>
        <label className="text-white lg:m-0 text-xl">Select Date: </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            handleDateChange(date);
            
          }}
          placeholderText="Select Date"
          className="p-1 ml-4 lg:ml-3 text-black"
        />
      </div>
    );
  };


  export default SelectSingleDate
