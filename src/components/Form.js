import { Radio } from "antd";
import { useState } from "react";
import LPTokenForm from "./LPTokenForm";
import StandardTokenForm from "./StandardTokenForm";

const FormSettingFee = () => {
  const [tokenType, setTokenType] = useState("LP");
  const [showLPForm, setShowLPForm] = useState(true);
  const [showStandardForm, setShowStandardForm] = useState(false);

  const handleLPButtonClick = () => {
    setTokenType("LP");
    setShowLPForm(true);
    setShowStandardForm(false);
  };

  const handleStandardButtonClick = () => {
    setTokenType("Standard");
    setShowLPForm(false);
    setShowStandardForm(true);
  };
  return (
    <>
      <Radio.Group name="requiredTokenValue">
        <Radio.Button onClick={handleLPButtonClick} value="LP Token">
          LP Token
        </Radio.Button>
        <Radio.Button onClick={handleStandardButtonClick} value="Standard Token">
          Standard Token
        </Radio.Button>
      </Radio.Group>

      {tokenType === "LP" && showLPForm && <LPTokenForm/>}

      {tokenType === "Standard" && showStandardForm && <StandardTokenForm/>}
    </>
  );
};
export default FormSettingFee;
