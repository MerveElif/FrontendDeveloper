import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-3">
      <FormControl
        type="text"
        placeholder="Marka Ara"
        className="mr-sm-2"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button type="submit" variant="outline-primary" className="mt-2 w-100">
        Ara
      </Button>
    </Form>
  );
};

export default Search;
