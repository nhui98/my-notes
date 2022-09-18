import Tag from "../Tag";

const AsideTag = () => (
  <div className="flex gap-x-4">
    <div className="w-[100px]">
      <Tag tag="aside" />
    </div>
    <div className="flex flex-col gap-y-1">
      <div>
        Represents a portion of a document whose content is only indirectly
        related to the document&apos;s main content.
      </div>
      <table className="table-auto">
        <tbody className="text-sm">
          <tr>
            <td className="w-32 text-slate-200">Implicit ARIA role</td>
            <td className="px-4 text-sky-400">complementary</td>
          </tr>
          <tr>
            <td className="w-32 text-slate-200">Permitted ARIA roles</td>
            <td className="px-4 text-sky-400">
              feed none note presentation region search
            </td>
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

export default AsideTag;
