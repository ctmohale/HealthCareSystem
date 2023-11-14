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
        biometricdata {
          nextToken
          __typename
        }
        patient {
          nextToken
          __typename
        }
        appointment {
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
export const getAppointment = /* GraphQL */ `
  query GetAppointment($id: ID!) {
    getAppointment(id: $id) {
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
export const listAppointments = /* GraphQL */ `
  query ListAppointments(
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getAdmin = /* GraphQL */ `
  query GetAdmin($id: ID!) {
    getAdmin(id: $id) {
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
export const listAdmins = /* GraphQL */ `
  query ListAdmins(
    $filter: ModelAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getMedicalRecords = /* GraphQL */ `
  query GetMedicalRecords($id: ID!) {
    getMedicalRecords(id: $id) {
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
export const listMedicalRecords = /* GraphQL */ `
  query ListMedicalRecords(
    $filter: ModelMedicalRecordsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedicalRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getPatient = /* GraphQL */ `
  query GetPatient($id: ID!) {
    getPatient(id: $id) {
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
export const listPatients = /* GraphQL */ `
  query ListPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user_id
        prescription {
          nextToken
          __typename
        }
        medicalRecords {
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
export const getHospital = /* GraphQL */ `
  query GetHospital($id: ID!) {
    getHospital(id: $id) {
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
        medicalDoctor {
          nextToken
          __typename
        }
        departmentOfHomeAffairs {
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
export const getPrescription = /* GraphQL */ `
  query GetPrescription($id: ID!) {
    getPrescription(id: $id) {
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
export const listPrescriptions = /* GraphQL */ `
  query ListPrescriptions(
    $filter: ModelPrescriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrescriptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getMedicalDoctor = /* GraphQL */ `
  query GetMedicalDoctor($id: ID!) {
    getMedicalDoctor(id: $id) {
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
export const listMedicalDoctors = /* GraphQL */ `
  query ListMedicalDoctors(
    $filter: ModelMedicalDoctorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedicalDoctors(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        prescription {
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
export const getDepartmentOfHomeAffairs = /* GraphQL */ `
  query GetDepartmentOfHomeAffairs($id: ID!) {
    getDepartmentOfHomeAffairs(id: $id) {
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
export const listDepartmentOfHomeAffairs = /* GraphQL */ `
  query ListDepartmentOfHomeAffairs(
    $filter: ModelDepartmentOfHomeAffairsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartmentOfHomeAffairs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
export const appointmentsByUser_id = /* GraphQL */ `
  query AppointmentsByUser_id(
    $user_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentsByUser_id(
      user_id: $user_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const medicalRecordsByPatient_id = /* GraphQL */ `
  query MedicalRecordsByPatient_id(
    $patient_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMedicalRecordsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    medicalRecordsByPatient_id(
      patient_id: $patient_id
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
        patient_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const patientsByUser_id = /* GraphQL */ `
  query PatientsByUser_id(
    $user_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    patientsByUser_id(
      user_id: $user_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user_id
        prescription {
          nextToken
          __typename
        }
        medicalRecords {
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
export const prescriptionsByPatient_id = /* GraphQL */ `
  query PrescriptionsByPatient_id(
    $patient_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPrescriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    prescriptionsByPatient_id(
      patient_id: $patient_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const prescriptionsByMedical_doctor_id = /* GraphQL */ `
  query PrescriptionsByMedical_doctor_id(
    $medical_doctor_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPrescriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    prescriptionsByMedical_doctor_id(
      medical_doctor_id: $medical_doctor_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const medicalDoctorsByHospital_id = /* GraphQL */ `
  query MedicalDoctorsByHospital_id(
    $hospital_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMedicalDoctorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    medicalDoctorsByHospital_id(
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
        email
        password
        phone
        access_type
        hospital_id
        prescription {
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
export const departmentOfHomeAffairsByHospital_id = /* GraphQL */ `
  query DepartmentOfHomeAffairsByHospital_id(
    $hospital_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDepartmentOfHomeAffairsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    departmentOfHomeAffairsByHospital_id(
      hospital_id: $hospital_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
