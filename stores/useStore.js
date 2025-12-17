import { create } from "zustand";
import { devtools } from "zustand/middleware"
import { projectModal } from "./uiSlice";

export const useStore = create(
    devtools(set => ({
        ...projectModal(set)
    }),{
        name:"root"
    })
)