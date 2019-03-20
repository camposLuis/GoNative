/**
 * Actions Types
 */
export const Types = {
  REQUEST: 'MARKER_REQUEST',
  SUCCESS: 'MARKER_SUCCESS',
  SHOW: 'SHOW_MODAL',
  HIDE: 'HIDE_MODAL',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  visibilit: false,
  coordinates: {},
  markers: [],
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW: {
      const { latd, logd } = action.payload;
      return { visibilit: true, coordinates: { latd, logd }, markers: [...state.markers] };
    }
    case Types.HIDE:
      return { visibilit: false, markers: [...state.markers] };
    case Types.SUCCESS:
      return { markers: [...state.markers, action.payload.marker] };
    case Types.FAILURE:
      return { ...state, visibilit: false };
    default:
      return state;
  }
}
/**
 * Actions Creators
 */
export const Creators = {
  showModal: (latd, logd) => ({
    type: Types.SHOW,
    payload: { latd, logd },
  }),

  hideModal: () => ({
    type: Types.HIDE,
  }),
  addMarkerRequest: user => ({
    type: Types.REQUEST,
    payload: { user },
  }),

  addMarkerSuccess: marker => ({
    type: Types.SUCCESS,
    payload: { marker },
  }),
};
