// This is the first exercise. Find out what's wrong and fix the code.  
// function {
// 	var : Math.random()
// 		if (career <= 0.32) {
// 			return = FrontEnd Developer
// 		 else if (career <= 0.65) 
// 			return : BackEnd Developer,
// 		} else {
// 			return 'Full-Stack Developer'
// 		}

yourFutureCareer();
function yourFutureCareer() {
	var career = Math.random();
		if (career <= 0.32) {
			return 'FrontEnd Developer';
      } else if (career <= 0.65) {
			return 'BackEnd Developer';
	  	} else {
			return 'Full-Stack Developer';
		}
  }