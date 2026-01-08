import { Button } from "./Button";

function App() {
  return (
    <>
      <div className="p-4 space-y-4">
        <Button variant="primary" size="md">
          Click Me
        </Button>
        <Button variant="secondary" size="lg">
          Secondary
        </Button>
        <Button variant="outline" loading>
          Loading...
        </Button>
        <Button variant="danger" disabled>
          Disabled
        </Button>
      </div>
    </>
  );
}

export default App;
