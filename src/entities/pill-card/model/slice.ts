import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TInitialTypeOfData } from './types';

interface IToggleState {
  togglePillModal: {
    isOpen: boolean;
    slug: TInitialTypeOfData;
  };
}

const initialState: IToggleState = {
  togglePillModal: {
    isOpen: false,
    slug: 'hidden',
  },
};

const pillCardSlice = createSlice({
  name: 'pillCard',
  initialState,
  reducers: {
    toggleOpen: (state, action: PayloadAction<TInitialTypeOfData>) => {
      if (state.togglePillModal.slug === action.payload) {
        return {
          ...state,
          togglePillModal: {
            isOpen: !state.togglePillModal.isOpen,
            slug: 'hidden',
          },
        };
      }

      return {
        ...state,
        togglePillModal: {
          isOpen: true,
          slug: action.payload,
        },
      };
    },
  },
});

const pillCardSelector = (state: RootState) => state.pillCard;

export { pillCardSlice, pillCardSelector };
export const { toggleOpen } = pillCardSlice.actions;
