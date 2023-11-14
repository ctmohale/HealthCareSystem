/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      surname
      email
      password
      address
      postal_code
      id_number
      cell_phone_no
      access_type
      biometricdata {
        items {
          id
          data
          status
          user_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      patient {
        items {
          id
          user_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      appointment {
        items {
          id
          appointmentDate
          status
          notes
          user_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      surname
      email
      password
      address
      postal_code
      id_number
      cell_phone_no
      access_type
      biometricdata {
        items {
          id
          data
          status
          user_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      patient {
        items {
          id
          user_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      appointment {
        items {
          id
          appointmentDate
          status
          notes
          user_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      surname
      email
      password
      address
      postal_code
      id_number
      cell_phone_no
      access_type
      biometricdata {
        items {
          id
          data
          status
          user_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      patient {
        items {
          id
          user_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      appointment {
        items {
          id
          appointmentDate
          status
          notes
          user_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBiometricData = /* GraphQL */ `
  mutation CreateBiometricData(
    $input: CreateBiometricDataInput!
    $condition: ModelBiometricDataConditionInput
  ) {
    createBiometricData(input: $input, condition: $condition) {
      id
      data
      status
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBiometricData = /* GraphQL */ `
  mutation UpdateBiometricData(
    $input: UpdateBiometricDataInput!
    $condition: ModelBiometricDataConditionInput
  ) {
    updateBiometricData(input: $input, condition: $condition) {
      id
      data
      status
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBiometricData = /* GraphQL */ `
  mutation DeleteBiometricData(
    $input: DeleteBiometricDataInput!
    $condition: ModelBiometricDataConditionInput
  ) {
    deleteBiometricData(input: $input, condition: $condition) {
      id
      data
      status
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createAppointment = /* GraphQL */ `
  mutation CreateAppointment(
    $input: CreateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    createAppointment(input: $input, condition: $condition) {
      id
      appointmentDate
      status
      notes
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAppointment = /* GraphQL */ `
  mutation UpdateAppointment(
    $input: UpdateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    updateAppointment(input: $input, condition: $condition) {
      id
      appointmentDate
      status
      notes
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAppointment = /* GraphQL */ `
  mutation DeleteAppointment(
    $input: DeleteAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    deleteAppointment(input: $input, condition: $condition) {
      id
      appointmentDate
      status
      notes
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createAdmin = /* GraphQL */ `
  mutation CreateAdmin(
    $input: CreateAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    createAdmin(input: $input, condition: $condition) {
      id
      name
      surname
      email
      password
      access_type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAdmin = /* GraphQL */ `
  mutation UpdateAdmin(
    $input: UpdateAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    updateAdmin(input: $input, condition: $condition) {
      id
      name
      surname
      email
      password
      access_type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAdmin = /* GraphQL */ `
  mutation DeleteAdmin(
    $input: DeleteAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    deleteAdmin(input: $input, condition: $condition) {
      id
      name
      surname
      email
      password
      access_type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMedicalRecords = /* GraphQL */ `
  mutation CreateMedicalRecords(
    $input: CreateMedicalRecordsInput!
    $condition: ModelMedicalRecordsConditionInput
  ) {
    createMedicalRecords(input: $input, condition: $condition) {
      id
      report_text
      doctor_name
      appointment_date
      medical_report_status
      patient_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMedicalRecords = /* GraphQL */ `
  mutation UpdateMedicalRecords(
    $input: UpdateMedicalRecordsInput!
    $condition: ModelMedicalRecordsConditionInput
  ) {
    updateMedicalRecords(input: $input, condition: $condition) {
      id
      report_text
      doctor_name
      appointment_date
      medical_report_status
      patient_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMedicalRecords = /* GraphQL */ `
  mutation DeleteMedicalRecords(
    $input: DeleteMedicalRecordsInput!
    $condition: ModelMedicalRecordsConditionInput
  ) {
    deleteMedicalRecords(input: $input, condition: $condition) {
      id
      report_text
      doctor_name
      appointment_date
      medical_report_status
      patient_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPatient = /* GraphQL */ `
  mutation CreatePatient(
    $input: CreatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    createPatient(input: $input, condition: $condition) {
      id
      user_id
      prescription {
        items {
          id
          patient_name
          medication_name
          dosage
          doctor_name
          patient_id
          medical_doctor_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      medicalRecords {
        items {
          id
          report_text
          doctor_name
          appointment_date
          medical_report_status
          patient_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePatient = /* GraphQL */ `
  mutation UpdatePatient(
    $input: UpdatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    updatePatient(input: $input, condition: $condition) {
      id
      user_id
      prescription {
        items {
          id
          patient_name
          medication_name
          dosage
          doctor_name
          patient_id
          medical_doctor_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      medicalRecords {
        items {
          id
          report_text
          doctor_name
          appointment_date
          medical_report_status
          patient_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePatient = /* GraphQL */ `
  mutation DeletePatient(
    $input: DeletePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    deletePatient(input: $input, condition: $condition) {
      id
      user_id
      prescription {
        items {
          id
          patient_name
          medication_name
          dosage
          doctor_name
          patient_id
          medical_doctor_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      medicalRecords {
        items {
          id
          report_text
          doctor_name
          appointment_date
          medical_report_status
          patient_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createHospital = /* GraphQL */ `
  mutation CreateHospital(
    $input: CreateHospitalInput!
    $condition: ModelHospitalConditionInput
  ) {
    createHospital(input: $input, condition: $condition) {
      id
      hospital_name
      address
      postal_code
      medicalDoctor {
        items {
          id
          first_name
          last_name
          specialization
          email
          password
          phone
          access_type
          hospital_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      departmentOfHomeAffairs {
        items {
          hospital_id
          name
          surname
          address
          postal_code
          id_number
          cell_phone_no
          race
          date_of_birth
          gender
          nationality
          email
          marital_status
          citizenship_status
          photo_url
          notes
          emergency_contact_name
          emergency_contact_phone
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateHospital = /* GraphQL */ `
  mutation UpdateHospital(
    $input: UpdateHospitalInput!
    $condition: ModelHospitalConditionInput
  ) {
    updateHospital(input: $input, condition: $condition) {
      id
      hospital_name
      address
      postal_code
      medicalDoctor {
        items {
          id
          first_name
          last_name
          specialization
          email
          password
          phone
          access_type
          hospital_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      departmentOfHomeAffairs {
        items {
          hospital_id
          name
          surname
          address
          postal_code
          id_number
          cell_phone_no
          race
          date_of_birth
          gender
          nationality
          email
          marital_status
          citizenship_status
          photo_url
          notes
          emergency_contact_name
          emergency_contact_phone
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteHospital = /* GraphQL */ `
  mutation DeleteHospital(
    $input: DeleteHospitalInput!
    $condition: ModelHospitalConditionInput
  ) {
    deleteHospital(input: $input, condition: $condition) {
      id
      hospital_name
      address
      postal_code
      medicalDoctor {
        items {
          id
          first_name
          last_name
          specialization
          email
          password
          phone
          access_type
          hospital_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      departmentOfHomeAffairs {
        items {
          hospital_id
          name
          surname
          address
          postal_code
          id_number
          cell_phone_no
          race
          date_of_birth
          gender
          nationality
          email
          marital_status
          citizenship_status
          photo_url
          notes
          emergency_contact_name
          emergency_contact_phone
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPrescription = /* GraphQL */ `
  mutation CreatePrescription(
    $input: CreatePrescriptionInput!
    $condition: ModelPrescriptionConditionInput
  ) {
    createPrescription(input: $input, condition: $condition) {
      id
      patient_name
      medication_name
      dosage
      doctor_name
      patient_id
      medical_doctor_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePrescription = /* GraphQL */ `
  mutation UpdatePrescription(
    $input: UpdatePrescriptionInput!
    $condition: ModelPrescriptionConditionInput
  ) {
    updatePrescription(input: $input, condition: $condition) {
      id
      patient_name
      medication_name
      dosage
      doctor_name
      patient_id
      medical_doctor_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePrescription = /* GraphQL */ `
  mutation DeletePrescription(
    $input: DeletePrescriptionInput!
    $condition: ModelPrescriptionConditionInput
  ) {
    deletePrescription(input: $input, condition: $condition) {
      id
      patient_name
      medication_name
      dosage
      doctor_name
      patient_id
      medical_doctor_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMedicalDoctor = /* GraphQL */ `
  mutation CreateMedicalDoctor(
    $input: CreateMedicalDoctorInput!
    $condition: ModelMedicalDoctorConditionInput
  ) {
    createMedicalDoctor(input: $input, condition: $condition) {
      id
      first_name
      last_name
      specialization
      email
      password
      phone
      access_type
      hospital_id
      prescription {
        items {
          id
          patient_name
          medication_name
          dosage
          doctor_name
          patient_id
          medical_doctor_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMedicalDoctor = /* GraphQL */ `
  mutation UpdateMedicalDoctor(
    $input: UpdateMedicalDoctorInput!
    $condition: ModelMedicalDoctorConditionInput
  ) {
    updateMedicalDoctor(input: $input, condition: $condition) {
      id
      first_name
      last_name
      specialization
      email
      password
      phone
      access_type
      hospital_id
      prescription {
        items {
          id
          patient_name
          medication_name
          dosage
          doctor_name
          patient_id
          medical_doctor_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMedicalDoctor = /* GraphQL */ `
  mutation DeleteMedicalDoctor(
    $input: DeleteMedicalDoctorInput!
    $condition: ModelMedicalDoctorConditionInput
  ) {
    deleteMedicalDoctor(input: $input, condition: $condition) {
      id
      first_name
      last_name
      specialization
      email
      password
      phone
      access_type
      hospital_id
      prescription {
        items {
          id
          patient_name
          medication_name
          dosage
          doctor_name
          patient_id
          medical_doctor_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createDepartmentOfHomeAffairs = /* GraphQL */ `
  mutation CreateDepartmentOfHomeAffairs(
    $input: CreateDepartmentOfHomeAffairsInput!
    $condition: ModelDepartmentOfHomeAffairsConditionInput
  ) {
    createDepartmentOfHomeAffairs(input: $input, condition: $condition) {
      hospital_id
      name
      surname
      address
      postal_code
      id_number
      cell_phone_no
      race
      date_of_birth
      gender
      nationality
      email
      marital_status
      citizenship_status
      photo_url
      notes
      emergency_contact_name
      emergency_contact_phone
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDepartmentOfHomeAffairs = /* GraphQL */ `
  mutation UpdateDepartmentOfHomeAffairs(
    $input: UpdateDepartmentOfHomeAffairsInput!
    $condition: ModelDepartmentOfHomeAffairsConditionInput
  ) {
    updateDepartmentOfHomeAffairs(input: $input, condition: $condition) {
      hospital_id
      name
      surname
      address
      postal_code
      id_number
      cell_phone_no
      race
      date_of_birth
      gender
      nationality
      email
      marital_status
      citizenship_status
      photo_url
      notes
      emergency_contact_name
      emergency_contact_phone
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDepartmentOfHomeAffairs = /* GraphQL */ `
  mutation DeleteDepartmentOfHomeAffairs(
    $input: DeleteDepartmentOfHomeAffairsInput!
    $condition: ModelDepartmentOfHomeAffairsConditionInput
  ) {
    deleteDepartmentOfHomeAffairs(input: $input, condition: $condition) {
      hospital_id
      name
      surname
      address
      postal_code
      id_number
      cell_phone_no
      race
      date_of_birth
      gender
      nationality
      email
      marital_status
      citizenship_status
      photo_url
      notes
      emergency_contact_name
      emergency_contact_phone
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
