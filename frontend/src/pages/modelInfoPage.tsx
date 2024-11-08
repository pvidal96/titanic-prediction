import { Component, PropsWithChildren } from 'react';
import axios from '../apis/titanicPrediction';

type ModelInformation = {
  accuracy: number;
};

type State = {
  info: ModelInformation | null;
};

class ModelInfoPage extends Component<PropsWithChildren, State> {
  state: Readonly<State> = {
    info: null,
  };

  componentDidMount(): void {
    axios.get('model/accuracy').then((result) => {
      this.setInfo(result.data);
    });
  }

  /**
   * Set model information once loaded
   * @param info
   */
  setInfo(info: ModelInformation) {
    this.setState({ info });
  }

  render() {
    const info = this.state.info;
    return (
      <>
        <h3>Model information</h3>
        {info !== null ? (
          <ul>
            <li>Accuracy: {info.accuracy}</li>
          </ul>
        ) : (
          <div>Loading...</div>
        )}
      </>
    );
  }
}

export default ModelInfoPage;
