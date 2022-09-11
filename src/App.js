import React, { useState, useMemo } from "react";
import { FilesViewer } from "./FilesViewer";

const fs = window.require("fs");
const pathModule = window.require("path");

const { app } = window.require("@electron/remote");

const formatSize = size => {
  let i = Math.floor(Math.log(size) / Math.log(1024))
  return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    '' + 
    ['B', 'kB', 'MB', 'GB', 'TB'][i]
  )
}

export const App = () => {
  const [path, setPath] = useState(app.getAppPath());

  const files = fs.readdirSync(path).map((file) => {
    const stats = fs.statSync(pathModule.join(path, file))
    return {
      name: file,
      size: stats.isFile() ? formatSize(stats.size ?? 0) : null,
      directory: stats.isDirectory()
    }
  });

  return (
    <div className="container mt-2">
      <div className="form-group mt-4 mb-2"></div>
    </div>
  );
};
