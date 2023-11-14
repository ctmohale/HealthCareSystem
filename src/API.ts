/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  surname: string,
  email: string,
  password: string,
  address: string,
  postal_code: string,
  id_number: string,
  cell_phone_no: string,
  access_type: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  surname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  address?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  id_number?: ModelStringInput | null,
  cell_phone_no?: ModelStringInput | null,
  access_type?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  surname: string,
  email: string,
  password: string,
  address: string,
  postal_code: string,
  id_number: string,
  cell_phone_no: string,
  access_type: string,
  biometricdata?: ModelBiometricDataConnection | null,
  patient?: ModelPatientConnection | null,
  appointment?: ModelAppointmentConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelBiometricDataConnection = {
  __typename: "ModelBiometricDataConnection",
  items:  Array<BiometricData | null >,
  nextToken?: string | null,
};

export type BiometricData = {
  __typename: "BiometricData",
  id: string,
  data: string,
  status: string,
  user_id?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPatientConnection = {
  __typename: "ModelPatientConnection",
  items:  Array<Patient | null >,
  nextToken?: string | null,
};

export type Patient = {
  __typename: "Patient",
  id: string,
  user_id?: string | null,
  prescription?: ModelPrescriptionConnection | null,
  medicalRecords?: ModelMedicalRecordsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPrescriptionConnection = {
  __typename: "ModelPrescriptionConnection",
  items:  Array<Prescription | null >,
  nextToken?: string | null,
};

export type Prescription = {
  __typename: "Prescription",
  id: string,
  patient_name: string,
  medication_name: string,
  dosage: string,
  doctor_name: string,
  patient_id?: string | null,
  medical_doctor_id?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMedicalRecordsConnection = {
  __typename: "ModelMedicalRecordsConnection",
  items:  Array<MedicalRecords | null >,
  nextToken?: string | null,
};

export type MedicalRecords = {
  __typename: "MedicalRecords",
  id: string,
  report_text: string,
  doctor_name: string,
  appointment_date: string,
  medical_report_status: string,
  patient_id?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAppointmentConnection = {
  __typename: "ModelAppointmentConnection",
  items:  Array<Appointment | null >,
  nextToken?: string | null,
};

export type Appointment = {
  __typename: "Appointment",
  id: string,
  appointmentDate: string,
  status: string,
  notes?: string | null,
  user_id?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  surname?: string | null,
  email?: string | null,
  password?: string | null,
  address?: string | null,
  postal_code?: string | null,
  id_number?: string | null,
  cell_phone_no?: string | null,
  access_type?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateBiometricDataInput = {
  id?: string | null,
  data: string,
  status: string,
  user_id?: string | null,
};

export type ModelBiometricDataConditionInput = {
  data?: ModelStringInput | null,
  status?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  and?: Array< ModelBiometricDataConditionInput | null > | null,
  or?: Array< ModelBiometricDataConditionInput | null > | null,
  not?: ModelBiometricDataConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateBiometricDataInput = {
  id: string,
  data?: string | null,
  status?: string | null,
  user_id?: string | null,
};

export type DeleteBiometricDataInput = {
  id: string,
};

export type CreateAppointmentInput = {
  id?: string | null,
  appointmentDate: string,
  status: string,
  notes?: string | null,
  user_id?: string | null,
};

export type ModelAppointmentConditionInput = {
  appointmentDate?: ModelStringInput | null,
  status?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  and?: Array< ModelAppointmentConditionInput | null > | null,
  or?: Array< ModelAppointmentConditionInput | null > | null,
  not?: ModelAppointmentConditionInput | null,
};

export type UpdateAppointmentInput = {
  id: string,
  appointmentDate?: string | null,
  status?: string | null,
  notes?: string | null,
  user_id?: string | null,
};

export type DeleteAppointmentInput = {
  id: string,
};

export type CreateAdminInput = {
  id?: string | null,
  name: string,
  surname: string,
  email: string,
  password: string,
  access_type?: string | null,
};

export type ModelAdminConditionInput = {
  name?: ModelStringInput | null,
  surname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  access_type?: ModelStringInput | null,
  and?: Array< ModelAdminConditionInput | null > | null,
  or?: Array< ModelAdminConditionInput | null > | null,
  not?: ModelAdminConditionInput | null,
};

export type Admin = {
  __typename: "Admin",
  id: string,
  name: string,
  surname: string,
  email: string,
  password: string,
  access_type?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAdminInput = {
  id: string,
  name?: string | null,
  surname?: string | null,
  email?: string | null,
  password?: string | null,
  access_type?: string | null,
};

export type DeleteAdminInput = {
  id: string,
};

export type CreateMedicalRecordsInput = {
  id?: string | null,
  report_text: string,
  doctor_name: string,
  appointment_date: string,
  medical_report_status: string,
  patient_id?: string | null,
};

export type ModelMedicalRecordsConditionInput = {
  report_text?: ModelStringInput | null,
  doctor_name?: ModelStringInput | null,
  appointment_date?: ModelStringInput | null,
  medical_report_status?: ModelStringInput | null,
  patient_id?: ModelIDInput | null,
  and?: Array< ModelMedicalRecordsConditionInput | null > | null,
  or?: Array< ModelMedicalRecordsConditionInput | null > | null,
  not?: ModelMedicalRecordsConditionInput | null,
};

export type UpdateMedicalRecordsInput = {
  id: string,
  report_text?: string | null,
  doctor_name?: string | null,
  appointment_date?: string | null,
  medical_report_status?: string | null,
  patient_id?: string | null,
};

export type DeleteMedicalRecordsInput = {
  id: string,
};

export type CreatePatientInput = {
  id?: string | null,
  user_id?: string | null,
};

export type ModelPatientConditionInput = {
  user_id?: ModelIDInput | null,
  and?: Array< ModelPatientConditionInput | null > | null,
  or?: Array< ModelPatientConditionInput | null > | null,
  not?: ModelPatientConditionInput | null,
};

export type UpdatePatientInput = {
  id: string,
  user_id?: string | null,
};

export type DeletePatientInput = {
  id: string,
};

export type CreateHospitalInput = {
  id?: string | null,
  hospital_name: string,
  address: string,
  postal_code: string,
};

export type ModelHospitalConditionInput = {
  hospital_name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  and?: Array< ModelHospitalConditionInput | null > | null,
  or?: Array< ModelHospitalConditionInput | null > | null,
  not?: ModelHospitalConditionInput | null,
};

export type Hospital = {
  __typename: "Hospital",
  id: string,
  hospital_name: string,
  address: string,
  postal_code: string,
  medicalDoctor?: ModelMedicalDoctorConnection | null,
  departmentOfHomeAffairs?: ModelDepartmentOfHomeAffairsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMedicalDoctorConnection = {
  __typename: "ModelMedicalDoctorConnection",
  items:  Array<MedicalDoctor | null >,
  nextToken?: string | null,
};

export type MedicalDoctor = {
  __typename: "MedicalDoctor",
  id: string,
  first_name: string,
  last_name: string,
  specialization: string,
  email: string,
  password: string,
  phone: string,
  access_type?: string | null,
  hospital_id?: string | null,
  prescription?: ModelPrescriptionConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelDepartmentOfHomeAffairsConnection = {
  __typename: "ModelDepartmentOfHomeAffairsConnection",
  items:  Array<DepartmentOfHomeAffairs | null >,
  nextToken?: string | null,
};

export type DepartmentOfHomeAffairs = {
  __typename: "DepartmentOfHomeAffairs",
  hospital_id?: string | null,
  name: string,
  surname: string,
  address: string,
  postal_code: string,
  id_number: string,
  cell_phone_no?: string | null,
  race: string,
  date_of_birth?: string | null,
  gender?: string | null,
  nationality?: string | null,
  email?: string | null,
  marital_status?: string | null,
  citizenship_status?: string | null,
  photo_url?: string | null,
  notes?: string | null,
  emergency_contact_name?: string | null,
  emergency_contact_phone?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateHospitalInput = {
  id: string,
  hospital_name?: string | null,
  address?: string | null,
  postal_code?: string | null,
};

export type DeleteHospitalInput = {
  id: string,
};

export type CreatePrescriptionInput = {
  id?: string | null,
  patient_name: string,
  medication_name: string,
  dosage: string,
  doctor_name: string,
  patient_id?: string | null,
  medical_doctor_id?: string | null,
};

export type ModelPrescriptionConditionInput = {
  patient_name?: ModelStringInput | null,
  medication_name?: ModelStringInput | null,
  dosage?: ModelStringInput | null,
  doctor_name?: ModelStringInput | null,
  patient_id?: ModelIDInput | null,
  medical_doctor_id?: ModelIDInput | null,
  and?: Array< ModelPrescriptionConditionInput | null > | null,
  or?: Array< ModelPrescriptionConditionInput | null > | null,
  not?: ModelPrescriptionConditionInput | null,
};

export type UpdatePrescriptionInput = {
  id: string,
  patient_name?: string | null,
  medication_name?: string | null,
  dosage?: string | null,
  doctor_name?: string | null,
  patient_id?: string | null,
  medical_doctor_id?: string | null,
};

export type DeletePrescriptionInput = {
  id: string,
};

export type CreateMedicalDoctorInput = {
  id?: string | null,
  first_name: string,
  last_name: string,
  specialization: string,
  email: string,
  password: string,
  phone: string,
  access_type?: string | null,
  hospital_id?: string | null,
};

export type ModelMedicalDoctorConditionInput = {
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  specialization?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  access_type?: ModelStringInput | null,
  hospital_id?: ModelIDInput | null,
  and?: Array< ModelMedicalDoctorConditionInput | null > | null,
  or?: Array< ModelMedicalDoctorConditionInput | null > | null,
  not?: ModelMedicalDoctorConditionInput | null,
};

export type UpdateMedicalDoctorInput = {
  id: string,
  first_name?: string | null,
  last_name?: string | null,
  specialization?: string | null,
  email?: string | null,
  password?: string | null,
  phone?: string | null,
  access_type?: string | null,
  hospital_id?: string | null,
};

export type DeleteMedicalDoctorInput = {
  id: string,
};

export type CreateDepartmentOfHomeAffairsInput = {
  hospital_id?: string | null,
  name: string,
  surname: string,
  address: string,
  postal_code: string,
  id_number: string,
  cell_phone_no?: string | null,
  race: string,
  date_of_birth?: string | null,
  gender?: string | null,
  nationality?: string | null,
  email?: string | null,
  marital_status?: string | null,
  citizenship_status?: string | null,
  photo_url?: string | null,
  notes?: string | null,
  emergency_contact_name?: string | null,
  emergency_contact_phone?: string | null,
  id?: string | null,
};

export type ModelDepartmentOfHomeAffairsConditionInput = {
  hospital_id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  surname?: ModelStringInput | null,
  address?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  id_number?: ModelStringInput | null,
  cell_phone_no?: ModelStringInput | null,
  race?: ModelStringInput | null,
  date_of_birth?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  nationality?: ModelStringInput | null,
  email?: ModelStringInput | null,
  marital_status?: ModelStringInput | null,
  citizenship_status?: ModelStringInput | null,
  photo_url?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  emergency_contact_name?: ModelStringInput | null,
  emergency_contact_phone?: ModelStringInput | null,
  and?: Array< ModelDepartmentOfHomeAffairsConditionInput | null > | null,
  or?: Array< ModelDepartmentOfHomeAffairsConditionInput | null > | null,
  not?: ModelDepartmentOfHomeAffairsConditionInput | null,
};

export type UpdateDepartmentOfHomeAffairsInput = {
  hospital_id?: string | null,
  name?: string | null,
  surname?: string | null,
  address?: string | null,
  postal_code?: string | null,
  id_number?: string | null,
  cell_phone_no?: string | null,
  race?: string | null,
  date_of_birth?: string | null,
  gender?: string | null,
  nationality?: string | null,
  email?: string | null,
  marital_status?: string | null,
  citizenship_status?: string | null,
  photo_url?: string | null,
  notes?: string | null,
  emergency_contact_name?: string | null,
  emergency_contact_phone?: string | null,
  id: string,
};

export type DeleteDepartmentOfHomeAffairsInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  surname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  address?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  id_number?: ModelStringInput | null,
  cell_phone_no?: ModelStringInput | null,
  access_type?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelBiometricDataFilterInput = {
  id?: ModelIDInput | null,
  data?: ModelStringInput | null,
  status?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  and?: Array< ModelBiometricDataFilterInput | null > | null,
  or?: Array< ModelBiometricDataFilterInput | null > | null,
  not?: ModelBiometricDataFilterInput | null,
};

export type ModelAppointmentFilterInput = {
  id?: ModelIDInput | null,
  appointmentDate?: ModelStringInput | null,
  status?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  and?: Array< ModelAppointmentFilterInput | null > | null,
  or?: Array< ModelAppointmentFilterInput | null > | null,
  not?: ModelAppointmentFilterInput | null,
};

export type ModelAdminFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  surname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  access_type?: ModelStringInput | null,
  and?: Array< ModelAdminFilterInput | null > | null,
  or?: Array< ModelAdminFilterInput | null > | null,
  not?: ModelAdminFilterInput | null,
};

export type ModelAdminConnection = {
  __typename: "ModelAdminConnection",
  items:  Array<Admin | null >,
  nextToken?: string | null,
};

export type ModelMedicalRecordsFilterInput = {
  id?: ModelIDInput | null,
  report_text?: ModelStringInput | null,
  doctor_name?: ModelStringInput | null,
  appointment_date?: ModelStringInput | null,
  medical_report_status?: ModelStringInput | null,
  patient_id?: ModelIDInput | null,
  and?: Array< ModelMedicalRecordsFilterInput | null > | null,
  or?: Array< ModelMedicalRecordsFilterInput | null > | null,
  not?: ModelMedicalRecordsFilterInput | null,
};

export type ModelPatientFilterInput = {
  id?: ModelIDInput | null,
  user_id?: ModelIDInput | null,
  and?: Array< ModelPatientFilterInput | null > | null,
  or?: Array< ModelPatientFilterInput | null > | null,
  not?: ModelPatientFilterInput | null,
};

export type ModelHospitalFilterInput = {
  id?: ModelIDInput | null,
  hospital_name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  and?: Array< ModelHospitalFilterInput | null > | null,
  or?: Array< ModelHospitalFilterInput | null > | null,
  not?: ModelHospitalFilterInput | null,
};

export type ModelHospitalConnection = {
  __typename: "ModelHospitalConnection",
  items:  Array<Hospital | null >,
  nextToken?: string | null,
};

export type ModelPrescriptionFilterInput = {
  id?: ModelIDInput | null,
  patient_name?: ModelStringInput | null,
  medication_name?: ModelStringInput | null,
  dosage?: ModelStringInput | null,
  doctor_name?: ModelStringInput | null,
  patient_id?: ModelIDInput | null,
  medical_doctor_id?: ModelIDInput | null,
  and?: Array< ModelPrescriptionFilterInput | null > | null,
  or?: Array< ModelPrescriptionFilterInput | null > | null,
  not?: ModelPrescriptionFilterInput | null,
};

export type ModelMedicalDoctorFilterInput = {
  id?: ModelIDInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  specialization?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  access_type?: ModelStringInput | null,
  hospital_id?: ModelIDInput | null,
  and?: Array< ModelMedicalDoctorFilterInput | null > | null,
  or?: Array< ModelMedicalDoctorFilterInput | null > | null,
  not?: ModelMedicalDoctorFilterInput | null,
};

export type ModelDepartmentOfHomeAffairsFilterInput = {
  hospital_id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  surname?: ModelStringInput | null,
  address?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  id_number?: ModelStringInput | null,
  cell_phone_no?: ModelStringInput | null,
  race?: ModelStringInput | null,
  date_of_birth?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  nationality?: ModelStringInput | null,
  email?: ModelStringInput | null,
  marital_status?: ModelStringInput | null,
  citizenship_status?: ModelStringInput | null,
  photo_url?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  emergency_contact_name?: ModelStringInput | null,
  emergency_contact_phone?: ModelStringInput | null,
  and?: Array< ModelDepartmentOfHomeAffairsFilterInput | null > | null,
  or?: Array< ModelDepartmentOfHomeAffairsFilterInput | null > | null,
  not?: ModelDepartmentOfHomeAffairsFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  surname?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  postal_code?: ModelSubscriptionStringInput | null,
  id_number?: ModelSubscriptionStringInput | null,
  cell_phone_no?: ModelSubscriptionStringInput | null,
  access_type?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBiometricDataFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  data?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBiometricDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionBiometricDataFilterInput | null > | null,
};

export type ModelSubscriptionAppointmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  appointmentDate?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAppointmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionAppointmentFilterInput | null > | null,
};

export type ModelSubscriptionAdminFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  surname?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  access_type?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAdminFilterInput | null > | null,
  or?: Array< ModelSubscriptionAdminFilterInput | null > | null,
};

export type ModelSubscriptionMedicalRecordsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  report_text?: ModelSubscriptionStringInput | null,
  doctor_name?: ModelSubscriptionStringInput | null,
  appointment_date?: ModelSubscriptionStringInput | null,
  medical_report_status?: ModelSubscriptionStringInput | null,
  patient_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMedicalRecordsFilterInput | null > | null,
  or?: Array< ModelSubscriptionMedicalRecordsFilterInput | null > | null,
};

export type ModelSubscriptionPatientFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPatientFilterInput | null > | null,
  or?: Array< ModelSubscriptionPatientFilterInput | null > | null,
};

export type ModelSubscriptionHospitalFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  hospital_name?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  postal_code?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionHospitalFilterInput | null > | null,
  or?: Array< ModelSubscriptionHospitalFilterInput | null > | null,
};

export type ModelSubscriptionPrescriptionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  patient_name?: ModelSubscriptionStringInput | null,
  medication_name?: ModelSubscriptionStringInput | null,
  dosage?: ModelSubscriptionStringInput | null,
  doctor_name?: ModelSubscriptionStringInput | null,
  patient_id?: ModelSubscriptionIDInput | null,
  medical_doctor_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPrescriptionFilterInput | null > | null,
  or?: Array< ModelSubscriptionPrescriptionFilterInput | null > | null,
};

export type ModelSubscriptionMedicalDoctorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  first_name?: ModelSubscriptionStringInput | null,
  last_name?: ModelSubscriptionStringInput | null,
  specialization?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  access_type?: ModelSubscriptionStringInput | null,
  hospital_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMedicalDoctorFilterInput | null > | null,
  or?: Array< ModelSubscriptionMedicalDoctorFilterInput | null > | null,
};

export type ModelSubscriptionDepartmentOfHomeAffairsFilterInput = {
  hospital_id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  surname?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  postal_code?: ModelSubscriptionStringInput | null,
  id_number?: ModelSubscriptionStringInput | null,
  cell_phone_no?: ModelSubscriptionStringInput | null,
  race?: ModelSubscriptionStringInput | null,
  date_of_birth?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  nationality?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  marital_status?: ModelSubscriptionStringInput | null,
  citizenship_status?: ModelSubscriptionStringInput | null,
  photo_url?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  emergency_contact_name?: ModelSubscriptionStringInput | null,
  emergency_contact_phone?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDepartmentOfHomeAffairsFilterInput | null > | null,
  or?: Array< ModelSubscriptionDepartmentOfHomeAffairsFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    address: string,
    postal_code: string,
    id_number: string,
    cell_phone_no: string,
    access_type: string,
    biometricdata?:  {
      __typename: "ModelBiometricDataConnection",
      items:  Array< {
        __typename: "BiometricData",
        id: string,
        data: string,
        status: string,
        user_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    patient?:  {
      __typename: "ModelPatientConnection",
      items:  Array< {
        __typename: "Patient",
        id: string,
        user_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    appointment?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        appointmentDate: string,
        status: string,
        notes?: string | null,
        user_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    address: string,
    postal_code: string,
    id_number: string,
    cell_phone_no: string,
    access_type: string,
    biometricdata?:  {
      __typename: "ModelBiometricDataConnection",
      items:  Array< {
        __typename: "BiometricData",
        id: string,
        data: string,
        status: string,
        user_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    patient?:  {
      __typename: "ModelPatientConnection",
      items:  Array< {
        __typename: "Patient",
        id: string,
        user_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    appointment?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        appointmentDate: string,
        status: string,
        notes?: string | null,
        user_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    address: string,
    postal_code: string,
    id_number: string,
    cell_phone_no: string,
    access_type: string,
    biometricdata?:  {
      __typename: "ModelBiometricDataConnection",
      items:  Array< {
        __typename: "BiometricData",
        id: string,
        data: string,
        status: string,
        user_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    patient?:  {
      __typename: "ModelPatientConnection",
      items:  Array< {
        __typename: "Patient",
        id: string,
        user_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    appointment?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        appointmentDate: string,
        status: string,
        notes?: string | null,
        user_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBiometricDataMutationVariables = {
  input: CreateBiometricDataInput,
  condition?: ModelBiometricDataConditionInput | null,
};

export type CreateBiometricDataMutation = {
  createBiometricData?:  {
    __typename: "BiometricData",
    id: string,
    data: string,
    status: string,
    user_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBiometricDataMutationVariables = {
  input: UpdateBiometricDataInput,
  condition?: ModelBiometricDataConditionInput | null,
};

export type UpdateBiometricDataMutation = {
  updateBiometricData?:  {
    __typename: "BiometricData",
    id: string,
    data: string,
    status: string,
    user_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBiometricDataMutationVariables = {
  input: DeleteBiometricDataInput,
  condition?: ModelBiometricDataConditionInput | null,
};

export type DeleteBiometricDataMutation = {
  deleteBiometricData?:  {
    __typename: "BiometricData",
    id: string,
    data: string,
    status: string,
    user_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAppointmentMutationVariables = {
  input: CreateAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type CreateAppointmentMutation = {
  createAppointment?:  {
    __typename: "Appointment",
    id: string,
    appointmentDate: string,
    status: string,
    notes?: string | null,
    user_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAppointmentMutationVariables = {
  input: UpdateAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type UpdateAppointmentMutation = {
  updateAppointment?:  {
    __typename: "Appointment",
    id: string,
    appointmentDate: string,
    status: string,
    notes?: string | null,
    user_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAppointmentMutationVariables = {
  input: DeleteAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type DeleteAppointmentMutation = {
  deleteAppointment?:  {
    __typename: "Appointment",
    id: string,
    appointmentDate: string,
    status: string,
    notes?: string | null,
    user_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAdminMutationVariables = {
  input: CreateAdminInput,
  condition?: ModelAdminConditionInput | null,
};

export type CreateAdminMutation = {
  createAdmin?:  {
    __typename: "Admin",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    access_type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAdminMutationVariables = {
  input: UpdateAdminInput,
  condition?: ModelAdminConditionInput | null,
};

export type UpdateAdminMutation = {
  updateAdmin?:  {
    __typename: "Admin",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    access_type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAdminMutationVariables = {
  input: DeleteAdminInput,
  condition?: ModelAdminConditionInput | null,
};

export type DeleteAdminMutation = {
  deleteAdmin?:  {
    __typename: "Admin",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    access_type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMedicalRecordsMutationVariables = {
  input: CreateMedicalRecordsInput,
  condition?: ModelMedicalRecordsConditionInput | null,
};

export type CreateMedicalRecordsMutation = {
  createMedicalRecords?:  {
    __typename: "MedicalRecords",
    id: string,
    report_text: string,
    doctor_name: string,
    appointment_date: string,
    medical_report_status: string,
    patient_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMedicalRecordsMutationVariables = {
  input: UpdateMedicalRecordsInput,
  condition?: ModelMedicalRecordsConditionInput | null,
};

export type UpdateMedicalRecordsMutation = {
  updateMedicalRecords?:  {
    __typename: "MedicalRecords",
    id: string,
    report_text: string,
    doctor_name: string,
    appointment_date: string,
    medical_report_status: string,
    patient_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMedicalRecordsMutationVariables = {
  input: DeleteMedicalRecordsInput,
  condition?: ModelMedicalRecordsConditionInput | null,
};

export type DeleteMedicalRecordsMutation = {
  deleteMedicalRecords?:  {
    __typename: "MedicalRecords",
    id: string,
    report_text: string,
    doctor_name: string,
    appointment_date: string,
    medical_report_status: string,
    patient_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePatientMutationVariables = {
  input: CreatePatientInput,
  condition?: ModelPatientConditionInput | null,
};

export type CreatePatientMutation = {
  createPatient?:  {
    __typename: "Patient",
    id: string,
    user_id?: string | null,
    prescription?:  {
      __typename: "ModelPrescriptionConnection",
      items:  Array< {
        __typename: "Prescription",
        id: string,
        patient_name: string,
        medication_name: string,
        dosage: string,
        doctor_name: string,
        patient_id?: string | null,
        medical_doctor_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    medicalRecords?:  {
      __typename: "ModelMedicalRecordsConnection",
      items:  Array< {
        __typename: "MedicalRecords",
        id: string,
        report_text: string,
        doctor_name: string,
        appointment_date: string,
        medical_report_status: string,
        patient_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePatientMutationVariables = {
  input: UpdatePatientInput,
  condition?: ModelPatientConditionInput | null,
};

export type UpdatePatientMutation = {
  updatePatient?:  {
    __typename: "Patient",
    id: string,
    user_id?: string | null,
    prescription?:  {
      __typename: "ModelPrescriptionConnection",
      items:  Array< {
        __typename: "Prescription",
        id: string,
        patient_name: string,
        medication_name: string,
        dosage: string,
        doctor_name: string,
        patient_id?: string | null,
        medical_doctor_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    medicalRecords?:  {
      __typename: "ModelMedicalRecordsConnection",
      items:  Array< {
        __typename: "MedicalRecords",
        id: string,
        report_text: string,
        doctor_name: string,
        appointment_date: string,
        medical_report_status: string,
        patient_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePatientMutationVariables = {
  input: DeletePatientInput,
  condition?: ModelPatientConditionInput | null,
};

export type DeletePatientMutation = {
  deletePatient?:  {
    __typename: "Patient",
    id: string,
    user_id?: string | null,
    prescription?:  {
      __typename: "ModelPrescriptionConnection",
      items:  Array< {
        __typename: "Prescription",
        id: string,
        patient_name: string,
        medication_name: string,
        dosage: string,
        doctor_name: string,
        patient_id?: string | null,
        medical_doctor_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    medicalRecords?:  {
      __typename: "ModelMedicalRecordsConnection",
      items:  Array< {
        __typename: "MedicalRecords",
        id: string,
        report_text: string,
        doctor_name: string,
        appointment_date: string,
        medical_report_status: string,
        patient_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateHospitalMutationVariables = {
  input: CreateHospitalInput,
  condition?: ModelHospitalConditionInput | null,
};

export type CreateHospitalMutation = {
  createHospital?:  {
    __typename: "Hospital",
    id: string,
    hospital_name: string,
    address: string,
    postal_code: string,
    medicalDoctor?:  {
      __typename: "ModelMedicalDoctorConnection",
      items:  Array< {
        __typename: "MedicalDoctor",
        id: string,
        first_name: string,
        last_name: string,
        specialization: string,
        email: string,
        password: string,
        phone: string,
        access_type?: string | null,
        hospital_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    departmentOfHomeAffairs?:  {
      __typename: "ModelDepartmentOfHomeAffairsConnection",
      items:  Array< {
        __typename: "DepartmentOfHomeAffairs",
        hospital_id?: string | null,
        name: string,
        surname: string,
        address: string,
        postal_code: string,
        id_number: string,
        cell_phone_no?: string | null,
        race: string,
        date_of_birth?: string | null,
        gender?: string | null,
        nationality?: string | null,
        email?: string | null,
        marital_status?: string | null,
        citizenship_status?: string | null,
        photo_url?: string | null,
        notes?: string | null,
        emergency_contact_name?: string | null,
        emergency_contact_phone?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateHospitalMutationVariables = {
  input: UpdateHospitalInput,
  condition?: ModelHospitalConditionInput | null,
};

export type UpdateHospitalMutation = {
  updateHospital?:  {
    __typename: "Hospital",
    id: string,
    hospital_name: string,
    address: string,
    postal_code: string,
    medicalDoctor?:  {
      __typename: "ModelMedicalDoctorConnection",
      items:  Array< {
        __typename: "MedicalDoctor",
        id: string,
        first_name: string,
        last_name: string,
        specialization: string,
        email: string,
        password: string,
        phone: string,
        access_type?: string | null,
        hospital_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    departmentOfHomeAffairs?:  {
      __typename: "ModelDepartmentOfHomeAffairsConnection",
      items:  Array< {
        __typename: "DepartmentOfHomeAffairs",
        hospital_id?: string | null,
        name: string,
        surname: string,
        address: string,
        postal_code: string,
        id_number: string,
        cell_phone_no?: string | null,
        race: string,
        date_of_birth?: string | null,
        gender?: string | null,
        nationality?: string | null,
        email?: string | null,
        marital_status?: string | null,
        citizenship_status?: string | null,
        photo_url?: string | null,
        notes?: string | null,
        emergency_contact_name?: string | null,
        emergency_contact_phone?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteHospitalMutationVariables = {
  input: DeleteHospitalInput,
  condition?: ModelHospitalConditionInput | null,
};

export type DeleteHospitalMutation = {
  deleteHospital?:  {
    __typename: "Hospital",
    id: string,
    hospital_name: string,
    address: string,
    postal_code: string,
    medicalDoctor?:  {
      __typename: "ModelMedicalDoctorConnection",
      items:  Array< {
        __typename: "MedicalDoctor",
        id: string,
        first_name: string,
        last_name: string,
        specialization: string,
        email: string,
        password: string,
        phone: string,
        access_type?: string | null,
        hospital_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    departmentOfHomeAffairs?:  {
      __typename: "ModelDepartmentOfHomeAffairsConnection",
      items:  Array< {
        __typename: "DepartmentOfHomeAffairs",
        hospital_id?: string | null,
        name: string,
        surname: string,
        address: string,
        postal_code: string,
        id_number: string,
        cell_phone_no?: string | null,
        race: string,
        date_of_birth?: string | null,
        gender?: string | null,
        nationality?: string | null,
        email?: string | null,
        marital_status?: string | null,
        citizenship_status?: string | null,
        photo_url?: string | null,
        notes?: string | null,
        emergency_contact_name?: string | null,
        emergency_contact_phone?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePrescriptionMutationVariables = {
  input: CreatePrescriptionInput,
  condition?: ModelPrescriptionConditionInput | null,
};

export type CreatePrescriptionMutation = {
  createPrescription?:  {
    __typename: "Prescription",
    id: string,
    patient_name: string,
    medication_name: string,
    dosage: string,
    doctor_name: string,
    patient_id?: string | null,
    medical_doctor_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePrescriptionMutationVariables = {
  input: UpdatePrescriptionInput,
  condition?: ModelPrescriptionConditionInput | null,
};

export type UpdatePrescriptionMutation = {
  updatePrescription?:  {
    __typename: "Prescription",
    id: string,
    patient_name: string,
    medication_name: string,
    dosage: string,
    doctor_name: string,
    patient_id?: string | null,
    medical_doctor_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePrescriptionMutationVariables = {
  input: DeletePrescriptionInput,
  condition?: ModelPrescriptionConditionInput | null,
};

export type DeletePrescriptionMutation = {
  deletePrescription?:  {
    __typename: "Prescription",
    id: string,
    patient_name: string,
    medication_name: string,
    dosage: string,
    doctor_name: string,
    patient_id?: string | null,
    medical_doctor_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMedicalDoctorMutationVariables = {
  input: CreateMedicalDoctorInput,
  condition?: ModelMedicalDoctorConditionInput | null,
};

export type CreateMedicalDoctorMutation = {
  createMedicalDoctor?:  {
    __typename: "MedicalDoctor",
    id: string,
    first_name: string,
    last_name: string,
    specialization: string,
    email: string,
    password: string,
    phone: string,
    access_type?: string | null,
    hospital_id?: string | null,
    prescription?:  {
      __typename: "ModelPrescriptionConnection",
      items:  Array< {
        __typename: "Prescription",
        id: string,
        patient_name: string,
        medication_name: string,
        dosage: string,
        doctor_name: string,
        patient_id?: string | null,
        medical_doctor_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMedicalDoctorMutationVariables = {
  input: UpdateMedicalDoctorInput,
  condition?: ModelMedicalDoctorConditionInput | null,
};

export type UpdateMedicalDoctorMutation = {
  updateMedicalDoctor?:  {
    __typename: "MedicalDoctor",
    id: string,
    first_name: string,
    last_name: string,
    specialization: string,
    email: string,
    password: string,
    phone: string,
    access_type?: string | null,
    hospital_id?: string | null,
    prescription?:  {
      __typename: "ModelPrescriptionConnection",
      items:  Array< {
        __typename: "Prescription",
        id: string,
        patient_name: string,
        medication_name: string,
        dosage: string,
        doctor_name: string,
        patient_id?: string | null,
        medical_doctor_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMedicalDoctorMutationVariables = {
  input: DeleteMedicalDoctorInput,
  condition?: ModelMedicalDoctorConditionInput | null,
};

export type DeleteMedicalDoctorMutation = {
  deleteMedicalDoctor?:  {
    __typename: "MedicalDoctor",
    id: string,
    first_name: string,
    last_name: string,
    specialization: string,
    email: string,
    password: string,
    phone: string,
    access_type?: string | null,
    hospital_id?: string | null,
    prescription?:  {
      __typename: "ModelPrescriptionConnection",
      items:  Array< {
        __typename: "Prescription",
        id: string,
        patient_name: string,
        medication_name: string,
        dosage: string,
        doctor_name: string,
        patient_id?: string | null,
        medical_doctor_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDepartmentOfHomeAffairsMutationVariables = {
  input: CreateDepartmentOfHomeAffairsInput,
  condition?: ModelDepartmentOfHomeAffairsConditionInput | null,
};

export type CreateDepartmentOfHomeAffairsMutation = {
  createDepartmentOfHomeAffairs?:  {
    __typename: "DepartmentOfHomeAffairs",
    hospital_id?: string | null,
    name: string,
    surname: string,
    address: string,
    postal_code: string,
    id_number: string,
    cell_phone_no?: string | null,
    race: string,
    date_of_birth?: string | null,
    gender?: string | null,
    nationality?: string | null,
    email?: string | null,
    marital_status?: string | null,
    citizenship_status?: string | null,
    photo_url?: string | null,
    notes?: string | null,
    emergency_contact_name?: string | null,
    emergency_contact_phone?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDepartmentOfHomeAffairsMutationVariables = {
  input: UpdateDepartmentOfHomeAffairsInput,
  condition?: ModelDepartmentOfHomeAffairsConditionInput | null,
};

export type UpdateDepartmentOfHomeAffairsMutation = {
  updateDepartmentOfHomeAffairs?:  {
    __typename: "DepartmentOfHomeAffairs",
    hospital_id?: string | null,
    name: string,
    surname: string,
    address: string,
    postal_code: string,
    id_number: string,
    cell_phone_no?: string | null,
    race: string,
    date_of_birth?: string | null,
    gender?: string | null,
    nationality?: string | null,
    email?: string | null,
    marital_status?: string | null,
    citizenship_status?: string | null,
    photo_url?: string | null,
    notes?: string | null,
    emergency_contact_name?: string | null,
    emergency_contact_phone?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDepartmentOfHomeAffairsMutationVariables = {
  input: DeleteDepartmentOfHomeAffairsInput,
  condition?: ModelDepartmentOfHomeAffairsConditionInput | null,
};

export type DeleteDepartmentOfHomeAffairsMutation = {
  deleteDepartmentOfHomeAffairs?:  {
    __typename: "DepartmentOfHomeAffairs",
    hospital_id?: string | null,
    name: string,
    surname: string,
    address: string,
    postal_code: string,
    id_number: string,
    cell_phone_no?: string | null,
    race: string,
    date_of_birth?: string | null,
    gender?: string | null,
    nationality?: string | null,
    email?: string | null,
    marital_status?: string | null,
    citizenship_status?: string | null,
    photo_url?: string | null,
    notes?: string | null,
    emergency_contact_name?: string | null,
    emergency_contact_phone?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    address: string,
    postal_code: string,
    id_number: string,
    cell_phone_no: string,
    access_type: string,
    biometricdata?:  {
      __typename: "ModelBiometricDataConnection",
      items:  Array< {
        __typename: "BiometricData",
        id: string,
        data: string,
        status: string,
        user_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    patient?:  {
      __typename: "ModelPatientConnection",
      items:  Array< {
        __typename: "Patient",
        id: string,
        user_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    appointment?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        appointmentDate: string,
        status: string,
        notes?: string | null,
        user_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      surname: string,
      email: string,
      password: string,
      address: string,
      postal_code: string,
      id_number: string,
      cell_phone_no: string,
      access_type: string,
      biometricdata?:  {
        __typename: "ModelBiometricDataConnection",
        nextToken?: string | null,
      } | null,
      patient?:  {
        __typename: "ModelPatientConnection",
        nextToken?: string | null,
      } | null,
      appointment?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBiometricDataQueryVariables = {
  id: string,
};

export type GetBiometricDataQuery = {
  getBiometricData?:  {
    __typename: "BiometricData",
    id: string,
    data: string,
    status: string,
    user_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBiometricDataQueryVariables = {
  filter?: ModelBiometricDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBiometricDataQuery = {
  listBiometricData?:  {
    __typename: "ModelBiometricDataConnection",
    items:  Array< {
      __typename: "BiometricData",
      id: string,
      data: string,
      status: string,
      user_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAppointmentQueryVariables = {
  id: string,
};

export type GetAppointmentQuery = {
  getAppointment?:  {
    __typename: "Appointment",
    id: string,
    appointmentDate: string,
    status: string,
    notes?: string | null,
    user_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAppointmentsQueryVariables = {
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppointmentsQuery = {
  listAppointments?:  {
    __typename: "ModelAppointmentConnection",
    items:  Array< {
      __typename: "Appointment",
      id: string,
      appointmentDate: string,
      status: string,
      notes?: string | null,
      user_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAdminQueryVariables = {
  id: string,
};

export type GetAdminQuery = {
  getAdmin?:  {
    __typename: "Admin",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    access_type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAdminsQueryVariables = {
  filter?: ModelAdminFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAdminsQuery = {
  listAdmins?:  {
    __typename: "ModelAdminConnection",
    items:  Array< {
      __typename: "Admin",
      id: string,
      name: string,
      surname: string,
      email: string,
      password: string,
      access_type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMedicalRecordsQueryVariables = {
  id: string,
};

export type GetMedicalRecordsQuery = {
  getMedicalRecords?:  {
    __typename: "MedicalRecords",
    id: string,
    report_text: string,
    doctor_name: string,
    appointment_date: string,
    medical_report_status: string,
    patient_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMedicalRecordsQueryVariables = {
  filter?: ModelMedicalRecordsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMedicalRecordsQuery = {
  listMedicalRecords?:  {
    __typename: "ModelMedicalRecordsConnection",
    items:  Array< {
      __typename: "MedicalRecords",
      id: string,
      report_text: string,
      doctor_name: string,
      appointment_date: string,
      medical_report_status: string,
      patient_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPatientQueryVariables = {
  id: string,
};

export type GetPatientQuery = {
  getPatient?:  {
    __typename: "Patient",
    id: string,
    user_id?: string | null,
    prescription?:  {
      __typename: "ModelPrescriptionConnection",
      items:  Array< {
        __typename: "Prescription",
        id: string,
        patient_name: string,
        medication_name: string,
        dosage: string,
        doctor_name: string,
        patient_id?: string | null,
        medical_doctor_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    medicalRecords?:  {
      __typename: "ModelMedicalRecordsConnection",
      items:  Array< {
        __typename: "MedicalRecords",
        id: string,
        report_text: string,
        doctor_name: string,
        appointment_date: string,
        medical_report_status: string,
        patient_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPatientsQueryVariables = {
  filter?: ModelPatientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPatientsQuery = {
  listPatients?:  {
    __typename: "ModelPatientConnection",
    items:  Array< {
      __typename: "Patient",
      id: string,
      user_id?: string | null,
      prescription?:  {
        __typename: "ModelPrescriptionConnection",
        nextToken?: string | null,
      } | null,
      medicalRecords?:  {
        __typename: "ModelMedicalRecordsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetHospitalQueryVariables = {
  id: string,
};

export type GetHospitalQuery = {
  getHospital?:  {
    __typename: "Hospital",
    id: string,
    hospital_name: string,
    address: string,
    postal_code: string,
    medicalDoctor?:  {
      __typename: "ModelMedicalDoctorConnection",
      items:  Array< {
        __typename: "MedicalDoctor",
        id: string,
        first_name: string,
        last_name: string,
        specialization: string,
        email: string,
        password: string,
        phone: string,
        access_type?: string | null,
        hospital_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    departmentOfHomeAffairs?:  {
      __typename: "ModelDepartmentOfHomeAffairsConnection",
      items:  Array< {
        __typename: "DepartmentOfHomeAffairs",
        hospital_id?: string | null,
        name: string,
        surname: string,
        address: string,
        postal_code: string,
        id_number: string,
        cell_phone_no?: string | null,
        race: string,
        date_of_birth?: string | null,
        gender?: string | null,
        nationality?: string | null,
        email?: string | null,
        marital_status?: string | null,
        citizenship_status?: string | null,
        photo_url?: string | null,
        notes?: string | null,
        emergency_contact_name?: string | null,
        emergency_contact_phone?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListHospitalsQueryVariables = {
  filter?: ModelHospitalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHospitalsQuery = {
  listHospitals?:  {
    __typename: "ModelHospitalConnection",
    items:  Array< {
      __typename: "Hospital",
      id: string,
      hospital_name: string,
      address: string,
      postal_code: string,
      medicalDoctor?:  {
        __typename: "ModelMedicalDoctorConnection",
        nextToken?: string | null,
      } | null,
      departmentOfHomeAffairs?:  {
        __typename: "ModelDepartmentOfHomeAffairsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPrescriptionQueryVariables = {
  id: string,
};

export type GetPrescriptionQuery = {
  getPrescription?:  {
    __typename: "Prescription",
    id: string,
    patient_name: string,
    medication_name: string,
    dosage: string,
    doctor_name: string,
    patient_id?: string | null,
    medical_doctor_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPrescriptionsQueryVariables = {
  filter?: ModelPrescriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPrescriptionsQuery = {
  listPrescriptions?:  {
    __typename: "ModelPrescriptionConnection",
    items:  Array< {
      __typename: "Prescription",
      id: string,
      patient_name: string,
      medication_name: string,
      dosage: string,
      doctor_name: string,
      patient_id?: string | null,
      medical_doctor_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMedicalDoctorQueryVariables = {
  id: string,
};

export type GetMedicalDoctorQuery = {
  getMedicalDoctor?:  {
    __typename: "MedicalDoctor",
    id: string,
    first_name: string,
    last_name: string,
    specialization: string,
    email: string,
    password: string,
    phone: string,
    access_type?: string | null,
    hospital_id?: string | null,
    prescription?:  {
      __typename: "ModelPrescriptionConnection",
      items:  Array< {
        __typename: "Prescription",
        id: string,
        patient_name: string,
        medication_name: string,
        dosage: string,
        doctor_name: string,
        patient_id?: string | null,
        medical_doctor_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMedicalDoctorsQueryVariables = {
  filter?: ModelMedicalDoctorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMedicalDoctorsQuery = {
  listMedicalDoctors?:  {
    __typename: "ModelMedicalDoctorConnection",
    items:  Array< {
      __typename: "MedicalDoctor",
      id: string,
      first_name: string,
      last_name: string,
      specialization: string,
      email: string,
      password: string,
      phone: string,
      access_type?: string | null,
      hospital_id?: string | null,
      prescription?:  {
        __typename: "ModelPrescriptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDepartmentOfHomeAffairsQueryVariables = {
  id: string,
};

export type GetDepartmentOfHomeAffairsQuery = {
  getDepartmentOfHomeAffairs?:  {
    __typename: "DepartmentOfHomeAffairs",
    hospital_id?: string | null,
    name: string,
    surname: string,
    address: string,
    postal_code: string,
    id_number: string,
    cell_phone_no?: string | null,
    race: string,
    date_of_birth?: string | null,
    gender?: string | null,
    nationality?: string | null,
    email?: string | null,
    marital_status?: string | null,
    citizenship_status?: string | null,
    photo_url?: string | null,
    notes?: string | null,
    emergency_contact_name?: string | null,
    emergency_contact_phone?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDepartmentOfHomeAffairsQueryVariables = {
  filter?: ModelDepartmentOfHomeAffairsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDepartmentOfHomeAffairsQuery = {
  listDepartmentOfHomeAffairs?:  {
    __typename: "ModelDepartmentOfHomeAffairsConnection",
    items:  Array< {
      __typename: "DepartmentOfHomeAffairs",
      hospital_id?: string | null,
      name: string,
      surname: string,
      address: string,
      postal_code: string,
      id_number: string,
      cell_phone_no?: string | null,
      race: string,
      date_of_birth?: string | null,
      gender?: string | null,
      nationality?: string | null,
      email?: string | null,
      marital_status?: string | null,
      citizenship_status?: string | null,
      photo_url?: string | null,
      notes?: string | null,
      emergency_contact_name?: string | null,
      emergency_contact_phone?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BiometricDataByUser_idQueryVariables = {
  user_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBiometricDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BiometricDataByUser_idQuery = {
  biometricDataByUser_id?:  {
    __typename: "ModelBiometricDataConnection",
    items:  Array< {
      __typename: "BiometricData",
      id: string,
      data: string,
      status: string,
      user_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AppointmentsByUser_idQueryVariables = {
  user_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AppointmentsByUser_idQuery = {
  appointmentsByUser_id?:  {
    __typename: "ModelAppointmentConnection",
    items:  Array< {
      __typename: "Appointment",
      id: string,
      appointmentDate: string,
      status: string,
      notes?: string | null,
      user_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MedicalRecordsByPatient_idQueryVariables = {
  patient_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMedicalRecordsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MedicalRecordsByPatient_idQuery = {
  medicalRecordsByPatient_id?:  {
    __typename: "ModelMedicalRecordsConnection",
    items:  Array< {
      __typename: "MedicalRecords",
      id: string,
      report_text: string,
      doctor_name: string,
      appointment_date: string,
      medical_report_status: string,
      patient_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PatientsByUser_idQueryVariables = {
  user_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPatientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PatientsByUser_idQuery = {
  patientsByUser_id?:  {
    __typename: "ModelPatientConnection",
    items:  Array< {
      __typename: "Patient",
      id: string,
      user_id?: string | null,
      prescription?:  {
        __typename: "ModelPrescriptionConnection",
        nextToken?: string | null,
      } | null,
      medicalRecords?:  {
        __typename: "ModelMedicalRecordsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PrescriptionsByPatient_idQueryVariables = {
  patient_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPrescriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PrescriptionsByPatient_idQuery = {
  prescriptionsByPatient_id?:  {
    __typename: "ModelPrescriptionConnection",
    items:  Array< {
      __typename: "Prescription",
      id: string,
      patient_name: string,
      medication_name: string,
      dosage: string,
      doctor_name: string,
      patient_id?: string | null,
      medical_doctor_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PrescriptionsByMedical_doctor_idQueryVariables = {
  medical_doctor_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPrescriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PrescriptionsByMedical_doctor_idQuery = {
  prescriptionsByMedical_doctor_id?:  {
    __typename: "ModelPrescriptionConnection",
    items:  Array< {
      __typename: "Prescription",
      id: string,
      patient_name: string,
      medication_name: string,
      dosage: string,
      doctor_name: string,
      patient_id?: string | null,
      medical_doctor_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MedicalDoctorsByHospital_idQueryVariables = {
  hospital_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMedicalDoctorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MedicalDoctorsByHospital_idQuery = {
  medicalDoctorsByHospital_id?:  {
    __typename: "ModelMedicalDoctorConnection",
    items:  Array< {
      __typename: "MedicalDoctor",
      id: string,
      first_name: string,
      last_name: string,
      specialization: string,
      email: string,
      password: string,
      phone: string,
      access_type?: string | null,
      hospital_id?: string | null,
      prescription?:  {
        __typename: "ModelPrescriptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type DepartmentOfHomeAffairsByHospital_idQueryVariables = {
  hospital_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDepartmentOfHomeAffairsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type DepartmentOfHomeAffairsByHospital_idQuery = {
  departmentOfHomeAffairsByHospital_id?:  {
    __typename: "ModelDepartmentOfHomeAffairsConnection",
    items:  Array< {
      __typename: "DepartmentOfHomeAffairs",
      hospital_id?: string | null,
      name: string,
      surname: string,
      address: string,
      postal_code: string,
      id_number: string,
      cell_phone_no?: string | null,
      race: string,
      date_of_birth?: string | null,
      gender?: string | null,
      nationality?: string | null,
      email?: string | null,
      marital_status?: string | null,
      citizenship_status?: string | null,
      photo_url?: string | null,
      notes?: string | null,
      emergency_contact_name?: string | null,
      emergency_contact_phone?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    address: string,
    postal_code: string,
    id_number: string,
    cell_phone_no: string,
    access_type: string,
    biometricdata?:  {
      __typename: "ModelBiometricDataConnection",
      items:  Array< {
        __typename: "BiometricData",
        id: string,
        data: string,
        status: string,
        user_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    patient?:  {
      __typename: "ModelPatientConnection",
      items:  Array< {
        __typename: "Patient",
        id: string,
        user_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    appointment?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        appointmentDate: string,
        status: string,
        notes?: string | null,
        user_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    address: string,
    postal_code: string,
    id_number: string,
    cell_phone_no: string,
    access_type: string,
    biometricdata?:  {
      __typename: "ModelBiometricDataConnection",
      items:  Array< {
        __typename: "BiometricData",
        id: string,
        data: string,
        status: string,
        user_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    patient?:  {
      __typename: "ModelPatientConnection",
      items:  Array< {
        __typename: "Patient",
        id: string,
        user_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    appointment?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        appointmentDate: string,
        status: string,
        notes?: string | null,
        user_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    address: string,
    postal_code: string,
    id_number: string,
    cell_phone_no: string,
    access_type: string,
    biometricdata?:  {
      __typename: "ModelBiometricDataConnection",
      items:  Array< {
        __typename: "BiometricData",
        id: string,
        data: string,
        status: string,
        user_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    patient?:  {
      __typename: "ModelPatientConnection",
      items:  Array< {
        __typename: "Patient",
        id: string,
        user_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    appointment?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        appointmentDate: string,
        status: string,
        notes?: string | null,
        user_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBiometricDataSubscriptionVariables = {
  filter?: ModelSubscriptionBiometricDataFilterInput | null,
};

export type OnCreateBiometricDataSubscription = {
  onCreateBiometricData?:  {
    __typename: "BiometricData",
    id: string,
    data: string,
    status: string,
    user_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBiometricDataSubscriptionVariables = {
  filter?: ModelSubscriptionBiometricDataFilterInput | null,
};

export type OnUpdateBiometricDataSubscription = {
  onUpdateBiometricData?:  {
    __typename: "BiometricData",
    id: string,
    data: string,
    status: string,
    user_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBiometricDataSubscriptionVariables = {
  filter?: ModelSubscriptionBiometricDataFilterInput | null,
};

export type OnDeleteBiometricDataSubscription = {
  onDeleteBiometricData?:  {
    __typename: "BiometricData",
    id: string,
    data: string,
    status: string,
    user_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAppointmentSubscriptionVariables = {
  filter?: ModelSubscriptionAppointmentFilterInput | null,
};

export type OnCreateAppointmentSubscription = {
  onCreateAppointment?:  {
    __typename: "Appointment",
    id: string,
    appointmentDate: string,
    status: string,
    notes?: string | null,
    user_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAppointmentSubscriptionVariables = {
  filter?: ModelSubscriptionAppointmentFilterInput | null,
};

export type OnUpdateAppointmentSubscription = {
  onUpdateAppointment?:  {
    __typename: "Appointment",
    id: string,
    appointmentDate: string,
    status: string,
    notes?: string | null,
    user_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAppointmentSubscriptionVariables = {
  filter?: ModelSubscriptionAppointmentFilterInput | null,
};

export type OnDeleteAppointmentSubscription = {
  onDeleteAppointment?:  {
    __typename: "Appointment",
    id: string,
    appointmentDate: string,
    status: string,
    notes?: string | null,
    user_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAdminSubscriptionVariables = {
  filter?: ModelSubscriptionAdminFilterInput | null,
};

export type OnCreateAdminSubscription = {
  onCreateAdmin?:  {
    __typename: "Admin",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    access_type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAdminSubscriptionVariables = {
  filter?: ModelSubscriptionAdminFilterInput | null,
};

export type OnUpdateAdminSubscription = {
  onUpdateAdmin?:  {
    __typename: "Admin",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    access_type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAdminSubscriptionVariables = {
  filter?: ModelSubscriptionAdminFilterInput | null,
};

export type OnDeleteAdminSubscription = {
  onDeleteAdmin?:  {
    __typename: "Admin",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    access_type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMedicalRecordsSubscriptionVariables = {
  filter?: ModelSubscriptionMedicalRecordsFilterInput | null,
};

export type OnCreateMedicalRecordsSubscription = {
  onCreateMedicalRecords?:  {
    __typename: "MedicalRecords",
    id: string,
    report_text: string,
    doctor_name: string,
    appointment_date: string,
    medical_report_status: string,
    patient_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMedicalRecordsSubscriptionVariables = {
  filter?: ModelSubscriptionMedicalRecordsFilterInput | null,
};

export type OnUpdateMedicalRecordsSubscription = {
  onUpdateMedicalRecords?:  {
    __typename: "MedicalRecords",
    id: string,
    report_text: string,
    doctor_name: string,
    appointment_date: string,
    medical_report_status: string,
    patient_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMedicalRecordsSubscriptionVariables = {
  filter?: ModelSubscriptionMedicalRecordsFilterInput | null,
};

export type OnDeleteMedicalRecordsSubscription = {
  onDeleteMedicalRecords?:  {
    __typename: "MedicalRecords",
    id: string,
    report_text: string,
    doctor_name: string,
    appointment_date: string,
    medical_report_status: string,
    patient_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePatientSubscriptionVariables = {
  filter?: ModelSubscriptionPatientFilterInput | null,
};

export type OnCreatePatientSubscription = {
  onCreatePatient?:  {
    __typename: "Patient",
    id: string,
    user_id?: string | null,
    prescription?:  {
      __typename: "ModelPrescriptionConnection",
      items:  Array< {
        __typename: "Prescription",
        id: string,
        patient_name: string,
        medication_name: string,
        dosage: string,
        doctor_name: string,
        patient_id?: string | null,
        medical_doctor_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    medicalRecords?:  {
      __typename: "ModelMedicalRecordsConnection",
      items:  Array< {
        __typename: "MedicalRecords",
        id: string,
        report_text: string,
        doctor_name: string,
        appointment_date: string,
        medical_report_status: string,
        patient_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePatientSubscriptionVariables = {
  filter?: ModelSubscriptionPatientFilterInput | null,
};

export type OnUpdatePatientSubscription = {
  onUpdatePatient?:  {
    __typename: "Patient",
    id: string,
    user_id?: string | null,
    prescription?:  {
      __typename: "ModelPrescriptionConnection",
      items:  Array< {
        __typename: "Prescription",
        id: string,
        patient_name: string,
        medication_name: string,
        dosage: string,
        doctor_name: string,
        patient_id?: string | null,
        medical_doctor_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    medicalRecords?:  {
      __typename: "ModelMedicalRecordsConnection",
      items:  Array< {
        __typename: "MedicalRecords",
        id: string,
        report_text: string,
        doctor_name: string,
        appointment_date: string,
        medical_report_status: string,
        patient_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePatientSubscriptionVariables = {
  filter?: ModelSubscriptionPatientFilterInput | null,
};

export type OnDeletePatientSubscription = {
  onDeletePatient?:  {
    __typename: "Patient",
    id: string,
    user_id?: string | null,
    prescription?:  {
      __typename: "ModelPrescriptionConnection",
      items:  Array< {
        __typename: "Prescription",
        id: string,
        patient_name: string,
        medication_name: string,
        dosage: string,
        doctor_name: string,
        patient_id?: string | null,
        medical_doctor_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    medicalRecords?:  {
      __typename: "ModelMedicalRecordsConnection",
      items:  Array< {
        __typename: "MedicalRecords",
        id: string,
        report_text: string,
        doctor_name: string,
        appointment_date: string,
        medical_report_status: string,
        patient_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateHospitalSubscriptionVariables = {
  filter?: ModelSubscriptionHospitalFilterInput | null,
};

export type OnCreateHospitalSubscription = {
  onCreateHospital?:  {
    __typename: "Hospital",
    id: string,
    hospital_name: string,
    address: string,
    postal_code: string,
    medicalDoctor?:  {
      __typename: "ModelMedicalDoctorConnection",
      items:  Array< {
        __typename: "MedicalDoctor",
        id: string,
        first_name: string,
        last_name: string,
        specialization: string,
        email: string,
        password: string,
        phone: string,
        access_type?: string | null,
        hospital_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    departmentOfHomeAffairs?:  {
      __typename: "ModelDepartmentOfHomeAffairsConnection",
      items:  Array< {
        __typename: "DepartmentOfHomeAffairs",
        hospital_id?: string | null,
        name: string,
        surname: string,
        address: string,
        postal_code: string,
        id_number: string,
        cell_phone_no?: string | null,
        race: string,
        date_of_birth?: string | null,
        gender?: string | null,
        nationality?: string | null,
        email?: string | null,
        marital_status?: string | null,
        citizenship_status?: string | null,
        photo_url?: string | null,
        notes?: string | null,
        emergency_contact_name?: string | null,
        emergency_contact_phone?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateHospitalSubscriptionVariables = {
  filter?: ModelSubscriptionHospitalFilterInput | null,
};

export type OnUpdateHospitalSubscription = {
  onUpdateHospital?:  {
    __typename: "Hospital",
    id: string,
    hospital_name: string,
    address: string,
    postal_code: string,
    medicalDoctor?:  {
      __typename: "ModelMedicalDoctorConnection",
      items:  Array< {
        __typename: "MedicalDoctor",
        id: string,
        first_name: string,
        last_name: string,
        specialization: string,
        email: string,
        password: string,
        phone: string,
        access_type?: string | null,
        hospital_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    departmentOfHomeAffairs?:  {
      __typename: "ModelDepartmentOfHomeAffairsConnection",
      items:  Array< {
        __typename: "DepartmentOfHomeAffairs",
        hospital_id?: string | null,
        name: string,
        surname: string,
        address: string,
        postal_code: string,
        id_number: string,
        cell_phone_no?: string | null,
        race: string,
        date_of_birth?: string | null,
        gender?: string | null,
        nationality?: string | null,
        email?: string | null,
        marital_status?: string | null,
        citizenship_status?: string | null,
        photo_url?: string | null,
        notes?: string | null,
        emergency_contact_name?: string | null,
        emergency_contact_phone?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteHospitalSubscriptionVariables = {
  filter?: ModelSubscriptionHospitalFilterInput | null,
};

export type OnDeleteHospitalSubscription = {
  onDeleteHospital?:  {
    __typename: "Hospital",
    id: string,
    hospital_name: string,
    address: string,
    postal_code: string,
    medicalDoctor?:  {
      __typename: "ModelMedicalDoctorConnection",
      items:  Array< {
        __typename: "MedicalDoctor",
        id: string,
        first_name: string,
        last_name: string,
        specialization: string,
        email: string,
        password: string,
        phone: string,
        access_type?: string | null,
        hospital_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    departmentOfHomeAffairs?:  {
      __typename: "ModelDepartmentOfHomeAffairsConnection",
      items:  Array< {
        __typename: "DepartmentOfHomeAffairs",
        hospital_id?: string | null,
        name: string,
        surname: string,
        address: string,
        postal_code: string,
        id_number: string,
        cell_phone_no?: string | null,
        race: string,
        date_of_birth?: string | null,
        gender?: string | null,
        nationality?: string | null,
        email?: string | null,
        marital_status?: string | null,
        citizenship_status?: string | null,
        photo_url?: string | null,
        notes?: string | null,
        emergency_contact_name?: string | null,
        emergency_contact_phone?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePrescriptionSubscriptionVariables = {
  filter?: ModelSubscriptionPrescriptionFilterInput | null,
};

export type OnCreatePrescriptionSubscription = {
  onCreatePrescription?:  {
    __typename: "Prescription",
    id: string,
    patient_name: string,
    medication_name: string,
    dosage: string,
    doctor_name: string,
    patient_id?: string | null,
    medical_doctor_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePrescriptionSubscriptionVariables = {
  filter?: ModelSubscriptionPrescriptionFilterInput | null,
};

export type OnUpdatePrescriptionSubscription = {
  onUpdatePrescription?:  {
    __typename: "Prescription",
    id: string,
    patient_name: string,
    medication_name: string,
    dosage: string,
    doctor_name: string,
    patient_id?: string | null,
    medical_doctor_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePrescriptionSubscriptionVariables = {
  filter?: ModelSubscriptionPrescriptionFilterInput | null,
};

export type OnDeletePrescriptionSubscription = {
  onDeletePrescription?:  {
    __typename: "Prescription",
    id: string,
    patient_name: string,
    medication_name: string,
    dosage: string,
    doctor_name: string,
    patient_id?: string | null,
    medical_doctor_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMedicalDoctorSubscriptionVariables = {
  filter?: ModelSubscriptionMedicalDoctorFilterInput | null,
};

export type OnCreateMedicalDoctorSubscription = {
  onCreateMedicalDoctor?:  {
    __typename: "MedicalDoctor",
    id: string,
    first_name: string,
    last_name: string,
    specialization: string,
    email: string,
    password: string,
    phone: string,
    access_type?: string | null,
    hospital_id?: string | null,
    prescription?:  {
      __typename: "ModelPrescriptionConnection",
      items:  Array< {
        __typename: "Prescription",
        id: string,
        patient_name: string,
        medication_name: string,
        dosage: string,
        doctor_name: string,
        patient_id?: string | null,
        medical_doctor_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMedicalDoctorSubscriptionVariables = {
  filter?: ModelSubscriptionMedicalDoctorFilterInput | null,
};

export type OnUpdateMedicalDoctorSubscription = {
  onUpdateMedicalDoctor?:  {
    __typename: "MedicalDoctor",
    id: string,
    first_name: string,
    last_name: string,
    specialization: string,
    email: string,
    password: string,
    phone: string,
    access_type?: string | null,
    hospital_id?: string | null,
    prescription?:  {
      __typename: "ModelPrescriptionConnection",
      items:  Array< {
        __typename: "Prescription",
        id: string,
        patient_name: string,
        medication_name: string,
        dosage: string,
        doctor_name: string,
        patient_id?: string | null,
        medical_doctor_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMedicalDoctorSubscriptionVariables = {
  filter?: ModelSubscriptionMedicalDoctorFilterInput | null,
};

export type OnDeleteMedicalDoctorSubscription = {
  onDeleteMedicalDoctor?:  {
    __typename: "MedicalDoctor",
    id: string,
    first_name: string,
    last_name: string,
    specialization: string,
    email: string,
    password: string,
    phone: string,
    access_type?: string | null,
    hospital_id?: string | null,
    prescription?:  {
      __typename: "ModelPrescriptionConnection",
      items:  Array< {
        __typename: "Prescription",
        id: string,
        patient_name: string,
        medication_name: string,
        dosage: string,
        doctor_name: string,
        patient_id?: string | null,
        medical_doctor_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDepartmentOfHomeAffairsSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentOfHomeAffairsFilterInput | null,
};

export type OnCreateDepartmentOfHomeAffairsSubscription = {
  onCreateDepartmentOfHomeAffairs?:  {
    __typename: "DepartmentOfHomeAffairs",
    hospital_id?: string | null,
    name: string,
    surname: string,
    address: string,
    postal_code: string,
    id_number: string,
    cell_phone_no?: string | null,
    race: string,
    date_of_birth?: string | null,
    gender?: string | null,
    nationality?: string | null,
    email?: string | null,
    marital_status?: string | null,
    citizenship_status?: string | null,
    photo_url?: string | null,
    notes?: string | null,
    emergency_contact_name?: string | null,
    emergency_contact_phone?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDepartmentOfHomeAffairsSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentOfHomeAffairsFilterInput | null,
};

export type OnUpdateDepartmentOfHomeAffairsSubscription = {
  onUpdateDepartmentOfHomeAffairs?:  {
    __typename: "DepartmentOfHomeAffairs",
    hospital_id?: string | null,
    name: string,
    surname: string,
    address: string,
    postal_code: string,
    id_number: string,
    cell_phone_no?: string | null,
    race: string,
    date_of_birth?: string | null,
    gender?: string | null,
    nationality?: string | null,
    email?: string | null,
    marital_status?: string | null,
    citizenship_status?: string | null,
    photo_url?: string | null,
    notes?: string | null,
    emergency_contact_name?: string | null,
    emergency_contact_phone?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDepartmentOfHomeAffairsSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentOfHomeAffairsFilterInput | null,
};

export type OnDeleteDepartmentOfHomeAffairsSubscription = {
  onDeleteDepartmentOfHomeAffairs?:  {
    __typename: "DepartmentOfHomeAffairs",
    hospital_id?: string | null,
    name: string,
    surname: string,
    address: string,
    postal_code: string,
    id_number: string,
    cell_phone_no?: string | null,
    race: string,
    date_of_birth?: string | null,
    gender?: string | null,
    nationality?: string | null,
    email?: string | null,
    marital_status?: string | null,
    citizenship_status?: string | null,
    photo_url?: string | null,
    notes?: string | null,
    emergency_contact_name?: string | null,
    emergency_contact_phone?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
