import React, { useEffect } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import MonacoEditor, { useMonaco } from "@monaco-editor/react";

export const Editor = ({ onChange, value, name }: { onChange: any; value: string; name: string }) => {
  const isCode = name === 'code'
  const monaco = useMonaco()

  useEffect(() => {
    // do conditional chaining
    if (monaco) {
      const lib = ''
      const uri = monaco?.Uri.file("dir/facts.d.ts") || '';
      monaco?.languages.typescript.typescriptDefaults.addExtraLib(lib, uri.toString());
      monaco?.editor.createModel(lib, "typescript", uri);
      monaco?.languages.typescript.typescriptDefaults.setEagerModelSync(true);
      monaco?.languages.typescript.typescriptDefaults.addExtraLib(`
      import { libEbmeds } from '@duodecim/engine/src/script-libs'
      export = libEbmeds;
      export as namespace libEbmeds;
    `, 'global.d.ts');
    }
  }, [monaco]);
   return <MonacoEditor
       width="auto"
       height="800px"
       theme="vs-dark"
       defaultLanguage="javascript"
       options={{
        language: 'javascript',
        formatOnType: true,
      }}
       value={value}
       language={'javascript'}
       onChange={(value) => {
         onChange({ target: { name, value } });
        }}
     />
 }


