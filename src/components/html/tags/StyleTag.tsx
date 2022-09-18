import Tag from "../Tag";

const StyleTag = () => (
  <div className="flex gap-x-4">
    <div className="w-[100px]">
      <Tag tag="style" />
    </div>
    <div className="flex flex-col gap-y-1">
      <div>Contains style information for a document.</div>
      <table className="table-auto">
        <tbody className="text-sm">
          <tr>
            <td className="w-32 text-slate-200">Permitted Content</td>
            <td className="px-4 text-sky-400">Text content of type text/css</td>
          </tr>
          <tr>
            <td className="w-32 text-slate-200">DOM interface</td>
            <td className="px-4 text-sky-400">HTMLStyleElement</td>
          </tr>
          <tr>
            <td className="w-32 text-slate-200">Attributes</td>
            <td className="px-4 text-sky-400">media title</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default StyleTag;
