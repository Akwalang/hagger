const insertTextAtCursor = (text: string) => {
  const sel = window.getSelection();

  if (!sel || sel.rangeCount === 0) return;

  const range = sel.getRangeAt(0);

  range.deleteContents();

  const lines = text.split("\n");
  const frag = document.createDocumentFragment();

  lines.forEach((line, index) => {
    if (index > 0) frag.appendChild(document.createElement("br"));
    frag.appendChild(document.createTextNode(line));
  });

  const lastChild = frag.lastChild!;
  range.insertNode(frag);

  range.setStartAfter(lastChild);
  range.collapse(true);

  sel.removeAllRanges();
  sel.addRange(range);
};

export const empower = (element: HTMLDivElement): () => void => {
  const handleEnter = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();

      let value = element.innerHTML.endsWith("<br>") ? "\n" : "\n\n";

      insertTextAtCursor(value);
    }
  };

  const handlePaste = (event: ClipboardEvent) => {
    event.preventDefault();

    insertTextAtCursor(
      event.clipboardData?.getData("text/plain") ?? "",
    );
  };

  element.addEventListener("keydown", handleEnter);
  element.addEventListener("paste", handlePaste);

  return () => {
    element.removeEventListener("keydown", handleEnter);
    element.removeEventListener("paste", handlePaste);
  };
};
