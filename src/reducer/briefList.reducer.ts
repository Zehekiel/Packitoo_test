import { Brief } from '../provider/models/brief'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const briefListSlice = createSlice({
  name: 'briefList',
  initialState: {
    value: new Array()
  },
  reducers: {
    saveBriefList: (state, action: PayloadAction<Array<Brief>>) => {
      state.value = action.payload
    },
    addBrief: (
      state: { value: Array<any> },
      action: PayloadAction<Brief>
    ) => {
      state.value.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveBriefList, addBrief } = briefListSlice.actions

export default briefListSlice.reducer