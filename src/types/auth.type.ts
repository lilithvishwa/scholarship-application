/**
 * Defines TypeScript interfaces and types used by the
 * authentication module. Ensures consistent request and
 * response structures across the application.
 */

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface RegisterResponse {
  message: string;
}

export interface AuthUser {
  user_id: string;
  username: string;
  email: string;
  role: string;
  email_verified: boolean;
}

export interface ErrorResponse {
  status: number;
}

export interface LogoutResponse {
  message: string;
}
