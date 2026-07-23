import {
  BuilderHeader,
  FormSidebar,
  PropertiesPanel,
  Canvas,
} from "../components";

function BuilderPage() {
  return (
    <div className="flex h-screen flex-col bg-white">
      <BuilderHeader />

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-69.75 shrink-0 border-r border-hairline overflow-y-auto">
          <FormSidebar />
        </aside>

        {/* Canvas */}
        <main className="flex-1 overflow-y-auto">
          <Canvas />
        </main>

        {/* Right Properties */}
        <aside className="w-79.75 shrink-0 overflow-y-auto border-l border-hairline">
          <PropertiesPanel />
        </aside>
      </div>
    </div>
  );
}

export default BuilderPage;
