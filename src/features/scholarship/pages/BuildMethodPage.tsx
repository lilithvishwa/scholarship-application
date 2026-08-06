import { Button, Panel, Icon } from "@/shared/ui";
import { StepFooter } from "../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type FormCanvasMethod = "scratch" | "duplicate" | "ai";

interface Canva {
  canvaMethod: FormCanvasMethod;
  title: string;
  description: string;
  icon: string;
}

const paths = {
  scratch: "/scholarship/create",
  duplicate: "/forms/templates",
  ai: "/generate-ai",
};

function BuildMethodPage() {
  const [selectedMethod, setSelectedMethod] =
    useState<FormCanvasMethod>("scratch");
  console.log(selectedMethod);
  const navigate = useNavigate();

  const items: Canva[] = [
    {
      canvaMethod: "scratch",
      title: "Start From Scratch",
      description:
        "Open a blank canvas and build your application form block by block.",
      icon: "mingcute:add-fill",
    },
    {
      canvaMethod: "duplicate",
      title: "Duplicate Existing",
      description: "Clone a previous semester's scholarship form to save time.",
      icon: "material-symbols:content-copy-outline-rounded",
    },
    {
      canvaMethod: "ai",
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
          {items.map((item) => {
            const isActive = item.canvaMethod === selectedMethod;
            return (
              <button
                key={item.canvaMethod}
                onClick={() => setSelectedMethod(item.canvaMethod)}
                className={` w-full flex flex-col border  rounded-sm p-4 gap-3 items-center text-center  cursor-pointer ${isActive ? "bg-light-blue  border-action-blue" : "border-hairline"}`}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-sm  bg-pale-blue">
                  <Icon
                    name={item.icon}
                    size={24}
                    className={` ${isActive ? "text-action-blue" : "text-body-muted"}`}
                  />
                </div>
                <h1 className="font-public font-bold ">{item.title}</h1>
                <p className="caption text-body-muted">{item.description}</p>
              </button>
            );
          })}
        </div>
        <StepFooter
          step="Step 2 of 2"
          action={
            <Button
              fullWidth={false}
              className="px-8 py-4 cursor-pointer"
              children="Continue"
              onClick={() => navigate(paths[selectedMethod])}
            />
          }
        />
      </Panel>
    </section>
  );
}

export default BuildMethodPage;
