import mongoose, { Schema, Document } from "mongoose";

interface IStep extends Document {
    title: string;
    difficulty: string;
    xpReward: number;
    completed: boolean;
    projectId: mongoose.Types.ObjectId;
}

const StepSchema = new Schema<IStep>({
    title: { type: String, required: true },
    difficulty: { type: String, required: true },
    xpReward: { type: Number, required: true },
    projectId: { type: mongoose.Types.ObjectId, ref: "Project", required: true },
    completed: { type: Boolean, required: true, default: false }
});

const Step = mongoose.model<IStep>("Step", StepSchema);

export default Step;