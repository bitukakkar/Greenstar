import { createSlice } from '@reduxjs/toolkit'

const agentsSlice = createSlice({
  name: 'agents',
  initialState: {
    agents: [],
    selectedagent: null,
    deployedagents:[],
    faultagents:[],
    activedeployedagent:null,
    activefaultagent:null,
    dialogueid: '',
    deploystep: 1,
    loading: false
  },
  reducers: {
    updateServiceAgents: (state, action) => {
      state.agents = action.payload
    },
    updateDeployedAgents: (state, action) => {
      state.deployedagents = action.payload
    },
    updateSelectedAgent: (state, action) => {
      state.selectedagent = action.payload
    },
    UpdateActiveDeployedSgent: (state, action) => {
      state.activedeployedagent = action.payload
    },
    updateDialogueId: (state, action) => {
      state.dialogueid = action.payload
    },
    updateDeployStep: (state, action) => {
      state.deploystep = action.payload
    },
    updateLoading: (state, action) => {
      state.loading = action.payload
    },
    updateFaultAgents: (state, action) => {
      state.faultagents = action.payload
    },
    UpdateActiveFaultgent: (state, action) => {
      state.activefaultagent = action.payload
    },
  }
})

export const {
  updateServiceAgents,
  updateSelectedAgent,
  updateDialogueId,
  updateDeployStep,
  updateLoading,
  updateDeployedAgents,
  UpdateActiveDeployedSgent,
  updateFaultAgents,
  UpdateActiveFaultgent
} = agentsSlice.actions

export default agentsSlice.reducer
