import { Panel } from "@/shared/ui";
import FamilyDetailsForm from "../components/CompleteYourProfile/FamilyDetailsForm";

function FamilyFinancePage() {
  return (
    <section className="flex items-center justify-center px-10 py-8 gap-6">
      <Panel widthClass="w-175">
        <div className="flex flex-col text-center items-center gap-2 ">
          <h1 className=" form-step-heading">Family & Financial Details</h1>
          <p className="body-large text-instructions">
            This information is strictly confidential and is used solely to
            match you with need-based Scholarships.
          </p>
        </div>
        <FamilyDetailsForm />
      </Panel>
    </section>
  );
}

export default FamilyFinancePage;
