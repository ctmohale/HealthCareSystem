
@startuml 

!define PK <<PK>>
!define FK <<FK>>

entity "User" as user {
  + id PK
  name
  surname
  email
  password
  address
  postal_code
  id_number
  cell_phone_no
  access_type
}

entity "BiometricData" as biometricdata {
  + id PK
  data
  status
  user_id FK
}

entity "MedicalReport" as medicalreport {
  + id PK
  report_text
  doctor_name
  appointment_date
  medical_report_status
  user_id FK
}

entity "MedicalHistory" as medicalhistory {
  + id PK
  condition
  allergies
  surgeries
  medications
  user_id FK
}

entity "Hospital" as hospital {
  + id PK
  hospital_name
  address
  postal_code
}

entity "Doctor" as doctor {
  + id PK
  first_name
  last_name
  specialization
  email
  phone
  hospital_id FK
}

user --o{ biometricdata
user --o{ medicalreport
user --o{ medicalhistory
hospital --o{ doctor

@enduml
