Attribute Module_Name = "XiuYueGuiZe"
function XYGZ(a, b = 0){

	let result;
	let num;
	if(a.constructor.name === "Range")
		num = a.Value2;
	else if(a.constructor.name === "Number")
		num = a;
		
	num = num * (10 ** b)
	
	// 截取整数部分
	let int_part = Math.trunc(num);
	// 获取小数部分
	let float_part = num - int_part;
	
	//判断小数部分是否等于0.5，不等于0.5直接四舍五入，等于0.5则如果整数部分是奇数则进一位，如果是偶数则直接舍去小数部分
	//不应该直接比较两个浮点数，故取一个极小数来衡量两个浮点数是否相等
	if(Math.abs(float_part - 0.5) < 10**-7){
		if(int_part % 2 === 0){
			result = int_part;
		}else{
			result = int_part + 1;
		}
	}else{
		result = Math.round(num);
	}
	return result/(10**b);
}