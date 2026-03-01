import { PageWrapper, ElementContainer } from "./styles";
import Button from "components/Button/Button";

import Input from "components/Input/Input";

import { useState } from "react";
import type { ChangeEvent } from "react";

function Homework_09() {
  const [noteText, setNoteText] = useState<string>("");
  const [notes, setNotes] = useState<string[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNoteText(event.target.value);
    if (error) setError(undefined);
  };

  const handleAdd = () => {
    const trimmed = noteText.trim();

    if (!trimmed) {
      setError("Введите заметку");
      return;
    }

    setNotes((prev) => [...prev, trimmed]); // старые не удаляются
    setNoteText(""); // очищаем инпут
  };
  return (
    <PageWrapper>
      <h2>Notes</h2>
      <ElementContainer>
        <Input
          id="note_input"
          name="note_input"
          label="Введите заметку"
          placeholder='Например: "Сходить в магазин"'
          value={noteText}
          onChange={handleChange}
          error={error}
        />
      </ElementContainer>
      <ElementContainer>
        <Button name="Add" onClick={handleAdd} />
      </ElementContainer>
      <ul>
        {notes.map((note, index) => (
          <li key={`${note}-${index}`}>{note}</li>
        ))}
      </ul>
    </PageWrapper>
  );
}

export default Homework_09;
