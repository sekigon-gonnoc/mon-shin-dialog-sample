	//------------------------------------------------------------------------------------------
	// 各 DOM の Name 属性と投稿文で使う質問の関連付け
	//----------------------------------------------------------------------------------------- 
	const nameToQuestionEN = new Map([
		['keyboardName', 'Keyboard Name'],
		['microcontroller', 'Microcomputer Name'],
		['connection', 'Connection method for keyboard and PC'],
		['keyboardForm', 'Is your keyboard a split type?'],
		['socket', 'Do you use Socket?'],
		['wiring', 'Wiring method.'],
		['osName', 'OS'],
		['windowsVersionInput', 'Windows Version'],
		['windowsTerminalSoftInput', 'Terminal App (Windows)'],
		['macosVersionInput', 'MacOS Version'],
		['linuxDistributionInput', 'Linux Disribution'],
		['keyboardLayout', 'Keyboard Layout Setting (OS Side)'],
		['writingTool', 'Firmware Writting Tool'],
		['keyInputProblem', 'Problems with keyboard input.'],
		['noInput', 'There is key that not reacted.'],
		['noInputTextarea', 'Description of not react key.'],
		['notExpect', 'There is key that diffrent action from settings.'],
		['notExpectTextarea', 'Description of diffrent action key from settings'],
		['notActionOneHand', 'Not reacted one side keyboard (split keyboard)'],
		['notActionOneHandTextarea', 'Which you connected either left side or right side keyboard? Which is not reacted either left side or right side?'],
		['writeErrorQmk', "Can't write firmware"],
		['ledOff', "LED doesn't light up."],
		['ledOffTextarea', 'Place that not light up LED.'],
		['writingToolLog', 'Firmware writing tool log.'],
		['otherProblem', 'Other Problem.'],
		['otherProblemTextarea', 'Description of other Problem.'],
		['situation', 'Situation when occured problem.'],
		['detail', 'When does the problem occur?'],
		['testProMicroOnly', 'Conthrough, detach ProMicro from PCB. Next, if ProMicro only connect to PC by USB, ProMicro was recognized keyboard by OS?'],
		['haveTester', 'Do you have tester?'],
	]);

export {nameToQuestionEN};