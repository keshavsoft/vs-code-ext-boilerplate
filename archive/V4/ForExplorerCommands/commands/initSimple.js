import { startOrchestration } from '../InitSimple/orchestration/startOrchestration.js';

const initSimpleCommand = (context) => {
    return async (uri) => startOrchestration(uri, context.extensionPath);
};

export default initSimpleCommand;