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
  notification?: ModelNotificationConnection | null,
  medicalReport?: ModelMedicalReportConnection | null,
  biometricData?: ModelBiometricDataConnection | null,
  governmentGrant?: GovernmentGrant | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelNotificationConnection = {
  __typename: "ModelNotificationConnection",
  items:  Array<Notification | null >,
  nextToken?: string | null,
};

export type Notification = {
  __typename: "Notification",
  id: string,
  message: string,
  user_id: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelMedicalReportConnection = {
  __typename: "ModelMedicalReportConnection",
  items:  Array<MedicalReport | null >,
  nextToken?: string | null,
};

export type MedicalReport = {
  __typename: "MedicalReport",
  id: string,
  report_text?: string | null,
  doctor_name?: string | null,
  appointment_date?: string | null,
  medical_report_status: string,
  user_id: string,
  hospital?: ModelHospitalConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelHospitalConnection = {
  __typename: "ModelHospitalConnection",
  items:  Array<Hospital | null >,
  nextToken?: string | null,
};

export type Hospital = {
  __typename: "Hospital",
  id: string,
  hospital_name: string,
  address: string,
  postal_code: string,
  medical_report_id: string,
  doctor?: ModelDoctorConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelDoctorConnection = {
  __typename: "ModelDoctorConnection",
  items:  Array<Doctor | null >,
  nextToken?: string | null,
};

export type Doctor = {
  __typename: "Doctor",
  id: string,
  first_name?: string | null,
  last_name?: string | null,
  specialization?: string | null,
  contactInformation?: ContactInfo | null,
  cell_no?: string | null,
  hospital_id: string,
  createdAt: string,
  updatedAt: string,
};

export type ContactInfo = {
  __typename: "ContactInfo",
  email?: string | null,
  phone?: string | null,
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
  user_id: string,
  createdAt: string,
  updatedAt: string,
};

export type GovernmentGrant = {
  __typename: "GovernmentGrant",
  id: string,
  grantName: string,
  description?: string | null,
  amount?: number | null,
  startDate?: string | null,
  endDate?: string | null,
  applicationDeadline?: string | null,
  eligibilityRequirements?: Array< string | null > | null,
  applicationProcess?: string | null,
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

export type CreateNotificationInput = {
  id?: string | null,
  message: string,
  user_id: string,
};

export type ModelNotificationConditionInput = {
  message?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  and?: Array< ModelNotificationConditionInput | null > | null,
  or?: Array< ModelNotificationConditionInput | null > | null,
  not?: ModelNotificationConditionInput | null,
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

export type UpdateNotificationInput = {
  id: string,
  message?: string | null,
  user_id?: string | null,
};

export type DeleteNotificationInput = {
  id: string,
};

export type CreateBiometricDataInput = {
  id?: string | null,
  data: string,
  status: string,
  user_id: string,
};

export type ModelBiometricDataConditionInput = {
  data?: ModelStringInput | null,
  status?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  and?: Array< ModelBiometricDataConditionInput | null > | null,
  or?: Array< ModelBiometricDataConditionInput | null > | null,
  not?: ModelBiometricDataConditionInput | null,
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

export type CreateMedicalReportInput = {
  id?: string | null,
  report_text?: string | null,
  doctor_name?: string | null,
  appointment_date?: string | null,
  medical_report_status: string,
  user_id: string,
};

export type ModelMedicalReportConditionInput = {
  report_text?: ModelStringInput | null,
  doctor_name?: ModelStringInput | null,
  appointment_date?: ModelStringInput | null,
  medical_report_status?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  and?: Array< ModelMedicalReportConditionInput | null > | null,
  or?: Array< ModelMedicalReportConditionInput | null > | null,
  not?: ModelMedicalReportConditionInput | null,
};

export type UpdateMedicalReportInput = {
  id: string,
  report_text?: string | null,
  doctor_name?: string | null,
  appointment_date?: string | null,
  medical_report_status?: string | null,
  user_id?: string | null,
};

export type DeleteMedicalReportInput = {
  id: string,
};

export type CreateMedicalHistoryInput = {
  id?: string | null,
  condition?: string | null,
  allergies?: string | null,
  surgeries?: string | null,
  medications?: string | null,
  user_id: string,
};

export type ModelMedicalHistoryConditionInput = {
  condition?: ModelStringInput | null,
  allergies?: ModelStringInput | null,
  surgeries?: ModelStringInput | null,
  medications?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  and?: Array< ModelMedicalHistoryConditionInput | null > | null,
  or?: Array< ModelMedicalHistoryConditionInput | null > | null,
  not?: ModelMedicalHistoryConditionInput | null,
};

export type MedicalHistory = {
  __typename: "MedicalHistory",
  id: string,
  condition?: string | null,
  allergies?: string | null,
  surgeries?: string | null,
  medications?: string | null,
  user_id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMedicalHistoryInput = {
  id: string,
  condition?: string | null,
  allergies?: string | null,
  surgeries?: string | null,
  medications?: string | null,
  user_id?: string | null,
};

export type DeleteMedicalHistoryInput = {
  id: string,
};

export type CreateHospitalInput = {
  id?: string | null,
  hospital_name: string,
  address: string,
  postal_code: string,
  medical_report_id: string,
};

export type ModelHospitalConditionInput = {
  hospital_name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  medical_report_id?: ModelIDInput | null,
  and?: Array< ModelHospitalConditionInput | null > | null,
  or?: Array< ModelHospitalConditionInput | null > | null,
  not?: ModelHospitalConditionInput | null,
};

export type UpdateHospitalInput = {
  id: string,
  hospital_name?: string | null,
  address?: string | null,
  postal_code?: string | null,
  medical_report_id?: string | null,
};

export type DeleteHospitalInput = {
  id: string,
};

export type CreateDoctorInput = {
  id?: string | null,
  first_name?: string | null,
  last_name?: string | null,
  specialization?: string | null,
  contactInformation?: ContactInfoInput | null,
  cell_no?: string | null,
  hospital_id: string,
};

export type ContactInfoInput = {
  email?: string | null,
  phone?: string | null,
};

export type ModelDoctorConditionInput = {
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  specialization?: ModelStringInput | null,
  cell_no?: ModelStringInput | null,
  hospital_id?: ModelIDInput | null,
  and?: Array< ModelDoctorConditionInput | null > | null,
  or?: Array< ModelDoctorConditionInput | null > | null,
  not?: ModelDoctorConditionInput | null,
};

export type UpdateDoctorInput = {
  id: string,
  first_name?: string | null,
  last_name?: string | null,
  specialization?: string | null,
  contactInformation?: ContactInfoInput | null,
  cell_no?: string | null,
  hospital_id?: string | null,
};

export type DeleteDoctorInput = {
  id: string,
};

export type CreateGovernmentGrantInput = {
  id?: string | null,
  grantName: string,
  description?: string | null,
  amount?: number | null,
  startDate?: string | null,
  endDate?: string | null,
  applicationDeadline?: string | null,
  eligibilityRequirements?: Array< string | null > | null,
  applicationProcess?: string | null,
};

export type ModelGovernmentGrantConditionInput = {
  grantName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  applicationDeadline?: ModelStringInput | null,
  eligibilityRequirements?: ModelStringInput | null,
  applicationProcess?: ModelStringInput | null,
  and?: Array< ModelGovernmentGrantConditionInput | null > | null,
  or?: Array< ModelGovernmentGrantConditionInput | null > | null,
  not?: ModelGovernmentGrantConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateGovernmentGrantInput = {
  id: string,
  grantName?: string | null,
  description?: string | null,
  amount?: number | null,
  startDate?: string | null,
  endDate?: string | null,
  applicationDeadline?: string | null,
  eligibilityRequirements?: Array< string | null > | null,
  applicationProcess?: string | null,
};

export type DeleteGovernmentGrantInput = {
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

export type ModelNotificationFilterInput = {
  id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  and?: Array< ModelNotificationFilterInput | null > | null,
  or?: Array< ModelNotificationFilterInput | null > | null,
  not?: ModelNotificationFilterInput | null,
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

export type ModelMedicalReportFilterInput = {
  id?: ModelIDInput | null,
  report_text?: ModelStringInput | null,
  doctor_name?: ModelStringInput | null,
  appointment_date?: ModelStringInput | null,
  medical_report_status?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  and?: Array< ModelMedicalReportFilterInput | null > | null,
  or?: Array< ModelMedicalReportFilterInput | null > | null,
  not?: ModelMedicalReportFilterInput | null,
};

export type ModelMedicalHistoryFilterInput = {
  id?: ModelIDInput | null,
  condition?: ModelStringInput | null,
  allergies?: ModelStringInput | null,
  surgeries?: ModelStringInput | null,
  medications?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  and?: Array< ModelMedicalHistoryFilterInput | null > | null,
  or?: Array< ModelMedicalHistoryFilterInput | null > | null,
  not?: ModelMedicalHistoryFilterInput | null,
};

export type ModelMedicalHistoryConnection = {
  __typename: "ModelMedicalHistoryConnection",
  items:  Array<MedicalHistory | null >,
  nextToken?: string | null,
};

export type ModelHospitalFilterInput = {
  id?: ModelIDInput | null,
  hospital_name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  medical_report_id?: ModelIDInput | null,
  and?: Array< ModelHospitalFilterInput | null > | null,
  or?: Array< ModelHospitalFilterInput | null > | null,
  not?: ModelHospitalFilterInput | null,
};

export type ModelDoctorFilterInput = {
  id?: ModelIDInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  specialization?: ModelStringInput | null,
  cell_no?: ModelStringInput | null,
  hospital_id?: ModelIDInput | null,
  and?: Array< ModelDoctorFilterInput | null > | null,
  or?: Array< ModelDoctorFilterInput | null > | null,
  not?: ModelDoctorFilterInput | null,
};

export type ModelGovernmentGrantFilterInput = {
  id?: ModelIDInput | null,
  grantName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  applicationDeadline?: ModelStringInput | null,
  eligibilityRequirements?: ModelStringInput | null,
  applicationProcess?: ModelStringInput | null,
  and?: Array< ModelGovernmentGrantFilterInput | null > | null,
  or?: Array< ModelGovernmentGrantFilterInput | null > | null,
  not?: ModelGovernmentGrantFilterInput | null,
};

export type ModelGovernmentGrantConnection = {
  __typename: "ModelGovernmentGrantConnection",
  items:  Array<GovernmentGrant | null >,
  nextToken?: string | null,
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

export type ModelSubscriptionNotificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  message?: ModelSubscriptionStringInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
};

export type ModelSubscriptionBiometricDataFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  data?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBiometricDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionBiometricDataFilterInput | null > | null,
};

export type ModelSubscriptionMedicalReportFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  report_text?: ModelSubscriptionStringInput | null,
  doctor_name?: ModelSubscriptionStringInput | null,
  appointment_date?: ModelSubscriptionStringInput | null,
  medical_report_status?: ModelSubscriptionStringInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMedicalReportFilterInput | null > | null,
  or?: Array< ModelSubscriptionMedicalReportFilterInput | null > | null,
};

export type ModelSubscriptionMedicalHistoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  condition?: ModelSubscriptionStringInput | null,
  allergies?: ModelSubscriptionStringInput | null,
  surgeries?: ModelSubscriptionStringInput | null,
  medications?: ModelSubscriptionStringInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMedicalHistoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionMedicalHistoryFilterInput | null > | null,
};

export type ModelSubscriptionHospitalFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  hospital_name?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  postal_code?: ModelSubscriptionStringInput | null,
  medical_report_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionHospitalFilterInput | null > | null,
  or?: Array< ModelSubscriptionHospitalFilterInput | null > | null,
};

export type ModelSubscriptionDoctorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  first_name?: ModelSubscriptionStringInput | null,
  last_name?: ModelSubscriptionStringInput | null,
  specialization?: ModelSubscriptionStringInput | null,
  cell_no?: ModelSubscriptionStringInput | null,
  hospital_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionDoctorFilterInput | null > | null,
  or?: Array< ModelSubscriptionDoctorFilterInput | null > | null,
};

export type ModelSubscriptionGovernmentGrantFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  grantName?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  amount?: ModelSubscriptionFloatInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  applicationDeadline?: ModelSubscriptionStringInput | null,
  eligibilityRequirements?: ModelSubscriptionStringInput | null,
  applicationProcess?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGovernmentGrantFilterInput | null > | null,
  or?: Array< ModelSubscriptionGovernmentGrantFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
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
    notification?:  {
      __typename: "ModelNotificationConnection",
      items:  Array< {
        __typename: "Notification",
        id: string,
        message: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    medicalReport?:  {
      __typename: "ModelMedicalReportConnection",
      items:  Array< {
        __typename: "MedicalReport",
        id: string,
        report_text?: string | null,
        doctor_name?: string | null,
        appointment_date?: string | null,
        medical_report_status: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    biometricData?:  {
      __typename: "ModelBiometricDataConnection",
      items:  Array< {
        __typename: "BiometricData",
        id: string,
        data: string,
        status: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    governmentGrant?:  {
      __typename: "GovernmentGrant",
      id: string,
      grantName: string,
      description?: string | null,
      amount?: number | null,
      startDate?: string | null,
      endDate?: string | null,
      applicationDeadline?: string | null,
      eligibilityRequirements?: Array< string | null > | null,
      applicationProcess?: string | null,
      createdAt: string,
      updatedAt: string,
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
    notification?:  {
      __typename: "ModelNotificationConnection",
      items:  Array< {
        __typename: "Notification",
        id: string,
        message: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    medicalReport?:  {
      __typename: "ModelMedicalReportConnection",
      items:  Array< {
        __typename: "MedicalReport",
        id: string,
        report_text?: string | null,
        doctor_name?: string | null,
        appointment_date?: string | null,
        medical_report_status: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    biometricData?:  {
      __typename: "ModelBiometricDataConnection",
      items:  Array< {
        __typename: "BiometricData",
        id: string,
        data: string,
        status: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    governmentGrant?:  {
      __typename: "GovernmentGrant",
      id: string,
      grantName: string,
      description?: string | null,
      amount?: number | null,
      startDate?: string | null,
      endDate?: string | null,
      applicationDeadline?: string | null,
      eligibilityRequirements?: Array< string | null > | null,
      applicationProcess?: string | null,
      createdAt: string,
      updatedAt: string,
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
    notification?:  {
      __typename: "ModelNotificationConnection",
      items:  Array< {
        __typename: "Notification",
        id: string,
        message: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    medicalReport?:  {
      __typename: "ModelMedicalReportConnection",
      items:  Array< {
        __typename: "MedicalReport",
        id: string,
        report_text?: string | null,
        doctor_name?: string | null,
        appointment_date?: string | null,
        medical_report_status: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    biometricData?:  {
      __typename: "ModelBiometricDataConnection",
      items:  Array< {
        __typename: "BiometricData",
        id: string,
        data: string,
        status: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    governmentGrant?:  {
      __typename: "GovernmentGrant",
      id: string,
      grantName: string,
      description?: string | null,
      amount?: number | null,
      startDate?: string | null,
      endDate?: string | null,
      applicationDeadline?: string | null,
      eligibilityRequirements?: Array< string | null > | null,
      applicationProcess?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNotificationMutationVariables = {
  input: CreateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type CreateNotificationMutation = {
  createNotification?:  {
    __typename: "Notification",
    id: string,
    message: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNotificationMutationVariables = {
  input: UpdateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type UpdateNotificationMutation = {
  updateNotification?:  {
    __typename: "Notification",
    id: string,
    message: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNotificationMutationVariables = {
  input: DeleteNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type DeleteNotificationMutation = {
  deleteNotification?:  {
    __typename: "Notification",
    id: string,
    message: string,
    user_id: string,
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
    user_id: string,
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
    user_id: string,
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
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMedicalReportMutationVariables = {
  input: CreateMedicalReportInput,
  condition?: ModelMedicalReportConditionInput | null,
};

export type CreateMedicalReportMutation = {
  createMedicalReport?:  {
    __typename: "MedicalReport",
    id: string,
    report_text?: string | null,
    doctor_name?: string | null,
    appointment_date?: string | null,
    medical_report_status: string,
    user_id: string,
    hospital?:  {
      __typename: "ModelHospitalConnection",
      items:  Array< {
        __typename: "Hospital",
        id: string,
        hospital_name: string,
        address: string,
        postal_code: string,
        medical_report_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMedicalReportMutationVariables = {
  input: UpdateMedicalReportInput,
  condition?: ModelMedicalReportConditionInput | null,
};

export type UpdateMedicalReportMutation = {
  updateMedicalReport?:  {
    __typename: "MedicalReport",
    id: string,
    report_text?: string | null,
    doctor_name?: string | null,
    appointment_date?: string | null,
    medical_report_status: string,
    user_id: string,
    hospital?:  {
      __typename: "ModelHospitalConnection",
      items:  Array< {
        __typename: "Hospital",
        id: string,
        hospital_name: string,
        address: string,
        postal_code: string,
        medical_report_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMedicalReportMutationVariables = {
  input: DeleteMedicalReportInput,
  condition?: ModelMedicalReportConditionInput | null,
};

export type DeleteMedicalReportMutation = {
  deleteMedicalReport?:  {
    __typename: "MedicalReport",
    id: string,
    report_text?: string | null,
    doctor_name?: string | null,
    appointment_date?: string | null,
    medical_report_status: string,
    user_id: string,
    hospital?:  {
      __typename: "ModelHospitalConnection",
      items:  Array< {
        __typename: "Hospital",
        id: string,
        hospital_name: string,
        address: string,
        postal_code: string,
        medical_report_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMedicalHistoryMutationVariables = {
  input: CreateMedicalHistoryInput,
  condition?: ModelMedicalHistoryConditionInput | null,
};

export type CreateMedicalHistoryMutation = {
  createMedicalHistory?:  {
    __typename: "MedicalHistory",
    id: string,
    condition?: string | null,
    allergies?: string | null,
    surgeries?: string | null,
    medications?: string | null,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMedicalHistoryMutationVariables = {
  input: UpdateMedicalHistoryInput,
  condition?: ModelMedicalHistoryConditionInput | null,
};

export type UpdateMedicalHistoryMutation = {
  updateMedicalHistory?:  {
    __typename: "MedicalHistory",
    id: string,
    condition?: string | null,
    allergies?: string | null,
    surgeries?: string | null,
    medications?: string | null,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMedicalHistoryMutationVariables = {
  input: DeleteMedicalHistoryInput,
  condition?: ModelMedicalHistoryConditionInput | null,
};

export type DeleteMedicalHistoryMutation = {
  deleteMedicalHistory?:  {
    __typename: "MedicalHistory",
    id: string,
    condition?: string | null,
    allergies?: string | null,
    surgeries?: string | null,
    medications?: string | null,
    user_id: string,
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
    medical_report_id: string,
    doctor?:  {
      __typename: "ModelDoctorConnection",
      items:  Array< {
        __typename: "Doctor",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        specialization?: string | null,
        cell_no?: string | null,
        hospital_id: string,
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
    medical_report_id: string,
    doctor?:  {
      __typename: "ModelDoctorConnection",
      items:  Array< {
        __typename: "Doctor",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        specialization?: string | null,
        cell_no?: string | null,
        hospital_id: string,
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
    medical_report_id: string,
    doctor?:  {
      __typename: "ModelDoctorConnection",
      items:  Array< {
        __typename: "Doctor",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        specialization?: string | null,
        cell_no?: string | null,
        hospital_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDoctorMutationVariables = {
  input: CreateDoctorInput,
  condition?: ModelDoctorConditionInput | null,
};

export type CreateDoctorMutation = {
  createDoctor?:  {
    __typename: "Doctor",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    specialization?: string | null,
    contactInformation?:  {
      __typename: "ContactInfo",
      email?: string | null,
      phone?: string | null,
    } | null,
    cell_no?: string | null,
    hospital_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDoctorMutationVariables = {
  input: UpdateDoctorInput,
  condition?: ModelDoctorConditionInput | null,
};

export type UpdateDoctorMutation = {
  updateDoctor?:  {
    __typename: "Doctor",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    specialization?: string | null,
    contactInformation?:  {
      __typename: "ContactInfo",
      email?: string | null,
      phone?: string | null,
    } | null,
    cell_no?: string | null,
    hospital_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDoctorMutationVariables = {
  input: DeleteDoctorInput,
  condition?: ModelDoctorConditionInput | null,
};

export type DeleteDoctorMutation = {
  deleteDoctor?:  {
    __typename: "Doctor",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    specialization?: string | null,
    contactInformation?:  {
      __typename: "ContactInfo",
      email?: string | null,
      phone?: string | null,
    } | null,
    cell_no?: string | null,
    hospital_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGovernmentGrantMutationVariables = {
  input: CreateGovernmentGrantInput,
  condition?: ModelGovernmentGrantConditionInput | null,
};

export type CreateGovernmentGrantMutation = {
  createGovernmentGrant?:  {
    __typename: "GovernmentGrant",
    id: string,
    grantName: string,
    description?: string | null,
    amount?: number | null,
    startDate?: string | null,
    endDate?: string | null,
    applicationDeadline?: string | null,
    eligibilityRequirements?: Array< string | null > | null,
    applicationProcess?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGovernmentGrantMutationVariables = {
  input: UpdateGovernmentGrantInput,
  condition?: ModelGovernmentGrantConditionInput | null,
};

export type UpdateGovernmentGrantMutation = {
  updateGovernmentGrant?:  {
    __typename: "GovernmentGrant",
    id: string,
    grantName: string,
    description?: string | null,
    amount?: number | null,
    startDate?: string | null,
    endDate?: string | null,
    applicationDeadline?: string | null,
    eligibilityRequirements?: Array< string | null > | null,
    applicationProcess?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGovernmentGrantMutationVariables = {
  input: DeleteGovernmentGrantInput,
  condition?: ModelGovernmentGrantConditionInput | null,
};

export type DeleteGovernmentGrantMutation = {
  deleteGovernmentGrant?:  {
    __typename: "GovernmentGrant",
    id: string,
    grantName: string,
    description?: string | null,
    amount?: number | null,
    startDate?: string | null,
    endDate?: string | null,
    applicationDeadline?: string | null,
    eligibilityRequirements?: Array< string | null > | null,
    applicationProcess?: string | null,
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
    notification?:  {
      __typename: "ModelNotificationConnection",
      items:  Array< {
        __typename: "Notification",
        id: string,
        message: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    medicalReport?:  {
      __typename: "ModelMedicalReportConnection",
      items:  Array< {
        __typename: "MedicalReport",
        id: string,
        report_text?: string | null,
        doctor_name?: string | null,
        appointment_date?: string | null,
        medical_report_status: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    biometricData?:  {
      __typename: "ModelBiometricDataConnection",
      items:  Array< {
        __typename: "BiometricData",
        id: string,
        data: string,
        status: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    governmentGrant?:  {
      __typename: "GovernmentGrant",
      id: string,
      grantName: string,
      description?: string | null,
      amount?: number | null,
      startDate?: string | null,
      endDate?: string | null,
      applicationDeadline?: string | null,
      eligibilityRequirements?: Array< string | null > | null,
      applicationProcess?: string | null,
      createdAt: string,
      updatedAt: string,
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
      notification?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      medicalReport?:  {
        __typename: "ModelMedicalReportConnection",
        nextToken?: string | null,
      } | null,
      biometricData?:  {
        __typename: "ModelBiometricDataConnection",
        nextToken?: string | null,
      } | null,
      governmentGrant?:  {
        __typename: "GovernmentGrant",
        id: string,
        grantName: string,
        description?: string | null,
        amount?: number | null,
        startDate?: string | null,
        endDate?: string | null,
        applicationDeadline?: string | null,
        eligibilityRequirements?: Array< string | null > | null,
        applicationProcess?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNotificationQueryVariables = {
  id: string,
};

export type GetNotificationQuery = {
  getNotification?:  {
    __typename: "Notification",
    id: string,
    message: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNotificationsQueryVariables = {
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotificationsQuery = {
  listNotifications?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      message: string,
      user_id: string,
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
    user_id: string,
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
      user_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMedicalReportQueryVariables = {
  id: string,
};

export type GetMedicalReportQuery = {
  getMedicalReport?:  {
    __typename: "MedicalReport",
    id: string,
    report_text?: string | null,
    doctor_name?: string | null,
    appointment_date?: string | null,
    medical_report_status: string,
    user_id: string,
    hospital?:  {
      __typename: "ModelHospitalConnection",
      items:  Array< {
        __typename: "Hospital",
        id: string,
        hospital_name: string,
        address: string,
        postal_code: string,
        medical_report_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMedicalReportsQueryVariables = {
  filter?: ModelMedicalReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMedicalReportsQuery = {
  listMedicalReports?:  {
    __typename: "ModelMedicalReportConnection",
    items:  Array< {
      __typename: "MedicalReport",
      id: string,
      report_text?: string | null,
      doctor_name?: string | null,
      appointment_date?: string | null,
      medical_report_status: string,
      user_id: string,
      hospital?:  {
        __typename: "ModelHospitalConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMedicalHistoryQueryVariables = {
  id: string,
};

export type GetMedicalHistoryQuery = {
  getMedicalHistory?:  {
    __typename: "MedicalHistory",
    id: string,
    condition?: string | null,
    allergies?: string | null,
    surgeries?: string | null,
    medications?: string | null,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMedicalHistoriesQueryVariables = {
  filter?: ModelMedicalHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMedicalHistoriesQuery = {
  listMedicalHistories?:  {
    __typename: "ModelMedicalHistoryConnection",
    items:  Array< {
      __typename: "MedicalHistory",
      id: string,
      condition?: string | null,
      allergies?: string | null,
      surgeries?: string | null,
      medications?: string | null,
      user_id: string,
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
    medical_report_id: string,
    doctor?:  {
      __typename: "ModelDoctorConnection",
      items:  Array< {
        __typename: "Doctor",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        specialization?: string | null,
        cell_no?: string | null,
        hospital_id: string,
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
      medical_report_id: string,
      doctor?:  {
        __typename: "ModelDoctorConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDoctorQueryVariables = {
  id: string,
};

export type GetDoctorQuery = {
  getDoctor?:  {
    __typename: "Doctor",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    specialization?: string | null,
    contactInformation?:  {
      __typename: "ContactInfo",
      email?: string | null,
      phone?: string | null,
    } | null,
    cell_no?: string | null,
    hospital_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDoctorsQueryVariables = {
  filter?: ModelDoctorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDoctorsQuery = {
  listDoctors?:  {
    __typename: "ModelDoctorConnection",
    items:  Array< {
      __typename: "Doctor",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      specialization?: string | null,
      contactInformation?:  {
        __typename: "ContactInfo",
        email?: string | null,
        phone?: string | null,
      } | null,
      cell_no?: string | null,
      hospital_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGovernmentGrantQueryVariables = {
  id: string,
};

export type GetGovernmentGrantQuery = {
  getGovernmentGrant?:  {
    __typename: "GovernmentGrant",
    id: string,
    grantName: string,
    description?: string | null,
    amount?: number | null,
    startDate?: string | null,
    endDate?: string | null,
    applicationDeadline?: string | null,
    eligibilityRequirements?: Array< string | null > | null,
    applicationProcess?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGovernmentGrantsQueryVariables = {
  filter?: ModelGovernmentGrantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGovernmentGrantsQuery = {
  listGovernmentGrants?:  {
    __typename: "ModelGovernmentGrantConnection",
    items:  Array< {
      __typename: "GovernmentGrant",
      id: string,
      grantName: string,
      description?: string | null,
      amount?: number | null,
      startDate?: string | null,
      endDate?: string | null,
      applicationDeadline?: string | null,
      eligibilityRequirements?: Array< string | null > | null,
      applicationProcess?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NotificationsByUser_idQueryVariables = {
  user_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NotificationsByUser_idQuery = {
  notificationsByUser_id?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      message: string,
      user_id: string,
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
      user_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MedicalReportsByUser_idQueryVariables = {
  user_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMedicalReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MedicalReportsByUser_idQuery = {
  medicalReportsByUser_id?:  {
    __typename: "ModelMedicalReportConnection",
    items:  Array< {
      __typename: "MedicalReport",
      id: string,
      report_text?: string | null,
      doctor_name?: string | null,
      appointment_date?: string | null,
      medical_report_status: string,
      user_id: string,
      hospital?:  {
        __typename: "ModelHospitalConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MedicalHistoriesByUser_idQueryVariables = {
  user_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMedicalHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MedicalHistoriesByUser_idQuery = {
  medicalHistoriesByUser_id?:  {
    __typename: "ModelMedicalHistoryConnection",
    items:  Array< {
      __typename: "MedicalHistory",
      id: string,
      condition?: string | null,
      allergies?: string | null,
      surgeries?: string | null,
      medications?: string | null,
      user_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type HospitalsByMedical_report_idQueryVariables = {
  medical_report_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelHospitalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type HospitalsByMedical_report_idQuery = {
  hospitalsByMedical_report_id?:  {
    __typename: "ModelHospitalConnection",
    items:  Array< {
      __typename: "Hospital",
      id: string,
      hospital_name: string,
      address: string,
      postal_code: string,
      medical_report_id: string,
      doctor?:  {
        __typename: "ModelDoctorConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type DoctorsByHospital_idQueryVariables = {
  hospital_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDoctorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type DoctorsByHospital_idQuery = {
  doctorsByHospital_id?:  {
    __typename: "ModelDoctorConnection",
    items:  Array< {
      __typename: "Doctor",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      specialization?: string | null,
      contactInformation?:  {
        __typename: "ContactInfo",
        email?: string | null,
        phone?: string | null,
      } | null,
      cell_no?: string | null,
      hospital_id: string,
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
    notification?:  {
      __typename: "ModelNotificationConnection",
      items:  Array< {
        __typename: "Notification",
        id: string,
        message: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    medicalReport?:  {
      __typename: "ModelMedicalReportConnection",
      items:  Array< {
        __typename: "MedicalReport",
        id: string,
        report_text?: string | null,
        doctor_name?: string | null,
        appointment_date?: string | null,
        medical_report_status: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    biometricData?:  {
      __typename: "ModelBiometricDataConnection",
      items:  Array< {
        __typename: "BiometricData",
        id: string,
        data: string,
        status: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    governmentGrant?:  {
      __typename: "GovernmentGrant",
      id: string,
      grantName: string,
      description?: string | null,
      amount?: number | null,
      startDate?: string | null,
      endDate?: string | null,
      applicationDeadline?: string | null,
      eligibilityRequirements?: Array< string | null > | null,
      applicationProcess?: string | null,
      createdAt: string,
      updatedAt: string,
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
    notification?:  {
      __typename: "ModelNotificationConnection",
      items:  Array< {
        __typename: "Notification",
        id: string,
        message: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    medicalReport?:  {
      __typename: "ModelMedicalReportConnection",
      items:  Array< {
        __typename: "MedicalReport",
        id: string,
        report_text?: string | null,
        doctor_name?: string | null,
        appointment_date?: string | null,
        medical_report_status: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    biometricData?:  {
      __typename: "ModelBiometricDataConnection",
      items:  Array< {
        __typename: "BiometricData",
        id: string,
        data: string,
        status: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    governmentGrant?:  {
      __typename: "GovernmentGrant",
      id: string,
      grantName: string,
      description?: string | null,
      amount?: number | null,
      startDate?: string | null,
      endDate?: string | null,
      applicationDeadline?: string | null,
      eligibilityRequirements?: Array< string | null > | null,
      applicationProcess?: string | null,
      createdAt: string,
      updatedAt: string,
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
    notification?:  {
      __typename: "ModelNotificationConnection",
      items:  Array< {
        __typename: "Notification",
        id: string,
        message: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    medicalReport?:  {
      __typename: "ModelMedicalReportConnection",
      items:  Array< {
        __typename: "MedicalReport",
        id: string,
        report_text?: string | null,
        doctor_name?: string | null,
        appointment_date?: string | null,
        medical_report_status: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    biometricData?:  {
      __typename: "ModelBiometricDataConnection",
      items:  Array< {
        __typename: "BiometricData",
        id: string,
        data: string,
        status: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    governmentGrant?:  {
      __typename: "GovernmentGrant",
      id: string,
      grantName: string,
      description?: string | null,
      amount?: number | null,
      startDate?: string | null,
      endDate?: string | null,
      applicationDeadline?: string | null,
      eligibilityRequirements?: Array< string | null > | null,
      applicationProcess?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnCreateNotificationSubscription = {
  onCreateNotification?:  {
    __typename: "Notification",
    id: string,
    message: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnUpdateNotificationSubscription = {
  onUpdateNotification?:  {
    __typename: "Notification",
    id: string,
    message: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnDeleteNotificationSubscription = {
  onDeleteNotification?:  {
    __typename: "Notification",
    id: string,
    message: string,
    user_id: string,
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
    user_id: string,
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
    user_id: string,
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
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMedicalReportSubscriptionVariables = {
  filter?: ModelSubscriptionMedicalReportFilterInput | null,
};

export type OnCreateMedicalReportSubscription = {
  onCreateMedicalReport?:  {
    __typename: "MedicalReport",
    id: string,
    report_text?: string | null,
    doctor_name?: string | null,
    appointment_date?: string | null,
    medical_report_status: string,
    user_id: string,
    hospital?:  {
      __typename: "ModelHospitalConnection",
      items:  Array< {
        __typename: "Hospital",
        id: string,
        hospital_name: string,
        address: string,
        postal_code: string,
        medical_report_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMedicalReportSubscriptionVariables = {
  filter?: ModelSubscriptionMedicalReportFilterInput | null,
};

export type OnUpdateMedicalReportSubscription = {
  onUpdateMedicalReport?:  {
    __typename: "MedicalReport",
    id: string,
    report_text?: string | null,
    doctor_name?: string | null,
    appointment_date?: string | null,
    medical_report_status: string,
    user_id: string,
    hospital?:  {
      __typename: "ModelHospitalConnection",
      items:  Array< {
        __typename: "Hospital",
        id: string,
        hospital_name: string,
        address: string,
        postal_code: string,
        medical_report_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMedicalReportSubscriptionVariables = {
  filter?: ModelSubscriptionMedicalReportFilterInput | null,
};

export type OnDeleteMedicalReportSubscription = {
  onDeleteMedicalReport?:  {
    __typename: "MedicalReport",
    id: string,
    report_text?: string | null,
    doctor_name?: string | null,
    appointment_date?: string | null,
    medical_report_status: string,
    user_id: string,
    hospital?:  {
      __typename: "ModelHospitalConnection",
      items:  Array< {
        __typename: "Hospital",
        id: string,
        hospital_name: string,
        address: string,
        postal_code: string,
        medical_report_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMedicalHistorySubscriptionVariables = {
  filter?: ModelSubscriptionMedicalHistoryFilterInput | null,
};

export type OnCreateMedicalHistorySubscription = {
  onCreateMedicalHistory?:  {
    __typename: "MedicalHistory",
    id: string,
    condition?: string | null,
    allergies?: string | null,
    surgeries?: string | null,
    medications?: string | null,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMedicalHistorySubscriptionVariables = {
  filter?: ModelSubscriptionMedicalHistoryFilterInput | null,
};

export type OnUpdateMedicalHistorySubscription = {
  onUpdateMedicalHistory?:  {
    __typename: "MedicalHistory",
    id: string,
    condition?: string | null,
    allergies?: string | null,
    surgeries?: string | null,
    medications?: string | null,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMedicalHistorySubscriptionVariables = {
  filter?: ModelSubscriptionMedicalHistoryFilterInput | null,
};

export type OnDeleteMedicalHistorySubscription = {
  onDeleteMedicalHistory?:  {
    __typename: "MedicalHistory",
    id: string,
    condition?: string | null,
    allergies?: string | null,
    surgeries?: string | null,
    medications?: string | null,
    user_id: string,
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
    medical_report_id: string,
    doctor?:  {
      __typename: "ModelDoctorConnection",
      items:  Array< {
        __typename: "Doctor",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        specialization?: string | null,
        cell_no?: string | null,
        hospital_id: string,
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
    medical_report_id: string,
    doctor?:  {
      __typename: "ModelDoctorConnection",
      items:  Array< {
        __typename: "Doctor",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        specialization?: string | null,
        cell_no?: string | null,
        hospital_id: string,
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
    medical_report_id: string,
    doctor?:  {
      __typename: "ModelDoctorConnection",
      items:  Array< {
        __typename: "Doctor",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        specialization?: string | null,
        cell_no?: string | null,
        hospital_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDoctorSubscriptionVariables = {
  filter?: ModelSubscriptionDoctorFilterInput | null,
};

export type OnCreateDoctorSubscription = {
  onCreateDoctor?:  {
    __typename: "Doctor",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    specialization?: string | null,
    contactInformation?:  {
      __typename: "ContactInfo",
      email?: string | null,
      phone?: string | null,
    } | null,
    cell_no?: string | null,
    hospital_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDoctorSubscriptionVariables = {
  filter?: ModelSubscriptionDoctorFilterInput | null,
};

export type OnUpdateDoctorSubscription = {
  onUpdateDoctor?:  {
    __typename: "Doctor",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    specialization?: string | null,
    contactInformation?:  {
      __typename: "ContactInfo",
      email?: string | null,
      phone?: string | null,
    } | null,
    cell_no?: string | null,
    hospital_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDoctorSubscriptionVariables = {
  filter?: ModelSubscriptionDoctorFilterInput | null,
};

export type OnDeleteDoctorSubscription = {
  onDeleteDoctor?:  {
    __typename: "Doctor",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    specialization?: string | null,
    contactInformation?:  {
      __typename: "ContactInfo",
      email?: string | null,
      phone?: string | null,
    } | null,
    cell_no?: string | null,
    hospital_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGovernmentGrantSubscriptionVariables = {
  filter?: ModelSubscriptionGovernmentGrantFilterInput | null,
};

export type OnCreateGovernmentGrantSubscription = {
  onCreateGovernmentGrant?:  {
    __typename: "GovernmentGrant",
    id: string,
    grantName: string,
    description?: string | null,
    amount?: number | null,
    startDate?: string | null,
    endDate?: string | null,
    applicationDeadline?: string | null,
    eligibilityRequirements?: Array< string | null > | null,
    applicationProcess?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGovernmentGrantSubscriptionVariables = {
  filter?: ModelSubscriptionGovernmentGrantFilterInput | null,
};

export type OnUpdateGovernmentGrantSubscription = {
  onUpdateGovernmentGrant?:  {
    __typename: "GovernmentGrant",
    id: string,
    grantName: string,
    description?: string | null,
    amount?: number | null,
    startDate?: string | null,
    endDate?: string | null,
    applicationDeadline?: string | null,
    eligibilityRequirements?: Array< string | null > | null,
    applicationProcess?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGovernmentGrantSubscriptionVariables = {
  filter?: ModelSubscriptionGovernmentGrantFilterInput | null,
};

export type OnDeleteGovernmentGrantSubscription = {
  onDeleteGovernmentGrant?:  {
    __typename: "GovernmentGrant",
    id: string,
    grantName: string,
    description?: string | null,
    amount?: number | null,
    startDate?: string | null,
    endDate?: string | null,
    applicationDeadline?: string | null,
    eligibilityRequirements?: Array< string | null > | null,
    applicationProcess?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
