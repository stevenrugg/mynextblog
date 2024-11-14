import { FormData } from '@/components/contact';

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response.message)
      alert("Your message was sent sucessfully");
    })
    .catch((err) => {
      console.log(err)
      alert("Your message not sent sucessfully, please try again later");
    });
}