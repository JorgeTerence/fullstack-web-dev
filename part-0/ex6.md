# Submitting note in SPA

```mermaid
sequenceDiagram
  participant browser
  participant server
  
  Note right of browser: User clicks the "save" button
  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  
  activate server
  Note left of server: Appends new note
  server-->>browser: data.json
  deactivate server
  
  Note right of browser: Callback function rerenders notes
```
