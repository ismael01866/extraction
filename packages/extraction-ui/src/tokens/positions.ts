export const position = {
  'top-start': '',
  top: '',
  'top-end': '',
  start: '',
  center: '',
  end: '',
  'bottom-start': '',
  bottom: '',
  'bottom-end': '',
  'out-top-start': '',
  'out-top': '',
  'out-top-end': '',
  'out-start': '',
  'out-end': '',
  'out-bottom-start': '',
  'out-bottom': '',
  'out-bottom-end': '',
};

export type PositionToken = typeof position;

export const positionValues = Object.keys(position) as (keyof PositionToken)[];
