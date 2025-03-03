import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "Paris", "London"];
  const [alertVisible, setAlertVisibility] = useState(false);

  const onSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {alertVisible && (
        <Alert color="primary" onClose={() => setAlertVisibility(false)}>
          Alert
        </Alert>
      )}
      <Button
        children="button text"
        onClick={() => setAlertVisibility(true)}
      ></Button>
      <ListGroup items={items} heading="Cities" onSelectItem={onSelectItem} />
    </div>
  );
}

export default App;
