import Tag from "../Tag";

const BodyTag = () => (
  <div className="flex gap-x-4">
    <Tag tag="body" />
    <div className="flex flex-col gap-y-1">
      <div>Represents the content of a HTML document.</div>
      <table className="table-auto">
        <tbody className="text-sm">
          <tr>
            <td className="w-32 text-slate-200">DOM Interface</td>
            <td className="px-4 text-sky-400">HTMLBodyElement</td>
          </tr>
          <tr>
            <td className="w-32 text-slate-200">Attributes</td>
            <td className="px-4 text-sky-400">
              onblur onfocus onerror onload onunload onresize
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default BodyTag;
