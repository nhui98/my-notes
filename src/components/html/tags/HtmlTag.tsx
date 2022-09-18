import Tag from "../Tag";

const HtmlTag = () => (
  <div className="flex gap-x-4">
    <Tag tag="html" />
    <div className="flex w-full flex-col gap-y-1">
      <div>Root element of a HTML document.</div>
      <table className="table-auto">
        <tbody className="text-sm">
          <tr>
            <td className="w-32 text-slate-200">Implicit ARIA role</td>
            <td className="px-4 text-sky-400">document</td>
          </tr>
          <tr>
            <td className="w-32 text-slate-200">DOM interface</td>
            <td className="px-4 text-sky-400">HTMLHtmlElement</td>
          </tr>
          <tr>
            <td className="w-32 text-slate-200">Attributes</td>
            <td className="px-4 text-sky-400">lang</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default HtmlTag;
