interface User {
  id: string;
  email: string;
  displayName: string;
  avatar?: string;
  createdAt: string;
}

export const localAuth = {
  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
  },

  signIn: async (email: string, displayName: string): Promise<User> => {
    const user: User = {
      id: email,
      email,
      displayName,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      createdAt: new Date().toISOString()
    };
    
    localStorage.setItem('currentUser', JSON.stringify(user));
    return user;
  },

  signOut: async (): Promise<void> => {
    localStorage.removeItem('currentUser');
  },

  updateProfile: async (updates: Partial<User>): Promise<User> => {
    const currentUser = localAuth.getCurrentUser();
    if (!currentUser) throw new Error('No user logged in');
    
    const updatedUser = { ...currentUser, ...updates };
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    return updatedUser;
  }
};