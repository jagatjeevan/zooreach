import React, { Component } from "react";
import Input from "./Input";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      author: {
        firstName: "",
        middleName: "",
        lastName: ""
      },
      cAuthorName: "",
      city: "",
      publisher: "",
      title: "",
      year: "",
      style: "",
      isCorporateAuthorEnabled: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.getData = this.getData.bind(this);
    this.updateAuthorName = this.updateAuthorName.bind(this);
  }

  getData(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleClick(e) {
    this.setState({
      isCorporateAuthorEnabled: !this.state.isCorporateAuthorEnabled
    });
  }

  updateAuthorName(e, fieldName) {
    const authorName = Object.assign({}, this.state.author);
    authorName[fieldName] = e.target.value;
    this.setState({ author: authorName });
  }

  render() {
    const { author, cAuthorName, city, publisher, title, year, style } = this.state;
    return [
      <h2 className="header-text">Fill up the form to get the Jott style</h2>,
      <form
        className="cite-form"
        name="cite-form"
        onSubmit={e => this.getData(e)}
      >
        <label htmlFor="author" className="colspan-3 label">
          Author
        </label>
        <Input
          type="text"
          id="firstName"
          classes="colspan-3"
          name="firstName"
          value={author.firstName}
          placeholder="First name"
          required={true}
          onChange={e => this.updateAuthorName(e, "firstName")}
        />
        <Input
          type="text"
          id="middleName"
          classes="colspan-3"
          name="middleName"
          value={author.middleName}
          placeholder="Middle name"
          required={true}
          onChange={e => this.updateAuthorName(e, "middleName")}
        />
        <Input
          type="text"
          id="lastName"
          classes="colspan-3"
          name="lastName"
          value={author.lastName}
          placeholder="Last name"
          required={true}
          onChange={e => this.updateAuthorName(e, "lastName")}
        />

        <label htmlFor="cAuthor" className="colspan-3 v-center label">
          <input
            type="checkbox"
            name="corporateAuthor"
            id="cAuthor"
            checked={this.state.isCorporateAuthorEnabled}
            onChange={() =>
              this.setState({
                isCorporateAuthorEnabled: !this.state.isCorporateAuthorEnabled
              })
            }
          />
          Corporate Author
        </label>
        <Input
          type="text"
          disabled={!this.state.isCorporateAuthorEnabled}
          id="cAuthorName"
          name="cAuthorName"
          classes="colspan-9"
          value={cAuthorName}
          placeholder="Corporate Author Name"
          onChange={e => this.setState({ cAuthorName: e.target.value })}
        />
        <label htmlFor="title" className="colspan-3 label">
          Title
        </label>
        <Input
          type="text"
          id="title"
          name="title"
          classes="colspan-9"
          required
          placeholder="Title of the journal"
          value={title}
          onChange={e => this.setState({ title: e.target.value })}
        />

        <label htmlFor="year" className="colspan-3 label">
          Year
        </label>
        <Input
          type="text"
          id="year"
          name="year"
          placeholder="Year of publication"
          classes="colspan-9"
          value={year}
          onChange={e => this.setState({ year: e.target.value })}
        />

        <label htmlFor="city" className="colspan-3 label">
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          className="colspan-9"
          value={city}
          placeholder="City"
          onChange={e => this.setState({ city: e.target.value })}
        />

        <label htmlFor="publisher" className="colspan-3 label">
          Publisher
        </label>
        <Input
          type="text"
          id="publisher"
          name="publisher"
          classes="colspan-9"
          value={publisher}
          placeholder="Publisher"
          onChange={e => this.setState({ publisher: e.target.value })}
        />
        <label htmlFor="style" className="colspan-3 label">
          Which style to show
        </label>
        <label className="colspan-2 v-center">
          <input
            type="radio"
            name="style"
            value="book"
            checked={style === "book"}
            onChange={() => this.setState({ style: "book" })}
          />
          Book Style
        </label>
        <label className="colspan-2 v-center">
          <input
            type="radio"
            name="style"
            value="journal"
            checked={style === "journal"}
            onChange={() => this.setState({ style: "journal" })}
          />
          Journal Style
        </label>
        <button type="submit" className="colspan-4 push-6">
          Add
        </button>
      </form>
    ];
  }
}

export default Form;
