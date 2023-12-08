import { configureStore, createSlice } from "@reduxjs/toolkit";



const projectSlice = createSlice({
  name: "projects",
  initialState: {
    data: [],
    selectedType: "Project",
  },
  reducers: {
    setProjects: (state, action) => {
      state.data = action.payload;
    },
    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
    },
    rearrangeProjects: (state) => {
      const filteredProjects = state.data.filter(
        (project) => project.type === state.selectedType
      );
      const otherProjects = state.data.filter(
        (project) => project.type !== state.selectedType
      );
      state.data = [...filteredProjects, ...otherProjects];
    },
  },
});






const languageSlice = createSlice({
  name: "language",
  initialState: "ko",
  reducers: {
    setLanguage: (state, action) => action.payload,
  },
});

const selectedLanguageSlice = createSlice({
  name: "selectedLanguage",
  initialState: 1,
  reducers: {
    setSelectedLanguage: (state, action) => action.payload,
  },
});




export const { setProjects, setSelectedType, rearrangeProjects } =
  projectSlice.actions;
export const { setLanguage } = languageSlice.actions;
export const { setSelectedLanguage } = selectedLanguageSlice.actions;



export default configureStore({
  reducer: {
    projects: projectSlice.reducer,
    language: languageSlice.reducer,
    selectedLanguage: selectedLanguageSlice.reducer 
  },
});
