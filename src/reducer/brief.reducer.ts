/* eslint-disable @typescript-eslint/no-array-constructor */
import { Brief } from '../provider/models/brief'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const briefListSlice = createSlice({
  name: 'brief',
  initialState: {
    value: new Brief()
  },
  reducers: {
    saveBrief: (state, action: PayloadAction<Brief>) => {
      state.value = action.payload
    },
    deleteBrief: (state) => {
      state.value = new Brief()
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveBrief, deleteBrief } = briefListSlice.actions

export default briefListSlice.reducer