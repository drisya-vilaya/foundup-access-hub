
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isSubscribed: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  createCheckoutSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate auth check
    const checkAuth = async () => {
      try {
        // This would be replaced with actual Supabase auth
        const savedUser = localStorage.getItem('user');
        const savedSubscription = localStorage.getItem('isSubscribed');
        
        if (savedUser) {
          setUser(JSON.parse(savedUser));
          setIsSubscribed(savedSubscription === 'true');
        }
      } catch (error) {
        console.error('Auth check error:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const signIn = async (email: string, password: string) => {
    // Mock sign in - replace with Supabase auth
    const mockUser = { id: '1', email };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const signUp = async (email: string, password: string) => {
    // Mock sign up - replace with Supabase auth
    const mockUser = { id: '1', email };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const signOut = async () => {
    setUser(null);
    setIsSubscribed(false);
    localStorage.removeItem('user');
    localStorage.removeItem('isSubscribed');
  };

  const createCheckoutSession = async () => {
    // Mock checkout - replace with Stripe integration
    console.log('Creating checkout session...');
    // For demo purposes, simulate successful subscription
    setIsSubscribed(true);
    localStorage.setItem('isSubscribed', 'true');
  };

  return (
    <AuthContext.Provider value={{
      user,
      isSubscribed,
      loading,
      signIn,
      signUp,
      signOut,
      createCheckoutSession
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
