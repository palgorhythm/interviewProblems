export interface StoreSliceInterface {}

const initialState: StoreSliceInterface = {};

export const reducer = (
  state: StoreSliceInterface = initialState,
  action: any
) => {
  switch (action.type) {
    default:
      return state;
  }
};
