        const isSafeBridge = s => !s.includes(' ');

        function isSafeBridge2(s){
	        return s.split(' ').length === 1
        }

      console.log(isSafeBridge("####"));
      console.log(isSafeBridge("## ####"));

      console.log(isSafeBridge2("####"));
      console.log(isSafeBridge2("## ####"));
