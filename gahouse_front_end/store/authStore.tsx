import create from "zustand";




type User = {
  _id: string;
  first_name: String;
  last_name:String
  email: String
  isAdmin:Boolean
  isEmailVerified:Boolean
  profilePicture: String
};


type AuthState = {
  user: User | null;
  signIn: (user: User) => void;
  signOut: () => void;
  loggedIn: boolean;
  authLoading: boolean;
  currentAction: string;
};

const useAuthStore = create<AuthState>()(
  (set) =>
  ({
    user: null,
    loggedIn: false,
    authLoading: false,
    currentAction: 'home',
    signIn: (user) =>
      set((state) => ({
        ...state,
        user,
        loggedIn: true,
      })),
    action: (st) =>
      set((state) => ({
        ...state,
        currentAction: st
      })),
    signOut: () =>
      set((state) => ({
        ...state,
        loggedIn: false,
        user: null,
      })),
    auth: () =>
      set((state) => ({
        ...state,
        loggedIn: false,
        user: null,
      })),


  })
)

export default useAuthStore;



