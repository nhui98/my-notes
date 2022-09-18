import Tag from "../Tag";

const BaseTag = () => (
  <div className="flex gap-x-4">
    <Tag tag="base" />
    <div className="flex flex-col gap-y-1">
      <div>
        Base URL to use for all relative URLs in a document. Only one{" "}
        {<Tag tag="base" />} allowed in a document. <br />
        If no {<Tag tag="base" />} then baseURI defaults to{" "}
        <span className="text-sky-400">location.href</span>
      </div>
      <table className="table-auto">
        <tbody className="text-sm">
          <tr>
            <td className="w-32 text-slate-200">DOM Interface</td>
            <td className="px-4 text-sky-400">HTMLBaseElement</td>
          </tr>
          <tr>
            <td className="w-32 text-slate-200">Attributes</td>
            <td className="px-4 text-sky-400">href target</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default BaseTag;
