import { useContext } from "react";
import { MainPageContext } from "./CustomHooks/MainPageContext";
import { ModalsContext } from "./CustomHooks/ModalsContext";

// Creating Custom Hooks

export const useMainPageContext = () => useContext(MainPageContext);
export const useModalsContext = () => useContext(ModalsContext);
