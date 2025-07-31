"use client";

import Editor from "@monaco-editor/react";

export default function CodeEditor({ code, setCode }: any) {
  return (
    <Editor
      height="200px"
      language="cpp"
      theme="vs-dark"
      value={code}
      onChange={(value) => setCode(value || "")}
    />
  );
}