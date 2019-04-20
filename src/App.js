import React, { Component } from "react";

import Form from "./Form";
import JournalView from "./JournalVeiw";
import BookView from "./BookView";

import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showJournalData: false,
      showBookData: false,
      formData: null,
    };
    this.showData = this.showData.bind(this);
    this.getView = this.getView.bind(this);
  }

  getView() {
    if (this.state.showJournalData) return <JournalView formData={this.state.formData} />;
    if (this.state.showBookData) return <BookView formData={this.state.formData} />;
  }

  showData(data) {
    this.setState({
      showJournalData: data.style === "journal",
      showBookData: data.style === "book",
      formData: data,
    });
  }

  render() {
    return (
      <article className="main-content">
        <header className="main-header">
          <a
            href="https://threatenedtaxa.org/index.php/index"
            className="is_img"
          >
            <img
              src="https://threatenedtaxa.org/public/journals/1/pageHeaderLogoImage_en_US.png"
              width="701"
              height="170"
              alt="Page Header Logo"
            />
          </a>
        </header>
        <div className="container">
          <Form onSubmit={this.showData} />
          {this.getView()}
        </div>
      </article>
    );
  }
}

export default App;
