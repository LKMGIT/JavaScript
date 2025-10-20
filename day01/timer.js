function waitOneSecond(msg) {
	return new Promise((resolve, _) => {
		setTimeout(resolve(`${msg}`), 2000);
	});
} //1초 대기하고 메시지 출력 함수

async function conuntOneToTen() {
	for (let i of [...Array(10).keys()]) {
		//1초 대기 후에 result에 결과값을 저장
		let result = await waitOneSecond(`${i + 1}초 대기중 ....`);
		console.log(result);
	} //0부터 9까지 loop
	console.log('complete');
}

conuntOneToTen();