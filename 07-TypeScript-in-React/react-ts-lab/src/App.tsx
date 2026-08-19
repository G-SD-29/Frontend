import Greeting from "./examples/Greeting.tsx";
import ActionButton from "./examples/ActionButton.tsx";
import StatusMessage from "./examples/StatusMessage";
import Panel from "./examples/Panel.tsx";
import Counter from "./examples/Counter.tsx";
import ProfileEditor from "./examples/ProfileEditor.tsx";
import GuestList from "./examples/GuestList.tsx";
import NameForm from "./examples/NameForm.tsx";
import FruitSelector from "./examples/FruitSelector.tsx";
import ClickTracker from "./examples/ClickTracker.tsx";
import EmailForm from "./examples/EmailForm.tsx";
import StatusPreview from "./examples/StatusPreview.tsx";
import FocusInput from "./examples/FocusInput.tsx";
import DocumentTitle from "./examples/DocumentTitle.tsx";
import EscapeMessage from "./examples/EscapeMessage.tsx";
import MemoComparison from "./examples/MemoComparison.tsx";
import StepCounter from "./examples/StepCounter.tsx";

function App() {
  return (
    <main>
      <h1>React TypeScript Lab</h1>
      <section>
        <h2>Lecture 01: Props</h2>
        <Panel style={{ backgroundColor: "white" }}>
          <Greeting name="Ada" />
          <ActionButton label="Speichern" color="seagreen" />
          <ActionButton label="Abbrechen" />
          <StatusMessage status="success" />
        </Panel>
      </section>
      <section>
        <h2>Lecture 02: State</h2>
        <Counter />
        <ProfileEditor />
        <GuestList />
      </section>

      <section>
        <h2>Lecture 03: Controlled Components</h2>
        <NameForm />
        <FruitSelector />
      </section>
      <section>
        <h2>Lecture 04: DOM Events</h2>
        <ClickTracker />
        <EmailForm />
      </section>
      <section>
        <h2>Lecture 05: Hooks</h2>
        <StatusPreview />
        <FocusInput />
        <DocumentTitle />
        <EscapeMessage />
        <MemoComparison />
        <StepCounter />
      </section>
    </main>
  );
}

export default App;
