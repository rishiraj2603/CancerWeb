import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./componets/homepage/HomePage";
import Diet from "./componets/Patient’sCorner/LifestyleAndWellBeing/diet/Diet";
import MOG from "./componets/Patient’sCorner/LifestyleAndWellBeing/M_O_G/MOG";
import Exercise from "./componets/Patient’sCorner/LifestyleAndWellBeing/exercise/Exercise";
import Precaution from "./componets/Patient’sCorner/LifestyleAndWellBeing/precaution/Precaution";
import SelfExamination from "./componets/Patient’sCorner/LifestyleAndWellBeing/self-Examination/SelfExamination";
import SideEffect from "./componets/Patient’sCorner/LifestyleAndWellBeing/side-effect/SideEffect";
import Prognosis from "./componets/Patient’sCorner/LifestyleAndWellBeing/prognosis/Prognosis";
import ArmExercise from "./componets/Patient’sCorner/LifestyleAndWellBeing/exercise/ArmExercise";
import UnderstandingCancer from "./componets/UnderstandingCancer/UnderstandingCancer";
import Chemotherapy from "./componets/TreatmentOptions/Chemotherapy";
import RadiationTherapy from "./componets/TreatmentOptions/RadiationTherapy";
import Surgery from "./componets/TreatmentOptions/Surgery";
import AdvancedTreatments from "./componets/TreatmentOptions/AdvancedTreatments";

const App = () => {
  return (
    <div className="m-2">
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/understandingCancer"
            element={<UnderstandingCancer />}
          />
          <Route path="/advancedTreatments" element={<AdvancedTreatments />} />
          <Route path="/surgery" element={<Surgery />} />
          <Route path="/radiationTherapy" element={<RadiationTherapy />} />
          <Route path="/chemotherapy" element={<Chemotherapy />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/MOG" element={<MOG />} />
          <Route path="/precaution" element={<Precaution />} />
          <Route path="/prognosis" element={<Prognosis />} />
          <Route path="/selfExamination" element={<SelfExamination />} />
          <Route path="/sideEffect" element={<SideEffect />} />
          <Route path="/armExercise" element={<ArmExercise />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
