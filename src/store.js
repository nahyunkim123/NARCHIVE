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

const isopenSlice = createSlice({
  name: "isopen",
  initialState: false,
  reducers: {
    setisopen: (state, action) => action.payload,
  },
});

const selectedValueSlice = createSlice({
  name: "selectedValue",
  initialState: "Project",
  reducers: {
    setSelectedValue: (state, action) => action.payload,
  },
});

const selectedViewSlice = createSlice({
  name: "selectedView",
  initialState: "Gallery",
  reducers: {
    setSelectedView: (state, action) => action.payload,
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

const toggleHorizonAndVertical = createSlice({
  name: "toggleHorizonAndVertical",
  initialState: true,
  reducers: {
    setHorizonAndVertical: (state, action) => action.payload,
  },
});

const developerMode = createSlice({
  name: "developerMode",
  initialState: false,
  reducers: {
    setDeveloperMode: (state, action) => action.payload,
  },
});







export const { setProjects, setSelectedType, rearrangeProjects } =
  projectSlice.actions;
export const { setisopen } = isopenSlice.actions;
export const { setSelectedValue } = selectedValueSlice.actions;
export const { setSelectedView } = selectedViewSlice.actions;
export const { setLanguage } = languageSlice.actions;
export const { setSelectedLanguage } = selectedLanguageSlice.actions;
export const { setHorizonAndVertical } = toggleHorizonAndVertical.actions;
export const { setDeveloperMode } = developerMode.actions;



export default configureStore({
  reducer: {
    projects: projectSlice.reducer,
    isopen: isopenSlice.reducer,
    selectedValue: selectedValueSlice.reducer,
    selectedView: selectedViewSlice.reducer,
    language: languageSlice.reducer,
    selectedLanguage: selectedLanguageSlice.reducer,
    HorizonAndVertical: toggleHorizonAndVertical.reducer,
    developerMode: developerMode.reducer,

   
  },
});
