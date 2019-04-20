import React, { Component } from "react";

class JournalView extends Component {
  render() {
      const {formData} = this.props;
      const author = `${formData.author.lastName} ${formData.author.firstName} ${formData.author.middleName}`;
      const {cAuthorName, year, title} = formData;
    return (
      <div className="journal-container jott-style-container">
        <h2>Journal style</h2>
        <span className="author-and-year-of-publication">
            <b>{author} </b>
            <b>{cAuthorName} </b>
            <b>{year} </b>
        </span>
        <i>{title} </i>
        <span className="journal-reference">
        Journal of Threatened Taxa 11(1): 13047–13057;
        <a href="https://doi.org/10.11609/jott.4623.11.1.13047-13057">https://doi.org/10.11609/jott.4623.11.1.13047-13057</a>
        </span>
      </div>
    );
  }
}

export default JournalView;
