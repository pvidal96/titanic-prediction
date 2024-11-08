import { Component, PropsWithChildren } from 'react';
import Form from '../components/form';
import axios from '../apis/titanicPrediction';
import { PredictionSubject } from '../dto/predictionSubject.dto';
import { PredictionResult } from '../dto/predictionResult.dto';

type State = {
  loading: boolean;
  result: string | null;
};

// TODO move this types into an specific Api result types folder
type ApiPredictionResult = {
  data: PredictionResult;
};

class PredictionPage extends Component<PropsWithChildren, State> {
  state = {
    loading: false,
    result: null,
  };

  _handleSubmitted = this.handleSubmitted.bind(this);
  _handleRetry = this.handleRetry.bind(this);

  async handleSubmitted(subject: PredictionSubject): Promise<void> {
    //TODO this block could be splitted to reduce complexity and improve clarity
    this.setState({ loading: true }, () => {
      axios
        .post('prediction/single', subject)
        .then((result: ApiPredictionResult) => {
          this.setState({
            loading: false,
            result: result.data.survives ? 'survive' : 'not survive',
          });
        })
        .catch((error) => {
          // TODO improve error handling
          this.setState({ loading: false }, () =>
            alert(
              error.response.data.message ??
                'Error while performing the request',
            ),
          );
        });
    });
  }

  /**
   * Reset form
   */
  handleRetry(): void {
    this.setState({ loading: false, result: null });
  }

  render() {
    const { loading, result } = this.state;

    return (
      <>
        {!loading && result === null ? (
          <Form onSubmit={this._handleSubmitted} />
        ) : (
          <div>
            {loading ? (
              'Loading...'
            ) : (
              <>
                <div
                  className="centeredContainer"
                  style={{ paddingBottom: '20px' }}
                >
                  {'The passenger will ' + result}
                </div>
                <div className="centeredContainer">
                  <button className="submitButton" onClick={this._handleRetry}>
                    Retry
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </>
    );
  }
}

export default PredictionPage;
