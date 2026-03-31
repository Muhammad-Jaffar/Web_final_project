export const mockUsers = [
  { id: 1, email: 'admin@vendor.sys', password: 'password', role: 'Admin', name: 'Admin User' },
  { id: 2, email: 'finance@vendor.sys', password: 'password', role: 'Finance Officer', name: 'Finance User' },
  { id: 3, email: 'procurement@vendor.sys', password: 'password', role: 'Procurement Officer', name: 'Procurement User' },
  { id: 4, email: 'viewer@vendor.sys', password: 'password', role: 'Viewer', name: 'Viewer User' }
];

export const login = (email, password) => {
  const user = mockUsers.find(u => u.email === email && u.password === password);
  if (user) {
    const token = btoa(JSON.stringify(user)); // Simulated JWT
    localStorage.setItem('vendor_jwt', token);
    return { success: true, user };
  }
  return { success: false, message: 'Invalid credentials' };
};

export const logout = () => {
  localStorage.removeItem('vendor_jwt');
};

export const getCurrentUser = () => {
  const token = localStorage.getItem('vendor_jwt');
  if (!token) return null;
  try {
    return JSON.parse(atob(token));
  } catch {
    return null;
  }
};

export const hasRole = (allowedRoles) => {
  const user = getCurrentUser();
  if (!user) return false;
  if (!allowedRoles || allowedRoles.length === 0) return true;
  return allowedRoles.includes(user.role);
};
