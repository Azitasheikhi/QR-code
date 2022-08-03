const $ = document;
const generateBtn = $.querySelector('form button');
const qrCodeBox = $.querySelector('.qr-code');
const qrInput = $.querySelector('form input');
const qrImage = $.querySelector('.qr-code img');

generateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if(!qrValue){
        return alert("لطفا یه متن یا آدرس وارد بکن!");
    }
    generateBtn.innerText = 'در حال تولید QR Code'
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    qrImage.addEventListener('load', () => {
        qrCodeBox.classList.remove('hidden')
        generateBtn.innerText = 'تولید QR Code'
    })

    qrInput.addEventListener('keyup', () => {
        if(!qrInput.value){
            qrCodeBox.classList.add('hidden')
        }
    })
})