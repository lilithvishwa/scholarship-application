import { IconButton } from "@/shared/ui";
import {
  TemplatesListSection,
  PreviewTemplate,
  PreviewEmptystate,
} from "../formbuilder/components";
import { useNavigate } from "react-router-dom";

function TemplateSelectionPage() {
  const navigate = useNavigate();
  return (
    <section className="flex gap-4 py-8 px-10 h-screen justify-between bg-white">
      <div className="space-y-6 w-full h-full overflow-y-scroll scrollbar-hide">
        <div>
          <IconButton
            icon="ic:baseline-arrow-back"
            size={15}
            buttonName="Back to Selection"
            onClick={() => navigate("/scholarship/create")}
          />
          <h1 className="page-heading pt-5">Select a Template</h1>
          <p className="body-large text-instructions">
            Choose a past scholarship to copy its application form structure.
          </p>
        </div>

        <TemplatesListSection />
      </div>
      <div className="sticky top-0 flex flex-col justify-between w-4xl h-[90%] border border-hairline">
        <PreviewTemplate />
        {/*<PreviewEmptystate />*/}
      </div>
    </section>
  );
}

export default TemplateSelectionPage;
