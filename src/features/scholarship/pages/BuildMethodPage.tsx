import { Button, Panel, Icon } from "@/shared/ui";
import { StepFooter } from "../components";

function BuildMethodPage() {
  const items = [
    {
      title: "Start From Scratch",
      description:
        "Open a blank canvas and build your application form block by block.",
      icon: "mingcute:add-fill",
    },
    {
      title: "Duplicate Existing",
      description: "Clone a previous semester's scholarship form to save time.",
      icon: "material-symbols:content-copy-outline-rounded",
    },
    {
      title: "Generate with AI",
      description:
        "Let AI draft your form automatically based on your eligibility criteria",
      icon: "mingcute:ai-line",
    },
  ];
  return (
    <section className="flex min-h-full items-center justify-center px-10 py-8">
      <Panel widthClass={`w-212.5`}>
        <div className="flex flex-col gap-2">
          <h1 className="form-step-heading  text-center">
            How would you like to build this application?
          </h1>
          <p className="body-large text-body-muted text-center">
            Choose a starting point for your form canvas.
          </p>
        </div>
        <div className=" flex gap-6 ">
          {items.map((item, index) => (
            <button
              key={index}
              className={`group w-full flex flex-col border border-hairline rounded-sm p-4 gap-3 items-center text-center hover:bg-light-blue hover:border-action-blue `}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-sm  bg-pale-blue">
                <Icon
                  name={item.icon}
                  size={24}
                  className="text-body-muted group-hover:text-action-blue"
                />
              </div>
              <h1 className="font-public font-bold ">{item.title}</h1>
              <p className="caption text-body-muted">{item.description}</p>
            </button>
          ))}
        </div>
        {/*<hr className="text-[#C8C5CB]" />
        <div className="flex items-center justify-between">
          <p className="disclaimer-text text-muted">Step 2 of 2</p>
          <Button
            fullWidth={false}
            className="px-8 py-4 cursor-pointer"
            children="Continue"
          />*/}
        {/*</div>*/}

        <StepFooter
          step="Step 2 of 2"
          action={
            <Button
              fullWidth={false}
              className="px-8 py-4 cursor-pointer"
              children="Continue"
            />
          }
        />
      </Panel>
    </section>
  );
}

export default BuildMethodPage;
