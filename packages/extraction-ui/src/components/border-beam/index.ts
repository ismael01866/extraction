import { BorderBeamPulse, BorderBeamRoot, BorderBeamTrack } from './border-beam';

export type {
  BorderBeamProps,
  BorderBeamPulseProps,
  BorderBeamTrackProps,
} from './border-beam.types';

export const BorderBeam = Object.assign(BorderBeamRoot, {
  Track: BorderBeamTrack,
  Pulse: BorderBeamPulse,
});
