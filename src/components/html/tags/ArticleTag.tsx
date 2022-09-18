import Tag from "../Tag";

const ArticleTag = () => (
  <div className="flex gap-x-4">
    <div className="w-[100px]">
      <Tag tag="article" />
    </div>

    <div className="flex flex-col gap-y-1">
      <div>
        Represents a self-contained composition in a document, page,
        application, or site, which is intended to be independently
        distributable or reusable (e.g., in syndication).
      </div>
      <table className="table-auto">
        <tbody className="text-sm">
          <tr>
            <td className="w-32 text-slate-200">Implicit ARIA role</td>
            <td className="px-4 text-sky-400">article</td>
          </tr>
          <tr>
            <td className="w-32 text-slate-200">Permitted ARIA roles</td>
            <td className="px-4 text-sky-400">
              application document feed main none presentation region
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

export default ArticleTag;
