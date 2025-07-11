"use client";
import { JetpackRunnerPlayer } from "@/lib/types";
import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

// Define the type for the context value (state + setters)
interface AppContextType {
  player: JetpackRunnerPlayer;
  setPlayerData: Dispatch<SetStateAction<JetpackRunnerPlayer>>;
}

// Create the context with an undefined default value
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create the provider component
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [player, setPlayerData] = useState<JetpackRunnerPlayer>({
    id: "",
    username: "",
    jetpack_token_balance: 0,
    high_score: 0,
    total_distance: 0,
    potions_collected: 0,
    mystery_boxes: [],
    game_missions_completed: [],
  });

  return (
    <AppContext.Provider
      value={{
        player,
        setPlayerData, // Expose the setter function
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
