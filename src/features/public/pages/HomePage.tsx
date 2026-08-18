import { Input, Icon, Button } from "@/shared/ui";

function HomePage() {
  return (
    <div className="h-full w-full">
      <section className="flex w-full flex-col items-center px-6 py-20 text-center">
        <center className="space-y-8 w-238">
          <h1 className="portal-hero">
            Unlock Your Future with the Right Scholarship
          </h1>
          <p className="body-large text-body-muted w-199">
            Discover thousands of merit and need-based scholarships. Search,
            match, and apply all in one centralized portal.
          </p>
          <span className="flex gap-2 max-w-2xl">
            <div className="w-full">
              <Input
                leftIcon={<Icon name="material-symbols:search" size={24} />}
                placeholder="Search by keyword, field of study, or organization..."
              />
            </div>
            <Button
              fullWidth={false}
              paddingClass="py-3.2 px-8"
              className="shrink-0"
            >
              Find Scholarships
            </Button>
          </span>
        </center>
      </section>
      <div className="bg-white w-full px-20 py-8">
        <h1 className="page-heading">Featured Opportunities</h1>
        <p className="body-large text-muted h-screen">
          Browse the latest funding opportunities actively accepting
          applications.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
