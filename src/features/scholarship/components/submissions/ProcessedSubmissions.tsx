import { TableToolbar, Select } from "@/shared/ui";

function ProcessedSubmissons() {
  return (
    <div className="space-y-4">
      <TableToolbar
        filters={
          <>
            <Select
              label="College"
              options={[
                { value: "all", label: "All" },
                {
                  value: "uce",
                  label: "University of Engineering",
                },
                {
                  value: "abc",
                  label: "ABC College",
                },
              ]}
              value={"all"}
              // onChange={setCollege}
              className="w-50"
            />
          </>
        }
      />
    </div>
  );
}

export default ProcessedSubmissons;
