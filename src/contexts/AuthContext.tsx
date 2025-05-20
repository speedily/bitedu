
import React, { createContext, useState, useContext, useEffect } from 'react';
import { setCookie, getCookie, deleteCookie } from '@/utils/cookies';

interface UserData {
  email: string;
  name?: string;
  progress: {
    [topicId: string]: {
      completed: boolean;
      points: number;
    };
  };
}

interface AuthContextType {
  user: UserData | null;
  isAuthenticated: boolean;
  loading: boolean;
  signIn: (email: string, name?: string) => void;
  signOut: () => void;
  updateProgress: (topicId: string, completed: boolean, points: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing user data in cookies
    const userCookie = getCookie('user');
    if (userCookie) {
      try {
        const userData = JSON.parse(userCookie);
        setUser(userData);
      } catch (error) {
        console.error('Failed to parse user data from cookie:', error);
        deleteCookie('user');
      }
    }
    setLoading(false);
  }, []);

  const signIn = (email: string, name?: string) => {
    const userData: UserData = {
      email,
      name,
      progress: {}
    };
    
    setUser(userData);
    setCookie('user', JSON.stringify(userData), 30);
  };

  const signOut = () => {
    setUser(null);
    deleteCookie('user');
  };

  const updateProgress = (topicId: string, completed: boolean, points: number) => {
    if (!user) return;
    
    const updatedUser = {
      ...user,
      progress: {
        ...user.progress,
        [topicId]: {
          completed,
          points
        }
      }
    };
    
    setUser(updatedUser);
    setCookie('user', JSON.stringify(updatedUser), 30);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      loading,
      signIn,
      signOut,
      updateProgress
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
