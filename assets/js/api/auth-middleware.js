export function checkAuth() {
  const token = sessionStorage.getItem('authToken');
  
  if (!token) {
    window.location.href = '../../../pages/auth/login.html';
    return false;
  }
  return true;

}

export function logout() {
  sessionStorage.removeItem('authToken');
  sessionStorage.removeItem('currentUser');
  window.location.href = '../../../pages/auth/login.html';
}