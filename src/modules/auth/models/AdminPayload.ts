export interface AdminPayload {
  sub: string;
  email: string;
  name: string;
  iat?: number;
  exp?: number;
}
