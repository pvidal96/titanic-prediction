import './App.css';
import Tabs from './components/tabs';
import Panel from './components/panel';
import ModelInfoPage from './pages/modelInfoPage';
import PredictionPage from './pages/predictionPage';

function App() {
  return (
    <Tabs initialSelection={0}>
      <Panel title="Model Info">
        <ModelInfoPage />
      </Panel>
      <Panel title="Predict">
        <PredictionPage />
      </Panel>
    </Tabs>
  );
}

export default App;
