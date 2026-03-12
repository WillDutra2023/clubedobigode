export function saveUserProfile(profile: any) {
  localStorage.setItem('userProfile', JSON.stringify(profile));
}

export function getUserProfile() {
  const data = localStorage.getItem('userProfile');
  return data ? JSON.parse(data) : null;
}
