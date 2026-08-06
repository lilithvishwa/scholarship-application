import { Panel } from "@/shared/ui";
import CreateScholarshipForm from "../components/CreateScholarshipForm";

function CreateScholarshipPage() {
  return (
    <section className="flex min-h-full items-center justify-center px-10 py-8">
      <Panel widthClass="w-175">
        <CreateScholarshipForm />
      </Panel>
    </section>
  );
}

export default CreateScholarshipPage;
