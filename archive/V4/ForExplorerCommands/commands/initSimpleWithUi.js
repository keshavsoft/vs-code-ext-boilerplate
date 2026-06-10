import { startOrchestration } from '../InitSimpleWithUi/orchestration/startOrchestration.js';

const initSimpleWithUiCommand = (context) => {
    return async (uri) => startOrchestration(uri, context.extensionPath);
};

export default initSimpleWithUiCommand