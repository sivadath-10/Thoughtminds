
export function getUserFromStorage() {
  const userData = localStorage.getItem('user');
  return userData ? JSON.parse(userData) : null;
}
