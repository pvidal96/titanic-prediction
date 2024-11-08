import React, { Component, PropsWithRef } from 'react';
import Field from './field';
import Select from './select';
import { PredictionSubject } from '../dto/predictionSubject.dto';

type State = {
  age: number;
  siblingsSpouse: number;
  parents: number;
  fare: number;
  sex: string;
  embarked: string;
  pClass: number;
};

type Props = {
  onSubmit: (subject: PredictionSubject) => Promise<void>;
};

/**
 * Represents the prediction form (could be renamed that way)
 */
class Form extends Component<PropsWithRef<Props>, State> {
  state = {
    age: 1,
    siblingsSpouse: 0,
    parents: 0,
    fare: 0,
    sex: 'male',
    embarked: 'C',
    pClass: 1,
  };

  _handleAgeChange = this.handleAgeChange.bind(this);
  _handleSibSpChange = this.handleSibSpChange.bind(this);
  _handleParentChange = this.handleParentChange.bind(this);
  _handleFareChange = this.handleFareChange.bind(this);
  _handleSexChange = this.handleSexChange.bind(this);
  _handleEmbarkedChange = this.handleEmbarkedChange.bind(this);
  _handleClassChange = this.handleClassChange.bind(this);
  _handleSubmit = this.handleSubmit.bind(this);

  handleAgeChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ age: parseFloat(e.target.value) });
  }

  handleSibSpChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ siblingsSpouse: parseInt(e.target.value) });
  }

  handleParentChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ parents: parseInt(e.target.value) });
  }

  handleFareChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ fare: parseFloat(e.target.value) });
  }

  handleSexChange(e: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ sex: e.target.value });
  }

  handleEmbarkedChange(e: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ embarked: e.target.value });
  }

  handleClassChange(e: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ pClass: parseInt(e.target.value) });
  }

  handleSubmit(): void {
    const subject: PredictionSubject = {
      ...this.state,
      class: this.state.pClass,
    };
    //TODO form validation could be added

    this.props.onSubmit(subject);
  }

  render() {
    const { age, siblingsSpouse, parents, fare, sex, embarked, pClass } =
      this.state;
    return (
      <div className="predictionForm">
        <Field
          label="Age"
          id="first-name"
          type="number"
          min={1}
          step={0.1}
          value={age}
          onChange={this._handleAgeChange}
        />
        <Field
          label="Siblings/Spouse"
          id="siblingSpouse"
          type="number"
          min={0}
          value={siblingsSpouse}
          onChange={this._handleSibSpChange}
        />
        <Field
          label="Parents"
          id="parents"
          type="number"
          min={0}
          max={2}
          value={parents}
          onChange={this._handleParentChange}
        />
        <Field
          label="Fare"
          id="fare"
          type="number"
          min={0}
          step={0.1}
          value={fare}
          onChange={this._handleFareChange}
        />
        <Select
          label="Sex"
          id="sex"
          value={sex}
          onChange={this._handleSexChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
        <Select
          label="Port of Embarkation"
          id="embarked"
          value={embarked}
          onChange={this._handleEmbarkedChange}
        >
          <option value="C">Cherbourg</option>
          <option value="Q">Queenstown</option>
          <option value="S">Southampton</option>
        </Select>
        <Select
          label="Passenger Class"
          id="pClass"
          value={pClass}
          onChange={this._handleClassChange}
        >
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
        </Select>
        <div className="centeredContainer">
          <button className="submitButton" onClick={this._handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
