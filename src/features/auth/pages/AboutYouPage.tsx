import PanelCard from "@/shared/ui/Cards/Panel";
import AboutYouForm from "../components/CompleteYourProfile/AboutYouForm";

function AboutYouPage() {
  return (
    <section className="flex items-center justify-center py-8 px-10">
      <PanelCard widthClass="w-175">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="form-step-heading">About You</h1>
          <p className="body-large text-instructions text-center">
            Complete your personal profile to personalize your experience. Your
            information helps us provide relevant opportunities.
          </p>
        </div>
        <AboutYouForm />
      </PanelCard>
    </section>
  );
}

export default AboutYouPage;
