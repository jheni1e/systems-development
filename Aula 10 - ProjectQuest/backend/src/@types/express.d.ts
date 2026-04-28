import * as project from "../src/models/project";

declare global {
    namespace Express {
        interface Request {
            project?: project.IProject;
        }
    }
}