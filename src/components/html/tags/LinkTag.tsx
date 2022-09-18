import Tag from "../Tag";

const LinkTag = () => (
  <div className="flex gap-x-4">
    <Tag tag="link" />
    <div className="flex flex-col gap-y-1">
      <div>
        Specifies relationships between current document and external resources.
      </div>
      <table className="table-auto">
        <tbody className="text-sm">
          <tr>
            <td className="w-32 text-slate-200">Implicit ARIA role</td>
            <td className="px-4 text-sky-400">link with href attribute</td>
          </tr>
          <tr>
            <td className="w-32 text-slate-200">DOM interface</td>
            <td className="px-4 text-sky-400">HTMLLinkElement</td>
          </tr>
          <tr>
            <td className="w-32 text-slate-200">Attributes</td>
            <td className="px-4 text-sky-400">
              as crossorigin href hreflang imagesizes imagesrcset integrity
              media prefetch referrerpolicy rel sizes title type
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default LinkTag;
