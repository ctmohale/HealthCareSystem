```plantuml
entity "User" as user {
  + id : int (PK)
  name : string
  surname : string
  email : string
  password : string
  address : string
  postal_code : string
  id_number : string
  cell_phone_no : string
  access_type : string
}

entity "Notification" as notification {
  + id : int (PK)
  message : string
}

entity "BiometricData" as biometricdata {
  + id : int (PK)
  data : string
  status : string
}

entity "MedicalReport" as medicalreport {
  + id : int (PK)
  report_text : string
  doctor_name : string
  appointment_date : datetime
  medical_report_status : string
}

entity "MedicalHistory" as medicalhistory {
  + id : int (PK)
  condition : string
  allergies : string
  surgeries : string
  medications : string
}

entity "Hospital" as hospital {
  + id : int (PK)
  hospital_name : string
  address : string
  postal_code : string
}

entity "Doctor" as doctor {
  + id : int (PK)
  first_name : string
  last_name : string
  specialization : string
  email : string
  phone : string
}

entity "GovernmentGrant" as governmentgrant {
  + id : int (PK)
  grantName : string
  description : string
  amount : float
  startDate : date
  endDate : date
  applicationDeadline : datetime
  applicationProcess : string
}

user --|{ notification : user_id
user --|{ biometricdata : user_id
user --|{ medicalreport : user_id
user --|{ medicalhistory : user_id
medicalreport --|{ hospital : medical_report_id
doctor --|{ hospital : hospital_id
@enduml
