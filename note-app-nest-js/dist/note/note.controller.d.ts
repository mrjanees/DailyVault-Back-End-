import { Note } from './dto/note.dto';
import { NoteService } from './note.service';
export declare class NoteController {
    private noteService;
    constructor(noteService: NoteService);
    getAllNotes(): Promise<{
        data: Note[];
    }>;
    createNote(note: Note): Promise<Note>;
    updateNote(note: Note): Promise<Note>;
    deleteNote(id: string): Promise<"id required" | {
        status: boolean;
    }>;
}
