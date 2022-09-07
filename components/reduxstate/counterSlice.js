import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "counter",
  /*initialState: {
    value: 0,
  },*/
  initialState: {
    todos: {},
  },
  reducers: {
    addOrUpdateState: (state, action) => {
      // console.log(action.type);
      switch (action.type) {
        case "counter/addOrUpdateState": {
          const {
            trekId,
            batchId,
            trekName,
            startDate,
            endDate,
            trekUsers,
            bookingId,
            primaryUserEmail,
            voucherDetails,
            isOwnerActing,
            bookingState,
            batchState,
            trekDifficulty,
          } = action.payload;
          return {
            ...state,
            todos: {
              ...state.todos,
              data: {
                trekName: trekName,
                batchId: batchId,
                trekId: trekId,
                startDate: startDate,
                endDate: endDate,
                trekUsers: trekUsers,
                bookingId: bookingId,
                primaryUserEmail: primaryUserEmail,
                voucherDetails: voucherDetails,
                isOwnerActing: isOwnerActing,
                bookingState: bookingState,
                batchState: batchState,
                trekDifficulty: trekDifficulty,
              },
            },
          };
        }
        case "RESET": {
          console.log("Reset Called");
          return {
            ...state,
            todos: undefined,
          };
        }
      }
    },
  },
});

export const { addOrUpdateState } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectStateData = (state) => state.counter.todos;

export default slice.reducer;
