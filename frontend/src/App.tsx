import './App.css';
import Tabs from './components/tabs';
import Panel from './components/panel';
import ModelInfoPage from './pages/modelInfoPage';

function App() {
  return (
    <Tabs initialSelection={0}>
      <Panel title="Model Info">
        <ModelInfoPage />
      </Panel>
      <Panel title="Predict">
        <div>TODO</div>{' '}
      </Panel>
    </Tabs>
  );
}

export default App;
