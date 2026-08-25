import { Icon, ScholarshipCard, Select } from "@/shared/ui";
import ScholarshipFilters from "../components/ScholarshipFilters";
import { useState } from "react";
import { ScholarshipDetails } from "@/features/dashboard/dummyData/scholarshipDetailsData";

function ExploreScholarshipsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(ScholarshipDetails.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;

  const endIndex = startIndex + cardsPerPage;

  const currentScholarships = ScholarshipDetails.slice(startIndex, endIndex);

  return (
    <div className="p-4  ">
      <div className="flex gap-4">
        <ScholarshipFilters />
        <div className="space-y-4 w-full">
          <div className="flex justify-between">
            <h1 className="application-card-heading">
              Showing {ScholarshipDetails.length} results for Engineering
            </h1>
            <Select
              placeholder="Sort by: Relevance"
              options={[
                { label: "Relevance", value: "relevance" },
                { label: "Date Posted", value: "date_posted" },
                { label: "Name", value: "name" },
                { label: "Location", value: "location" },
              ]}
            />
          </div>
          {currentScholarships.map((scholarship) => (
            <ScholarshipCard scholarship={scholarship} key={scholarship.id} />
          ))}
          <div className="font-public flex items-center justify-center gap-5 ">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((page) => page - 1)}
              className="flex items-center gap-1 disabled:opacity-50"
            >
              <Icon name="icon-park-outline:left" size={15} />
              <span>Prev</span>
            </button>
            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={
                    currentPage === page
                      ? "text-action-blue underline underline-offset-4"
                      : "text-body-muted"
                  }
                >
                  {page}
                </button>
              ),
            )}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((page) => page + 1)}
              className="flex items-center gap-1 disabled:opacity-50"
            >
              <span>Next</span>
              <Icon name="icon-park-outline:right" size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreScholarshipsPage;
