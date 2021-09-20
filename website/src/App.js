import React, { useContext } from "react";
import "./App.css";
import "./Styles/Step.css";
import FirstStep from "./Components/FirstStep";
import SecondStep from "./Components/SecondStep";
import ThirdStep from "./Components/ThirdStep";
import FourStep from "./Components/FourStep";
import FiveStep from "./Components/FiveStep";
import Properti from "./Components/Properti";
import TakeOver from "./Components/TakeOver";
import PembiayaanKBP from "./Components/PembiayaanKBP";
import UploadDokumen from "./Components/UploadDokumen";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import { multiStepContext } from "./StepContext";
import Footer from "./Components/Footer";
import HeadingUtama from "./Components/HeadingUtama";
import StepperBox from "./Components/StepperBox";
import { StepperButton } from "./Components/Button";
// import getMuiTheme from "material-ui/styles/getMuiTheme";
// import DisplayData from "./Components/DisplayData";

import useToken from "./Token/useToken";

function App() {
  const { page, setPage } = useContext(multiStepContext);
  const { token, setToken } = useToken();

  function showPage(page) {
    switch (page) {
      case 1:
        return <PagePengajuanDiri />;
      case 2:
        return <FormUploadDoc />;
      case 3:
        return <div>Page 3</div>;
    }
  }

  return (
    <div className="App">
      <HeadingUtama />
      <div className="App-header">
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
        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <StepperButton
            title="Pengisian Data"
            idPage={1}
            currentPage={page}
            onClick={() => setPage(1)}
          />
          <StepperButton
            title="Upload Dokumen"
            idPage={2}
            currentPage={page}
            onClick={() => setPage(2)}
          />
          <StepperButton
            title="Ringkasan"
            idPage={3}
            currentPage={page}
            onClick={() => setPage(3)}
          />
        </div>
        {showPage(page)}
      </div>
      <Footer />
    </div>
  );
}

const PagePengajuanDiri = () => {
  const { stepDataDiri } = useContext(multiStepContext);

  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep />;
      // return <ThirdStep />;
      case "Properti":
        return <Properti />;
      case "Top Up":
      case "Take Over":
      case "Take Over + Top Up":
        return <TakeOver />;
      case "Pembiayaan Konsumsi Beragun Properti":
        return <PembiayaanKBP />;
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
    <>
      <div className="center-stepper">
        <Stepper
          style={{ width: "60vw", background: "#FBFBFB" }}
          activeStep={stepDataDiri - 1}
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
      {showStep(stepDataDiri)}
    </>
  );
};

const FormUploadDoc = () => {
  return <UploadDokumen />;
};

const Ringkasan = () => {
  return <FirstStep />;
};

export default App;
