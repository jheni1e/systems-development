import mongoose, { Schema, Document } from "mongoose";
import { updateProjectStats } from "../utils/updateProjectStats.ts";

interface IStep extends Document {
    title: string;
    difficulty: "easy" | "medium" | "hard";
    xpReward: number;
    completed: boolean;
    projectId: mongoose.Types.ObjectId;
}

const StepSchema = new Schema<IStep>({
    title: { type: String, required: true },
    difficulty: { type: String, enum: ["easy", "medium", "hard"], required: true },
    xpReward: { type: Number, required: true, min: 0 },
    projectId: { type: mongoose.Types.ObjectId, ref: "Project", required: true },
    completed: { type: Boolean, required: true, default: false }
});

StepSchema.post("save", async function () {
    const step = this as IStep;

    await updateProjectStats(step.projectId.toString());
});


StepSchema.post("findOneAndUpdate", async function (doc) {
    if (doc) {
        await updateProjectStats(doc.projectId.toString());
    }
});


StepSchema.post("findOneAndDelete", async function (doc) {
    if (doc) {
        await updateProjectStats(doc.projectId.toString());
    }
});


const Step = mongoose.model<IStep>("Step", StepSchema);

export default Step;