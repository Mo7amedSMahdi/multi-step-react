import { http, HttpResponse } from 'msw';
import { BASE_URL } from '@/constants/apiEndpoints';

const setFullPath = (url: string) => `${BASE_URL}${url}`;
interface LoginRequest {
  email?: string;
  password?: string;
}
export const handlers = [
  http.post(setFullPath('/auth/signin'), async ({ request }) => {
    const data = (await request.json()) as LoginRequest;
    if (data.email === 'test@test.com' && data.password === 'test') {
      return HttpResponse.json({
        userId: 3,
        first_name: 'Mohammed',
        last_name: 'Al-Mayali',
        email: 'mohammed.almayali@mohammed.com',
        role: 'admin',
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsImVtYWlsIjoibW9oYW1tZWQuYWxtYXlhbGlAbGlnaHRyaW5nLmFpIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE3MTcxMDMxMTQsImV4cCI6MTcxNzE4OTUxNH0.NLKvyxvNh5vnfbno3OfZgsVsUoyBOfoGCB_ozuCVC0s',
        refreshToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsImVtYWlsIjoibW9oYW1tZWQuYWxtYXlhbGlAbGlnaHRyaW5nLmFpIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE3MTcxMDMxMTQsImV4cCI6MTcxNzcwNzkxNH0.kt56w8mDJHp-vD2pCGA8vpgBxCFaMvn-kJ_2HjB0Z_A',
      });
    }

    // Return error in the format that errorHandler expects
    return HttpResponse.json(
      {
        customErrorcode: 1002,
        customErrorMessage: 'User does not exist',
        statusCode: 404,
      },
      {
        status: 404,
      }
    );
  }),
];
