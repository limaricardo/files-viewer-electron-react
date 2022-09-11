import { IconFolder, IconFile, IconFolderOpen } from './Icons'

export const FilesViewer = ({ files, onBack, onOpen }) => (
  <table class="table">
    <tbody>
      <tr className="clickable">
        <td className="icon-row">
          <IconfolderOpen />
        </td>
        <td>...</td>
        <td></td>
      </tr>
      {files.map(({ name, directory, size }) => {
        return (
          <tr className="clickable" onClick={() => directory && onOpen(name)}>
            <td className="icon-row">
              {directory ? <Iconfolder /> : <IconFile />}
            </td>
            <td>{name}</td>
            <td>
              <span className="float-end">{size}</span>
            </td>

          </tr>
        )
      })}
    </tbody>
  </table>
)