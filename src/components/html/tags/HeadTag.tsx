import Tag from "../Tag";

const HeadTag = () => (
  <div className="flex gap-x-4">
    <div className="w-[100px]">
      <Tag tag="head" />
    </div>

    <div className="flex flex-col gap-y-1">
      <div>
        Contains machine-readable information (metadata) about the document.
      </div>
      <table className="table-auto">
        <tbody className="text-sm">
          <tr>
            <td className="w-32 text-slate-200">DOM Interface</td>
            <td className="px-4 text-sky-400">HTMLHeadElement</td>
          </tr>
          <tr>
            <td className="w-32 text-slate-200">Can Contain</td>
            <td className="px-4 text-sky-400">
              <Tag tag="title" /> <Tag tag="base" /> <Tag tag="link" />{" "}
              <Tag tag="style" /> <Tag tag="meta" /> <Tag tag="script" />{" "}
              <Tag tag="noscript" /> <Tag tag="template" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default HeadTag;
