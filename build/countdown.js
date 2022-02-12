
    const buttona = document.getElementById('take-picture');
    const canvasElement = document.getElementById('canvas');
    const ctx = canvasElement.getContext('2d');
    let picture;
    let count;
    const canvasCounter = (count) => {
        canvasElement.style.display = "block";
        ctx.font = '60px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText(count, canvasElement.width / 2, canvasElement.height / 2);
      };
      


      setTimeout(() =>  {
        console.log(canvasElement)
        let count = 3;
        // canvasElement.style.backgroundColor = 'black';
        canvasCounter(count);
        /* canvasElement.style.backgroundColor = 'black'; */
        let refresh = setInterval(() => {
        ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        console.log(count)
        
        count--;
        canvasCounter(count);
    
        if (count === 0) {
            /* canvasElement.style.display = "none"; */
            clearInterval(refresh);
            ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
            count = 3;
        }
        }, 1300);
          
      }, 13000)
      setTimeout(() => {
        let count = 3;
        // canvasElement.style.backgroundColor = 'black';
        canvasCounter(count);
        
        let refresh = setInterval(() => {
        ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        console.log(count)
        
        count--;
        canvasCounter(count);
        /* canvasElement.style.backgroundColor = 'black'; */
    
        if (count === 0) {
           /*  canvasElement.style.display = "none"; */
            clearInterval(refresh);
            ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
            count = 3;
        }
        }, 2000);
          
      }, 21000)
   

