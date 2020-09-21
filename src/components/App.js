import React, {useState,useEffect} from 'react';
import Editor from './Editor';
function App() {
  const [html, setHTML] = useState('');
  const [css, setCSS] = useState('');
  const [javascript, setScript] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(()=>{
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');
            body{
              font-family: "Poppins", sans-serif;
            }
            ${css}
          </style>
          <script>${javascript}</script>
        </html>
      `)
    },250);
    return ()=> clearTimeout(timeout);
  }, [html,css,javascript]);

 
  return (
    <>
      <div className="pane top-pane">
        <Editor 
          language="xml" 
          displayName="HTML" 
          value= {html}
          onChange={setHTML}
        />
        <Editor 
          language="css" 
          displayName="CSS" 
          value= {css}
          onChange={setCSS}
        />
        <Editor 
          language="javascript" 
          displayName="JavaScript" 
          value= {javascript}
          onChange={setScript}
        />

      </div> 
      <div className="pane">
        <iframe 
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0" 
          width="100%"
          height="100%"
        >
        </iframe>
      </div>
    </>
  );
}

export default App;
