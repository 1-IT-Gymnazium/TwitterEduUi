import { HttpContextToken } from '@angular/common/http';

// Define a context key for the token
export const AUTH_TOKEN = new HttpContextToken<string | null>(() => null);