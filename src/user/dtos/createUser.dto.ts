export interface CreateUserDto {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  document: string;
  documentType: string;
}
