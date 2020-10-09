import React, { useState } from "react";
import { DatePicker, message, Alert } from "antd";

function Menu() {
  const [date, setDate] = useState(null);
  const handleChange = (value) => {
    message.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(value);
  };
  return (
    <div className="App">
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format("YYYY-MM-DD") : "None"}
      </div>
      <Alert
        message="Selected Date"
        description={date ? date.format("YYYY-MM-DD") : "None"}
      />
    </div>
  );
}

export default Menu;
