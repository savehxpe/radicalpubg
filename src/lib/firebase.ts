import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

// Initialize Firebase (config will be injected by Jet/Vercel ENV vars)
// Add your own config in a .env file or rely on Jet Admin's connection
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "dummy_api_key",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "dummy-auth-domain.firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "dummy-project-id",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "dummy-bucket.appspot.com",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789:web:abcdef",
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://dummy-database.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);

// Types mirroring the AppSync/Jet schemas
export interface ArtistSubmission {
    id?: string;
    artistName: string;
    email: string;
    submissionLink: string;
    aestheticNotes?: string;
    status?: string;
    createdAt: Date;
}

export interface Songwriter {
    id: string;
    name: string;
    createdAt: Date;
    bio?: string;
    email?: string;
}

export interface Song {
    id: string;
    title: string;
    releaseDate: Date;
    createdAt: Date;
    genre?: string;
    coverArt?: string; // added for UI mapping
}

export interface SongwriterSong {
    songwriterId: string;
    songId: string;
}

export interface Royalty {
    id: string;
    amount: number;
    paymentDate: Date;
    createdAt: Date;
    song: string; // Foreign key alias conceptually (mapping to a song title/id)
    type?: string; // Additional field derived for display
}
