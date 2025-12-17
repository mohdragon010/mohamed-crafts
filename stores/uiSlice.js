export const projectModal = (set) => ({
    isProjectModalOpen: false,
    setIsProjectModalOpen: (value) => set({ isProjectModalOpen: value }),
    project: null,
    setProject: (project) => set({ project }),
});