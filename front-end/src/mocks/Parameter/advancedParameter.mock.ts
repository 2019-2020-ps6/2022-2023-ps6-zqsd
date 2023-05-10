import { AdvancedParameterChronometer, AdvancedParameterFocusWork, AdvancedParameterMemoryWork } from "src/models/Parameter/advancedParameter.model";


export const ADVANCED_PARAMETER_CHRONOMETER: AdvancedParameterChronometer = {
    chronometer: 30,
};

export const ADVANCED_PARAMETER_MEMORY_WORK: AdvancedParameterMemoryWork = {
    complexQuestion: true,
    logic : true,
    puzzle : true ,
    reflection : true,
    memory : true,
};

export const ANDVANCED_PARAMETER_FOCUS_WORK: AdvancedParameterFocusWork = {
    background: true,
    questionAnimation : true,
    rightAnswerAnimation : true ,
    wrongAnswerAnimation : true,
};
