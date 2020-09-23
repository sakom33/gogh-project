const canvas = document.querySelector('#image');
const ctx = canvas.getContext('2d');
const body = document.querySelector('body')


const canvas2 = document.querySelector('#manipulated');
const ctx2 = canvas2.getContext('2d');
// canvas.width = innerWidth;
// canvas.height= innerHeight;
// addEventListener('resize',()=>{
//     canvas.width = innerWidth;
//     canvas.height= innerHeight;
// })





    const img= new Image();
    img.src = "./images/starry_night.jpg"
    img.onload = function(e){
        resize_image(img);
        getRGBA();
    }



const getRGBA = e => {
    let pixelArr = [];
    const imgData = [...ctx.getImageData(0, 0, img.width, img.height).data];
    //const imgDataLeng = imgData.length;

    //for (let i =0;i<imgData.length;i+=4){
    while (imgData.length > 0) {
        pixelArr.push(imgData.splice(0, 4))
    }
    console.log(pixelArr)

    let canvasArr = [];
    while (pixelArr.length > 0) {
        canvasArr.push(pixelArr.splice(0, img.width))
    }


   // let  manipulatedImg = [] ;
    for (let i = 0; i < canvasArr.length - 1; i+=2) {
        for (let j = 0; j < img.width - 5; j+=6) {
            let r = Math.floor((canvasArr[i][j][0] + canvasArr[i][j + 1][0] + canvasArr[i][j + 2][0] + canvasArr[i][j + 3][0] + canvasArr[i][j + 4][0] + canvasArr[i][j + 5][0] +
                                   canvasArr[i + 1][j][0] + canvasArr[i + 1][j + 1][0] + canvasArr[i + 1][j + 2][0]+ canvasArr[i + 1][j + 3][0]+ canvasArr[i + 1][j + 4][0]+ canvasArr[i + 1][j + 5][0]) / 12)
            let g = Math.floor((canvasArr[i][j][1] + canvasArr[i][j + 1][1] + canvasArr[i][j + 2][1] + canvasArr[i][j + 3][1] + canvasArr[i][j + 4][1] + canvasArr[i][j + 5][1] +
                                   canvasArr[i + 1][j][1] + canvasArr[i + 1][j + 1][1] + canvasArr[i + 1][j + 2][1]+ canvasArr[i + 1][j + 3][1]+ canvasArr[i + 1][j + 4][1]+ canvasArr[i + 1][j + 5][1]) / 12)
            let b = Math.floor((canvasArr[i][j][2] + canvasArr[i][j + 1][2] + canvasArr[i][j + 2][2] + canvasArr[i][j + 3][2] + canvasArr[i][j + 4][2] + canvasArr[i][j + 5][2] +
                                   canvasArr[i + 1][j][2] + canvasArr[i + 1][j + 1][2] + canvasArr[i + 1][j + 2][2]+ canvasArr[i + 1][j + 3][2]+ canvasArr[i + 1][j + 4][2]+ canvasArr[i + 1][j + 5][2]) / 12)
            // const div = document.createElement('div');
            // body.appendChild(div)
            // div.classList.add('.div')
            // div.style.backgroundColor = `rgba(${r},${g},${b},255)`
           // manipulatedImg.push(r,g,b,255)


            for (let k = 0; k<6 ;k++){
                canvasArr[i][j+k][0] = r
                canvasArr[i + 1][j+k][0] = r

                canvasArr[i][j+k][1] = g
                canvasArr[i + 1][j+k][1] = g

                canvasArr[i][j+k][2] = b
                canvasArr[i + 1][j+k][1] = b
            }

        }
        // const br = document.createElement('br');
        // body.appendChild(br)
    }

    const canvasArr2= [...canvasArr.join().split(',').map(x => +x)]



let myImgData = ctx2.createImageData(img.width,canvasArr.length);


    for (let i = 0; i < canvasArr2.length ;i+=4){
       myImgData.data[i+0] = canvasArr2[i+0]
       myImgData.data[i+1] = canvasArr2[i+1]
       myImgData.data[i+2] = canvasArr2[i+2]
       myImgData.data[i+3] = canvasArr2[i+3]
    }

    console.log(myImgData)


    //let num = 0 ;
    // for(let i = 0 ; i<manipulatedImg.length; i+=4){
    //     for(let j= num ; j<num+24 ; j+=4 ) {
    //         myImgData.data[j + 0] = manipulatedImg[i + 0];
    //        // myImgData.data[j + img.width + 0] = manipulatedImg[i + 0];
    //         myImgData.data[j + 1] = manipulatedImg[i + 1];
    //        // myImgData.data[j + img.width + 1] = manipulatedImg[i + 1];
    //         myImgData.data[j + 2] = manipulatedImg[i + 2];
    //       //  myImgData.data[j + img.width + 2] = manipulatedImg[i + 2];
    //         myImgData.data[j + 3] = manipulatedImg[i + 3];
    //       //  myImgData.data[j + img.width + 3] = manipulatedImg[i + 3];
    //     }
    //     num = num + 24;
    // }

    // console.log(manipulatedImg, myImgData)

   ctx2.putImageData(myImgData,0,0,)

    // const path = new Path2D('M46,46s93-17,149-6,7,25,7,25L123,77,56,71S-26,72,46,46Z');
    // ctx.fillStyle = 'black'
    // ctx.stroke(path);
    // ctx.fill(path);
    // console.log(path)

    // const divs = document.querySelectorAll('.div')
    // console.log(div)
    // body.addEventListener('mousemove',(e)=>{
    //     // if (e.target !== body){
    //     //     e.target.style
    //     // }
    //     divs.forEach((div)=>{
    //         console.log(e.clientX,e.clientY,div.offsetTop)
    //         if (Math.abs(e.clientX - div.offsetLeft) + Math.abs(e.clientY - div.offsetTop) < 400){
    //             div.style.transform = 'rotate(90deg)'
    //         }
    //     })
    //
    // })



}



const resize_image = image => {
    let max_size = 400,
        width = image.width,
        height = image.height;

    if (width > height) {
        // 가로가 길 경우
        if (width > max_size) {
            height *= max_size / width;
            width = max_size;
        }
    } else {
        // 세로가 길 경우
        if (height > max_size) {
            width *= max_size / height;
            height = max_size;
        }
    }
    image.width = width;
    image.height = height;
    ctx.drawImage(image, 0, 0, width, height);
};


