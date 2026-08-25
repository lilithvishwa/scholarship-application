import { CheckboxGroup, Panel } from "@/shared/ui";

function ScholarshipFilters() {
  return (
    <section className="space-x-8">
      <Panel
        widthClass="w-75"
        paddingClass=""
        className="bg-pale-blue border border-card-border"
      >
        <div className="p-4 flex justify-between items-center border-b border-hairline">
          <h1 className="field-group-heading">Filters</h1>
          <button className="action-button text-action-blue cursor-pointer">
            Clear All
          </button>
        </div>
        <div className="p-4 space-y-8 reference-id">
          <CheckboxGroup
            label="EDUCATION LEVEL"
            options={[
              "High School",
              "Undergraduate",
              "Postgraduate",
              "Research / Ph.D",
            ]}
          />
          <CheckboxGroup
            label="AWARD AMOUNT"
            options={[
              "Under ₹20,000",
              "₹20,000 - ₹50,000",
              "Over ₹50,000",
              "Others",
            ]}
          />
          <CheckboxGroup
            label="DEADLINE"
            options={["Ending in 30 Days", "Ending in 60 Days", "Open"]}
          />
        </div>
      </Panel>
    </section>
  );
}

export default ScholarshipFilters;
