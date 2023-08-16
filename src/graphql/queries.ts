/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          nextToken
          __typename
        }
        medicalReport {
          nextToken
          __typename
        }
        biometricData {
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
      nextToken
      __typename
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
      id
      message
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getBiometricData = /* GraphQL */ `
  query GetBiometricData($id: ID!) {
    getBiometricData(id: $id) {
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
export const listBiometricData = /* GraphQL */ `
  query ListBiometricData(
    $filter: ModelBiometricDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBiometricData(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getMedicalReport = /* GraphQL */ `
  query GetMedicalReport($id: ID!) {
    getMedicalReport(id: $id) {
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
export const listMedicalReports = /* GraphQL */ `
  query ListMedicalReports(
    $filter: ModelMedicalReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedicalReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        report_text
        doctor_name
        appointment_date
        medical_report_status
        user_id
        hospital {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMedicalHistory = /* GraphQL */ `
  query GetMedicalHistory($id: ID!) {
    getMedicalHistory(id: $id) {
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
export const listMedicalHistories = /* GraphQL */ `
  query ListMedicalHistories(
    $filter: ModelMedicalHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedicalHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getHospital = /* GraphQL */ `
  query GetHospital($id: ID!) {
    getHospital(id: $id) {
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
export const listHospitals = /* GraphQL */ `
  query ListHospitals(
    $filter: ModelHospitalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHospitals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        hospital_name
        address
        postal_code
        medical_report_id
        doctor {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDoctor = /* GraphQL */ `
  query GetDoctor($id: ID!) {
    getDoctor(id: $id) {
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
export const listDoctors = /* GraphQL */ `
  query ListDoctors(
    $filter: ModelDoctorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDoctors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getGovernmentGrant = /* GraphQL */ `
  query GetGovernmentGrant($id: ID!) {
    getGovernmentGrant(id: $id) {
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
export const listGovernmentGrants = /* GraphQL */ `
  query ListGovernmentGrants(
    $filter: ModelGovernmentGrantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGovernmentGrants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const notificationsByUser_id = /* GraphQL */ `
  query NotificationsByUser_id(
    $user_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationsByUser_id(
      user_id: $user_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const biometricDataByUser_id = /* GraphQL */ `
  query BiometricDataByUser_id(
    $user_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBiometricDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    biometricDataByUser_id(
      user_id: $user_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const medicalReportsByUser_id = /* GraphQL */ `
  query MedicalReportsByUser_id(
    $user_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMedicalReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    medicalReportsByUser_id(
      user_id: $user_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        report_text
        doctor_name
        appointment_date
        medical_report_status
        user_id
        hospital {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const medicalHistoriesByUser_id = /* GraphQL */ `
  query MedicalHistoriesByUser_id(
    $user_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMedicalHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    medicalHistoriesByUser_id(
      user_id: $user_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const hospitalsByMedical_report_id = /* GraphQL */ `
  query HospitalsByMedical_report_id(
    $medical_report_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelHospitalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    hospitalsByMedical_report_id(
      medical_report_id: $medical_report_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        hospital_name
        address
        postal_code
        medical_report_id
        doctor {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const doctorsByHospital_id = /* GraphQL */ `
  query DoctorsByHospital_id(
    $hospital_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDoctorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    doctorsByHospital_id(
      hospital_id: $hospital_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
