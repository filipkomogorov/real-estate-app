import React, { useState } from "react";
import { AdditionalInfo, PropertyData } from "../../models/Property";
import Preview from "./Preview/Preview";
import StepOne from "./StepOne/StepOne";
import StepThree from "./StepThree/StepThree";
import StepTwo from "./StepTwo/StepTwo";

const Wizard: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [propertyData, setPropertyData] = useState<PropertyData>(
    {} as PropertyData
  );
  const [additionalData, setAdditionalData] = useState<AdditionalInfo>(
    {} as AdditionalInfo
  );

  const handleStepNext = () => {
    setStep(step + 1);
  };

  const handleStepBack = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return (
        <>
          <StepOne />
          <button onClick={handleStepNext}>Next</button>
        </>
      );
    case 2:
      return (
        <>
          <StepTwo />
          <button onClick={handleStepBack}>Back</button>
          <button onClick={handleStepNext}>Next</button>
        </>
      );
    case 3:
      return (
        <>
          <StepThree />
          <button onClick={handleStepBack}>Back</button>
          <button onClick={handleStepNext}>Next</button>
        </>
      );
    case 4:
      return (
        <>
          <Preview />
          <button onClick={handleStepBack}>Back</button>
          <button>Submit</button>
        </>
      );
    default:
      return null;
  }
};

export default Wizard;