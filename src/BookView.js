import React, { Component } from "react";

class BookView extends Component {
  render() {
    const { formData } = this.props;
    const author = `${formData.author.lastName} ${formData.author.firstName} ${
      formData.author.middleName
    }`;
    const { cAuthorName, year, title, publisher, city } = formData;
    return (
      <div className="journal-container jott-style-container">
        <h2>Book style</h2>
        <span className="author-and-year-of-publication">
          <b>{author}, </b>
          <b>{cAuthorName} </b>
          <b>({year}) </b>
        </span>
        <i>{title} </i>
        <span>{publisher}, </span>
        <span>{city}</span>
      </div>
    );
  }
}

export default BookView;
