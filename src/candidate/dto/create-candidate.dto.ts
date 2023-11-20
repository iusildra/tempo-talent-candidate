export class CreateCandidateDto {
  readonly firstName: string
  readonly lastName: string
  readonly genderId: number
  readonly citizenshipId: number
  readonly phone: string
  readonly email: string
  readonly photo?: any
  readonly cv?: any
  readonly bio: string
  readonly password: string
  readonly address: string

  constructor(
    firstName: string,
    lastName: string,
    genderId: number,
    citizenshipId: number,
    phone: string,
    email: string,
    bio: string,
    password: string,
    address: string,
    photo?: any,
    cv?: any,
  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.genderId = genderId
    this.citizenshipId = citizenshipId
    this.phone = phone
    this.email = email
    this.bio = bio
    this.password = password
    this.address = address
    this.photo = photo
    this.cv = cv
  }
}
