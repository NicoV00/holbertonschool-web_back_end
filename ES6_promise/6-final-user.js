import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([uploadPhoto(fileName), signUpUser(firstName, lastName)])
  .then((ress) => {
    return ress.map((res) => ({
      status: res.status,
      value: res.status === 'fulfilled' ? res.value : String(res.reason),
    }));
  });
}
 