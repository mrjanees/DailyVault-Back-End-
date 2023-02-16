import { Note } from './dto/note.dto';
export declare class NoteService {
    private noteList;
    create(value: Note): Promise<Note>;
    getAll(): Promise<Note[]>;
    update(value: Note): Promise<Note>;
    delete(id: string): Promise<boolean>;
}
