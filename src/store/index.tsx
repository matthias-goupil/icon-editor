import { Icon } from "@/types/Icon";
import { create } from "zustand";

export const useIconStore = create<{
    selectedIcon?: Icon,
    setSelectedIcon: (icon?: Icon) => void 
}>((set) => ({
    selectedIcon: undefined,
    setSelectedIcon: (selectedIcon?: Icon) => set(({selectedIcon}))
}))