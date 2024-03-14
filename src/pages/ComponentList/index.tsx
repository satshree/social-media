import Button from "../../components/Button";

function Components() {
  return (
    <div>
      <div>Component List</div>
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button>Button</Button>
        <Button disabled={true}>Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="secondary" disabled={true}>
          Button
        </Button>
        <Button variant="success">Button</Button>
        <Button variant="success" disabled={true}>
          Button
        </Button>
        <Button variant="danger">Button</Button>
        <Button variant="danger" disabled={true}>
          Button
        </Button>
      </div>
    </div>
  );
}

export default Components;
