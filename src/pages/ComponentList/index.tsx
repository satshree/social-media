import Button from "../../components/Button";
import CreatePost from "../../components/CreatePost";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";

function Components() {
  return (
    <div>
      <div>Component List</div>
      <br />
      <div>
        <CreatePost />
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
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
      <br />
      <div>
        <Input />
        <br />
        <br />
        <Input
          label="Input"
          error={true}
          errorText="This is a helper error text"
        />
      </div>
      <div>
        <Textarea />
        <Textarea
          label="Textarea"
          error={true}
          errorText="This is a helper error text"
        />
      </div>
    </div>
  );
}

export default Components;
