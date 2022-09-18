import Tag from "../Tag";

const HeadingsTag = () => (
  <div className="flex gap-x-4">
    <div className="w-[100px]">
      <Tag tag="h1" />
      <Tag tag="h2" />
      <Tag tag="h3" />
      <Tag tag="h4" />
      <Tag tag="h5" />
      <Tag tag="h6" />
    </div>

    <div className="flex flex-col gap-y-1">
      <div>
        Represents six levels of section headings. <Tag tag="h1" />
        is the highest section level and <Tag tag="h6" /> is the lowest.
      </div>
      <table className="table-auto">
        <tbody className="text-sm">
          <tr>
            <td className="w-32 text-slate-200">Implicit ARIA role</td>
            <td className="px-4 text-sky-400">heading</td>
          </tr>
          <tr>
            <td className="w-32 text-slate-200">Permitted ARIA roles</td>
            <td className="px-4 text-sky-400">tab presentation none</td>
          </tr>
          <tr>
            <td className="w-32 text-slate-200">DOM interface</td>
            <td className="px-4 text-sky-400">HTMLHeadingElement</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default HeadingsTag;
