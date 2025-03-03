import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "Paris", "London"];

  const onSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Alert>
        This is an <strong>Alert</strong>
      </Alert>
      <ListGroup items={items} heading="Cities" onSelectItem={onSelectItem} />
    </div>
  );
}

export default App;
