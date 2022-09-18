import Tag from "../Tag";

const AddressTag = () => (
  <div className="flex gap-x-4">
    <div className="w-[100px]">
      <Tag tag="address" />
    </div>

    <div className="flex flex-col gap-y-1">
      <div>
        Indicates that the enclosed HTML provides contact information for a
        person or people, or for an organization.
      </div>
      <table className="table-auto">
        <tbody className="text-sm">
          <tr>
            <td className="w-32 text-slate-200">DOM interface</td>
            <td className="px-4 text-sky-400">HTMLElement</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default AddressTag;
