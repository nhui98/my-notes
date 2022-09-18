import Tag from "../Tag";

const TitleTag = () => (
  <div className="flex gap-x-4">
    <div className="w-[100px]">
      <Tag tag="title" />
    </div>
    <div className="flex flex-col gap-y-1">
      <div>
        Defines document&apos;s title shown in browser&apos;s title bar or a
        page&apos;s tab. Only contains text, ignores tags.
      </div>
      <table className="table-auto">
        <tbody className="text-sm">
          <tr>
            <td className="w-32 text-slate-200">DOM interface</td>
            <td className="px-4 text-sky-400">HTMLTitleElement</td>
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

export default TitleTag;
