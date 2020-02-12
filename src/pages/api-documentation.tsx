import React, { useEffect, useState } from "react";
import Documentation from "@open-rpc/docs-react";
import { useStaticQuery, graphql } from "gatsby";
import useDarkMode from "use-dark-mode";
import "./api-documentation.css";
import InspectorPlugin from "../docs-react-plugins";
import * as monaco from "monaco-editor";

const ApiDocumentation: React.FC = () => {
  const darkmode = useDarkMode();
  useEffect(() => {
    const t = darkmode.value ? "vs-dark" : "vs";
    if (monaco) {
      monaco.editor.setTheme(t);
    }
    setReactJsonOptions({
      ...reactJsonOptions,
      theme: darkmode.value ? "summerfruit" : "summerfruit:inverted",
    });
  }, [darkmode.value]);
  const [reactJsonOptions, setReactJsonOptions] = useState({
    theme: "summerfruit:inverted",
    collapseStringsAfterLength: 25,
    displayDataTypes: false,
    displayObjectSize: false,
    indentWidth: 2,
    name: false,
  });
  const openrpcQueryData = useStaticQuery(graphql`
    query {
      openrpcDocument {
        id
        openrpcDocument
      }
    }
  `);

  return (
    <>
      <Documentation
        methodPlugins={[InspectorPlugin]}
        reactJsonOptions={reactJsonOptions}
        schema={JSON.parse(openrpcQueryData.openrpcDocument.openrpcDocument)}
      />
    </>
  );

};

export default ApiDocumentation;
