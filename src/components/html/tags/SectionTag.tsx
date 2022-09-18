import Tag from "../Tag";

const SectionTag = () => (
  <div className="flex gap-x-4">
    <div className="w-[100px]">
      <Tag tag="section" />
    </div>
    <div className="flex flex-col gap-y-1">
      <div>
        Represents generic standalone section of a document which doesnt have a
        more specific semantic element to represent it. Should always have a
        heading.
      </div>
      <table className="table-auto">
        <tbody className="text-sm">
          <tr>
            <td className="w-32 text-slate-200">Implicit ARIA role</td>
            <td className="px-4 text-sky-400">HTMLMetaElement</td>
          </tr>
          <tr>
            <td className="w-32 text-slate-200">Permitted ARIA roles</td>
            <td className="px-4 text-sky-400">
              alert alerdialog application banner complementary contentinfo
              dialog document feed log main marquee navigation none note
              presentation search status tabpanel
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

export default SectionTag;
