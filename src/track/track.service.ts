import { Injectable } from '@nestjs/common';
import { Track } from './track.interface';
// This service fetches tracks from a local server
const BASE_URL = 'http://localhost:3030/tracks';
@Injectable()
export class TrackService {
async getTracks(): Promise<Track[]> { 
        const res = await fetch (BASE_URL);
        const parsed= await res.json();
        return parsed;
      }
}