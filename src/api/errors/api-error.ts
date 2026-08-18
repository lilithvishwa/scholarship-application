export interface ApiErrorResponse {
  error: {
    type: string;
    error_code: string;
    message: string;
    success: boolean;
  };
}
