import React, { useContext } from "react";
import "./App.css";
import "./Styles/Step.css";
import FirstStep from "./Components/FirstStep";
import SecondStep from "./Components/SecondStep";
import ThirdStep from "./Components/ThirdStep";
import FourStep from "./Components/FourStep";
import FiveStep from "./Components/FiveStep";
import SecondInFirst from "./Components/SecondInFirst";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import { multiStepContext } from "./StepContext";
import Footer from "./Components/Footer";
import HeadingUtama from "./Components/HeadingUtama";
import StepperBox from "./Components/StepperBox";
// import getMuiTheme from "material-ui/styles/getMuiTheme";
// import DisplayData from "./Components/DisplayData";

function App() {
  const { currentStep, finalData } = useContext(multiStepContext);
  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 1.1:
        return <SecondInFirst />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      case 4:
        return <FourStep />;
      case 5:
        return <FiveStep />;
    }
  }

  return (
    <div className="App">
      <HeadingUtama />
      <header className="App-header">
        <div style={{ width: "60%", textAlign: "left" }}>
          <h3
            style={{
              color: "black",
              textDecoration: "bold",
              marginTop: "130px",
              marginBottom: "50px",
            }}
          >
            Pengajuan KPR Bank Muamalat
          </h3>
        </div>
        <StepperBox />
        <div className="center-stepper">
          <Stepper
            style={{ width: "60vw" }}
            activeStep={currentStep - 1}
            orientation="horizontal"
            alternativeLabel
          >
            {/* <div className="step-wrapper">
              <div className="step-number">1</div>
              <div className="step-description">Data Pengajuan</div>
              <div className="divider-line"></div>
            </div>
            <div className="step-wrapper">
              <div className="step-number">2</div>
              <div className="step-description">Data Agunan</div>
              <div className="divider-line"></div>
            </div>
            <div className="step-wrapper">
              <div className="step-number">3</div>
              <div className="step-description">Data Diri dan Keluarga</div>
              <div className="divider-line"></div>
            </div>
            <div className="step-wrapper">
              <div className="step-number">4</div>
              <div className="step-description">Data Pekerjaan</div>
              <div className="divider-line"></div>
            </div>
            <div className="step-wrapper">
              <div className="step-number">5</div>
              <div className="step-description">Data Pembiayaan</div>
              <div className="divider-line"></div>
            </div> */}
            <Step>
              <StepLabel>Data Pengajuan</StepLabel>
            </Step>
            <Step>
              <StepLabel>Data Agunan</StepLabel>
            </Step>
            <Step>
              <StepLabel>Data Diri dan Keluarga</StepLabel>
            </Step>
            <Step>
              <StepLabel>Data Pekerjaan</StepLabel>
            </Step>
            <Step>
              <StepLabel>Data Pembiayaan</StepLabel>
            </Step>
          </Stepper>
        </div>
        {showStep(currentStep)}
      </header>
      <Footer />
    </div>
  );
}

export default App;
