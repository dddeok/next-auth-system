import makeRequest from '../../../api/makeRequest';

interface SendEmailResponse {
  emailAuthenticationId: string;
}

export const sendingEmailRequest = (email: string) =>
  makeRequest<SendEmailResponse>({
    method: 'post',
    url: '/email-authentications',
    body: {
      email,
    },
  });
