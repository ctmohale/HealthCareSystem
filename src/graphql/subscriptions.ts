/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateBiometricData = /* GraphQL */ `
  subscription OnCreateBiometricData(
    $filter: ModelSubscriptionBiometricDataFilterInput
  ) {
    onCreateBiometricData(filter: $filter) {
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
export const onUpdateBiometricData = /* GraphQL */ `
  subscription OnUpdateBiometricData(
    $filter: ModelSubscriptionBiometricDataFilterInput
  ) {
    onUpdateBiometricData(filter: $filter) {
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
export const onDeleteBiometricData = /* GraphQL */ `
  subscription OnDeleteBiometricData(
    $filter: ModelSubscriptionBiometricDataFilterInput
  ) {
    onDeleteBiometricData(filter: $filter) {
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
export const onCreateAppointment = /* GraphQL */ `
  subscription OnCreateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onCreateAppointment(filter: $filter) {
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
export const onUpdateAppointment = /* GraphQL */ `
  subscription OnUpdateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onUpdateAppointment(filter: $filter) {
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
export const onDeleteAppointment = /* GraphQL */ `
  subscription OnDeleteAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onDeleteAppointment(filter: $filter) {
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
export const onCreateAdmin = /* GraphQL */ `
  subscription OnCreateAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onCreateAdmin(filter: $filter) {
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
export const onUpdateAdmin = /* GraphQL */ `
  subscription OnUpdateAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onUpdateAdmin(filter: $filter) {
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
export const onDeleteAdmin = /* GraphQL */ `
  subscription OnDeleteAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onDeleteAdmin(filter: $filter) {
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
export const onCreateMedicalRecords = /* GraphQL */ `
  subscription OnCreateMedicalRecords(
    $filter: ModelSubscriptionMedicalRecordsFilterInput
  ) {
    onCreateMedicalRecords(filter: $filter) {
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
export const onUpdateMedicalRecords = /* GraphQL */ `
  subscription OnUpdateMedicalRecords(
    $filter: ModelSubscriptionMedicalRecordsFilterInput
  ) {
    onUpdateMedicalRecords(filter: $filter) {
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
export const onDeleteMedicalRecords = /* GraphQL */ `
  subscription OnDeleteMedicalRecords(
    $filter: ModelSubscriptionMedicalRecordsFilterInput
  ) {
    onDeleteMedicalRecords(filter: $filter) {
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
export const onCreatePatient = /* GraphQL */ `
  subscription OnCreatePatient($filter: ModelSubscriptionPatientFilterInput) {
    onCreatePatient(filter: $filter) {
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
export const onUpdatePatient = /* GraphQL */ `
  subscription OnUpdatePatient($filter: ModelSubscriptionPatientFilterInput) {
    onUpdatePatient(filter: $filter) {
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
export const onDeletePatient = /* GraphQL */ `
  subscription OnDeletePatient($filter: ModelSubscriptionPatientFilterInput) {
    onDeletePatient(filter: $filter) {
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
export const onCreateHospital = /* GraphQL */ `
  subscription OnCreateHospital($filter: ModelSubscriptionHospitalFilterInput) {
    onCreateHospital(filter: $filter) {
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
export const onUpdateHospital = /* GraphQL */ `
  subscription OnUpdateHospital($filter: ModelSubscriptionHospitalFilterInput) {
    onUpdateHospital(filter: $filter) {
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
export const onDeleteHospital = /* GraphQL */ `
  subscription OnDeleteHospital($filter: ModelSubscriptionHospitalFilterInput) {
    onDeleteHospital(filter: $filter) {
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
export const onCreatePrescription = /* GraphQL */ `
  subscription OnCreatePrescription(
    $filter: ModelSubscriptionPrescriptionFilterInput
  ) {
    onCreatePrescription(filter: $filter) {
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
export const onUpdatePrescription = /* GraphQL */ `
  subscription OnUpdatePrescription(
    $filter: ModelSubscriptionPrescriptionFilterInput
  ) {
    onUpdatePrescription(filter: $filter) {
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
export const onDeletePrescription = /* GraphQL */ `
  subscription OnDeletePrescription(
    $filter: ModelSubscriptionPrescriptionFilterInput
  ) {
    onDeletePrescription(filter: $filter) {
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
export const onCreateMedicalDoctor = /* GraphQL */ `
  subscription OnCreateMedicalDoctor(
    $filter: ModelSubscriptionMedicalDoctorFilterInput
  ) {
    onCreateMedicalDoctor(filter: $filter) {
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
export const onUpdateMedicalDoctor = /* GraphQL */ `
  subscription OnUpdateMedicalDoctor(
    $filter: ModelSubscriptionMedicalDoctorFilterInput
  ) {
    onUpdateMedicalDoctor(filter: $filter) {
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
export const onDeleteMedicalDoctor = /* GraphQL */ `
  subscription OnDeleteMedicalDoctor(
    $filter: ModelSubscriptionMedicalDoctorFilterInput
  ) {
    onDeleteMedicalDoctor(filter: $filter) {
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
export const onCreateDepartmentOfHomeAffairs = /* GraphQL */ `
  subscription OnCreateDepartmentOfHomeAffairs(
    $filter: ModelSubscriptionDepartmentOfHomeAffairsFilterInput
  ) {
    onCreateDepartmentOfHomeAffairs(filter: $filter) {
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
export const onUpdateDepartmentOfHomeAffairs = /* GraphQL */ `
  subscription OnUpdateDepartmentOfHomeAffairs(
    $filter: ModelSubscriptionDepartmentOfHomeAffairsFilterInput
  ) {
    onUpdateDepartmentOfHomeAffairs(filter: $filter) {
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
export const onDeleteDepartmentOfHomeAffairs = /* GraphQL */ `
  subscription OnDeleteDepartmentOfHomeAffairs(
    $filter: ModelSubscriptionDepartmentOfHomeAffairsFilterInput
  ) {
    onDeleteDepartmentOfHomeAffairs(filter: $filter) {
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
