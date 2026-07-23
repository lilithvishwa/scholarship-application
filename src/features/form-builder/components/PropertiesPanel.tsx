import { Input, ToggleSwitch } from "@shared/ui";
import { useState } from "react";

function PropertiesPanel() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="w-79.75 p-6 flex flex-col gap-8 ">
      <div className="w-67.75 flex flex-col gap-6 ">
        <p className="body">PROPERTIES</p>
        <Input label="FIELD LABEL" placeholder="Email Address" />

        <span>
          <label className="caption text-body-muted ">HELPER TEXT</label>
          <textarea
            placeholder="Income Certificate"
            className="w-full h-22 border border-hairline px-4 py-3 outline-none placeholder:text-body-muted mt-2"
          />
        </span>
        <div className="flex items-center justify-between">
          <label className="caption text-body-muted">REQUIRED FIELD</label>
          <ToggleSwitch checked={enabled} onChange={setEnabled} />
        </div>
      </div>

      <hr className="border border-hairline" />

      <div className="w-67.75 flex flex-col gap-6  ">
        <p className="body">VALIDATION RULES</p>
        <span>
          <label className="caption text-body-muted">FORMAT</label>
          <select className="w-full h-12 border border-hairline px-4 outline-none mt-2 ">
            <option value="text">Any Text</option>
            <option value="email">Email</option>
            <option value="number">Number</option>
            <option value="date">Date</option>
          </select>
        </span>
        <Input label="MINIMUM LENGTH" placeholder="3" />
        <Input label="MAXIMUM LENGTH" placeholder="Auto" />
      </div>
    </div>
  );
}

export default PropertiesPanel;
