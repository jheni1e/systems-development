import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
    title: string;
    xp: number;
    level: string;
    progress: number;
    status: string;
}

const projectSchema: Schema = new Schema({
    title: { type: String, required: true },
    xp: { type: Number, required: true },
    level: { type: String, required: true },
    progress: { type: Number, required: true },
    status: { type: String, required: true }
});

const Project = mongoose.model<IProject>('Project', projectSchema, 'Project');

export default Project;
