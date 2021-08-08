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
    deleteOneBrief: (state, action: PayloadAction<number>) => {
      const arrayFiltered = state.value.filter((brief: Brief)=> brief.id !== action.payload)
      state.value = arrayFiltered
    },
    filterBriefListByproductId: (state, action: PayloadAction<number>) => {
      const arrayFiltered = state.value.filter((brief: Brief)=> brief.id === action.payload)
      state.value = arrayFiltered
    },
    setBriefList: (state, action: PayloadAction<Brief>) => {
      const arrayReduce: Array<Brief> = state.value.reduce((acc: Array<any>, brief: Brief)=> {
        if (brief.id !== action.payload.id){
          acc.push(brief)
        } else {
          acc.push(action.payload)
        }
        return acc
      }, [])
      state.value = arrayReduce
    },
    addBrief: (
      state: { value: Array<any> },
      action: PayloadAction<Brief>
    ) => {
      state.value.push(action.payload)
    },
    emptyBriefList: (state) => {
      state.value = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveBriefList, addBrief, emptyBriefList, deleteOneBrief, filterBriefListByproductId, setBriefList } = briefListSlice.actions

export default briefListSlice.reducer