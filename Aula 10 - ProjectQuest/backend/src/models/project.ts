import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
    title: string;
    xp: number;
    level: number;
    progress: number;
    status: string;
}

const projectSchema: Schema = new Schema({
    title: { type: String, required: true },
    xp: { type: Number, required: true, default: 0 },
    level: { type: Number, required: true, default: 1 },
    progress: { type: Number, required: true, default: 0, min: 0, max: 100  },
    status: { type: String, enum: ["não iniciado", "em andamento", "concluído"], default: "não iniciado" }
});

const Project = mongoose.model<IProject>('Project', projectSchema, 'Project');

export default Project;
