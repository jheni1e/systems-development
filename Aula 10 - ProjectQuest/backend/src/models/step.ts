import mongoose, { Schema, Document } from "mongoose";

interface IStep extends Document {
    title: string;
    difficulty: string;
    xpReward: number;
    completed: string;
    projectId: number;
}

const StepSchema = new Schema<IStep>({
    title: { type: String, required: true },
    difficulty: { type: String, required: true, unique: true },
    xpReward: { type: Number, required: true },
    projectId: { type: Number, required: true },
    completed: { type: String, required: true }
});

const Step = mongoose.model<IStep>("Step", StepSchema);

export default Step;