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
      notification {
        items {
          id
          message
          user_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      medicalReport {
        items {
          id
          report_text
          doctor_name
          appointment_date
          medical_report_status
          user_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      biometricData {
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
      governmentGrant {
        id
        grantName
        description
        amount
        startDate
        endDate
        applicationDeadline
        eligibilityRequirements
        applicationProcess
        createdAt
        updatedAt
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
      notification {
        items {
          id
          message
          user_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      medicalReport {
        items {
          id
          report_text
          doctor_name
          appointment_date
          medical_report_status
          user_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      biometricData {
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
      governmentGrant {
        id
        grantName
        description
        amount
        startDate
        endDate
        applicationDeadline
        eligibilityRequirements
        applicationProcess
        createdAt
        updatedAt
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
      notification {
        items {
          id
          message
          user_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      medicalReport {
        items {
          id
          report_text
          doctor_name
          appointment_date
          medical_report_status
          user_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      biometricData {
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
      governmentGrant {
        id
        grantName
        description
        amount
        startDate
        endDate
        applicationDeadline
        eligibilityRequirements
        applicationProcess
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
      id
      message
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
      id
      message
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
      id
      message
      user_id
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
export const createMedicalReport = /* GraphQL */ `
  mutation CreateMedicalReport(
    $input: CreateMedicalReportInput!
    $condition: ModelMedicalReportConditionInput
  ) {
    createMedicalReport(input: $input, condition: $condition) {
      id
      report_text
      doctor_name
      appointment_date
      medical_report_status
      user_id
      hospital {
        items {
          id
          hospital_name
          address
          postal_code
          medical_report_id
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
export const updateMedicalReport = /* GraphQL */ `
  mutation UpdateMedicalReport(
    $input: UpdateMedicalReportInput!
    $condition: ModelMedicalReportConditionInput
  ) {
    updateMedicalReport(input: $input, condition: $condition) {
      id
      report_text
      doctor_name
      appointment_date
      medical_report_status
      user_id
      hospital {
        items {
          id
          hospital_name
          address
          postal_code
          medical_report_id
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
export const deleteMedicalReport = /* GraphQL */ `
  mutation DeleteMedicalReport(
    $input: DeleteMedicalReportInput!
    $condition: ModelMedicalReportConditionInput
  ) {
    deleteMedicalReport(input: $input, condition: $condition) {
      id
      report_text
      doctor_name
      appointment_date
      medical_report_status
      user_id
      hospital {
        items {
          id
          hospital_name
          address
          postal_code
          medical_report_id
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
export const createMedicalHistory = /* GraphQL */ `
  mutation CreateMedicalHistory(
    $input: CreateMedicalHistoryInput!
    $condition: ModelMedicalHistoryConditionInput
  ) {
    createMedicalHistory(input: $input, condition: $condition) {
      id
      condition
      allergies
      surgeries
      medications
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMedicalHistory = /* GraphQL */ `
  mutation UpdateMedicalHistory(
    $input: UpdateMedicalHistoryInput!
    $condition: ModelMedicalHistoryConditionInput
  ) {
    updateMedicalHistory(input: $input, condition: $condition) {
      id
      condition
      allergies
      surgeries
      medications
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMedicalHistory = /* GraphQL */ `
  mutation DeleteMedicalHistory(
    $input: DeleteMedicalHistoryInput!
    $condition: ModelMedicalHistoryConditionInput
  ) {
    deleteMedicalHistory(input: $input, condition: $condition) {
      id
      condition
      allergies
      surgeries
      medications
      user_id
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
      medical_report_id
      doctor {
        items {
          id
          first_name
          last_name
          specialization
          cell_no
          hospital_id
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
      medical_report_id
      doctor {
        items {
          id
          first_name
          last_name
          specialization
          cell_no
          hospital_id
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
      medical_report_id
      doctor {
        items {
          id
          first_name
          last_name
          specialization
          cell_no
          hospital_id
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
export const createDoctor = /* GraphQL */ `
  mutation CreateDoctor(
    $input: CreateDoctorInput!
    $condition: ModelDoctorConditionInput
  ) {
    createDoctor(input: $input, condition: $condition) {
      id
      first_name
      last_name
      specialization
      contactInformation {
        email
        phone
        __typename
      }
      cell_no
      hospital_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDoctor = /* GraphQL */ `
  mutation UpdateDoctor(
    $input: UpdateDoctorInput!
    $condition: ModelDoctorConditionInput
  ) {
    updateDoctor(input: $input, condition: $condition) {
      id
      first_name
      last_name
      specialization
      contactInformation {
        email
        phone
        __typename
      }
      cell_no
      hospital_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDoctor = /* GraphQL */ `
  mutation DeleteDoctor(
    $input: DeleteDoctorInput!
    $condition: ModelDoctorConditionInput
  ) {
    deleteDoctor(input: $input, condition: $condition) {
      id
      first_name
      last_name
      specialization
      contactInformation {
        email
        phone
        __typename
      }
      cell_no
      hospital_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createGovernmentGrant = /* GraphQL */ `
  mutation CreateGovernmentGrant(
    $input: CreateGovernmentGrantInput!
    $condition: ModelGovernmentGrantConditionInput
  ) {
    createGovernmentGrant(input: $input, condition: $condition) {
      id
      grantName
      description
      amount
      startDate
      endDate
      applicationDeadline
      eligibilityRequirements
      applicationProcess
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateGovernmentGrant = /* GraphQL */ `
  mutation UpdateGovernmentGrant(
    $input: UpdateGovernmentGrantInput!
    $condition: ModelGovernmentGrantConditionInput
  ) {
    updateGovernmentGrant(input: $input, condition: $condition) {
      id
      grantName
      description
      amount
      startDate
      endDate
      applicationDeadline
      eligibilityRequirements
      applicationProcess
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteGovernmentGrant = /* GraphQL */ `
  mutation DeleteGovernmentGrant(
    $input: DeleteGovernmentGrantInput!
    $condition: ModelGovernmentGrantConditionInput
  ) {
    deleteGovernmentGrant(input: $input, condition: $condition) {
      id
      grantName
      description
      amount
      startDate
      endDate
      applicationDeadline
      eligibilityRequirements
      applicationProcess
      createdAt
      updatedAt
      __typename
    }
  }
`;
