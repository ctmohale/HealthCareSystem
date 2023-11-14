import { IonButton, IonInput, IonItem } from "@ionic/react";
import React from "react";
import { useState } from "react";
function MedicalData() {
  //Medical data
  const [condition, setCondition]: any = useState();
  const [allergies, setAllergies]: any = useState();
  const [surgeries, setSurgeries]: any = useState();
  const [medications, setMedications]: any = useState();

  //Update data function
  async function updateMedicalData() {}


  return (
    <>
      {" "}

    </>
  );
}

export default MedicalData;
