import Tag from "../Tag";

const MetaTag = () => (
  <div className="flex gap-x-4">
    <div className="w-[100px]">
      <Tag tag="meta" />
    </div>
    <div className="flex flex-col gap-y-1">
      <div>
        Represents metadata that cannot be represented by other HTML
        meta-related elements.
      </div>
      <table className="table-auto">
        <tbody className="text-sm">
          <tr>
            <td className="w-32 text-slate-200">DOM interface</td>
            <td className="px-4 text-sky-400">HTMLMetaElement</td>
          </tr>
          <tr>
            <td className="w-32 text-slate-200">Attributes</td>
            <td className="px-4 text-sky-400">
              name content http-equiv charset
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default MetaTag;
