import Tag from "../Tag";

const NavTag = () => (
  <div className="flex gap-x-4">
    <div className="w-[100px]">
      <Tag tag="nav" />
    </div>
    <div className="flex flex-col gap-y-1">
      <div>
        Represents a section of a page whose purpose is to provide navigation
        links, either within the current document or to other documents.
      </div>
      <table className="table-auto">
        <tbody className="text-sm">
          <tr>
            <td className="w-32 text-slate-200">Implicit ARIA role</td>
            <td className="px-4 text-sky-400">navigation</td>
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

export default NavTag;
