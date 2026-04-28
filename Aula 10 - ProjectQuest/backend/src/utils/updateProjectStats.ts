import Project from "../models/project.ts";
import Step from "../models/step.ts";

export async function updateProjectStats(projectId: string) {
    const totalSteps = await Step.countDocuments({ projectId });
    const completedSteps = await Step.countDocuments({
        projectId,
        completed: true
    });

    const steps = await Step.find({ projectId, completed: true });

    const totalXP = steps.reduce((acc, step) => acc + step.xpReward, 0);

    const progress = totalSteps === 0 ? 0 : (completedSteps / totalSteps) * 100;

    const level = Math.floor(totalXP / 100) + 1;

    let status = "não iniciado";

    if (completedSteps === 0) {
        status = "não iniciado";
    } else if (completedSteps < totalSteps) {
        status = "em andamento";
    } else {
        status = "concluído";
    }

    await Project.findByIdAndUpdate(projectId, {
        xp: totalXP,
        progress,
        level,
        status
    });
}