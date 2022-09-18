import Tag from "../Tag";

const HeaderTag = () => (
  <div className="flex gap-x-4">
    <div className="w-[100px]">
      <Tag tag="header" />
    </div>
    <div className="flex flex-col gap-y-1">
      <div>
        Represents introductory content, typically a group of introductory or
        navigational aids.
      </div>
      <table className="table-auto">
        <tbody className="text-sm">
          <tr>
            <td className="w-32 text-slate-200">Implicit ARIA role</td>
            <td className="px-4 text-sky-400">banner, no corresponsing role</td>
          </tr>
          <tr>
            <td className="w-32 text-slate-200">Permitted ARIA roles</td>
            <td className="px-4 text-sky-400">group presentation none</td>
          </tr>
          <tr>
            <td className="w-32 text-slate-200">DOM interface</td>
            <td className="px-4 text-sky-400">HTMLElement</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default HeaderTag;
