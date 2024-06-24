type InformationLevel = {
  id: number
  name: string
  nameEn: string
  sortering: number
}

type CategoryParent = {
  id: number
  name: string
  nameEn: string
  description: string
  descriptionEn: string
  sortering: number
  parent: null
}

type Category = {
  id: number
  name: string
  nameEn: string
  description: string
  descriptionEn: string
  sortering: number
  parent: CategoryParent
}

type DataType = {
  id: number
  name: string
  nameEn: string
  sortering: number | null
  description: string
  descriptionEn: string
}

type RegistrationMethod = {
  id: number
  name: string
  nameEn: string
  description: string
  descriptionEn: string
  sortering: number
}

type Status = {
  id: number
  name: string
  nameEn: string
  description: string | null
  descriptionEn: string | null
}

export type Variable = {
  id: number
  version: number
  informationLevel: InformationLevel
  category: Category
  dataType: DataType
  registrationMethod: RegistrationMethod
  status: Status
  techName: string
  name: string
  nameEn: string
  description: string
  descriptionEn: string
  validFrom: string
  example: string
  receivedIn: boolean
  givenOut: boolean
  required: boolean
  createdOn: string
  createdBy: string
  updatedOn: string
  updatedBy: string
  approvedOn: string
  approvedBy: string
  dataSize: number
  existsInPrimary: boolean
  existsInRecurrence: boolean
  validForExtraction: number
  descriptionOfQuality: string
}
