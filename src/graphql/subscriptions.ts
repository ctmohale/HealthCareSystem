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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onCreateNotification(filter: $filter) {
      id
      message
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onUpdateNotification(filter: $filter) {
      id
      message
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onDeleteNotification(filter: $filter) {
      id
      message
      user_id
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
export const onCreateMedicalReport = /* GraphQL */ `
  subscription OnCreateMedicalReport(
    $filter: ModelSubscriptionMedicalReportFilterInput
  ) {
    onCreateMedicalReport(filter: $filter) {
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
export const onUpdateMedicalReport = /* GraphQL */ `
  subscription OnUpdateMedicalReport(
    $filter: ModelSubscriptionMedicalReportFilterInput
  ) {
    onUpdateMedicalReport(filter: $filter) {
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
export const onDeleteMedicalReport = /* GraphQL */ `
  subscription OnDeleteMedicalReport(
    $filter: ModelSubscriptionMedicalReportFilterInput
  ) {
    onDeleteMedicalReport(filter: $filter) {
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
export const onCreateMedicalHistory = /* GraphQL */ `
  subscription OnCreateMedicalHistory(
    $filter: ModelSubscriptionMedicalHistoryFilterInput
  ) {
    onCreateMedicalHistory(filter: $filter) {
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
export const onUpdateMedicalHistory = /* GraphQL */ `
  subscription OnUpdateMedicalHistory(
    $filter: ModelSubscriptionMedicalHistoryFilterInput
  ) {
    onUpdateMedicalHistory(filter: $filter) {
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
export const onDeleteMedicalHistory = /* GraphQL */ `
  subscription OnDeleteMedicalHistory(
    $filter: ModelSubscriptionMedicalHistoryFilterInput
  ) {
    onDeleteMedicalHistory(filter: $filter) {
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
export const onCreateHospital = /* GraphQL */ `
  subscription OnCreateHospital($filter: ModelSubscriptionHospitalFilterInput) {
    onCreateHospital(filter: $filter) {
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
export const onUpdateHospital = /* GraphQL */ `
  subscription OnUpdateHospital($filter: ModelSubscriptionHospitalFilterInput) {
    onUpdateHospital(filter: $filter) {
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
export const onDeleteHospital = /* GraphQL */ `
  subscription OnDeleteHospital($filter: ModelSubscriptionHospitalFilterInput) {
    onDeleteHospital(filter: $filter) {
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
export const onCreateDoctor = /* GraphQL */ `
  subscription OnCreateDoctor($filter: ModelSubscriptionDoctorFilterInput) {
    onCreateDoctor(filter: $filter) {
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
export const onUpdateDoctor = /* GraphQL */ `
  subscription OnUpdateDoctor($filter: ModelSubscriptionDoctorFilterInput) {
    onUpdateDoctor(filter: $filter) {
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
export const onDeleteDoctor = /* GraphQL */ `
  subscription OnDeleteDoctor($filter: ModelSubscriptionDoctorFilterInput) {
    onDeleteDoctor(filter: $filter) {
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
export const onCreateGovernmentGrant = /* GraphQL */ `
  subscription OnCreateGovernmentGrant(
    $filter: ModelSubscriptionGovernmentGrantFilterInput
  ) {
    onCreateGovernmentGrant(filter: $filter) {
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
export const onUpdateGovernmentGrant = /* GraphQL */ `
  subscription OnUpdateGovernmentGrant(
    $filter: ModelSubscriptionGovernmentGrantFilterInput
  ) {
    onUpdateGovernmentGrant(filter: $filter) {
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
export const onDeleteGovernmentGrant = /* GraphQL */ `
  subscription OnDeleteGovernmentGrant(
    $filter: ModelSubscriptionGovernmentGrantFilterInput
  ) {
    onDeleteGovernmentGrant(filter: $filter) {
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
