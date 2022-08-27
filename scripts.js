/* Place your JavaScript in this file */
function display_random_image() {
    var theImages = [{
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125364_FFSgjmKOnuBecYV.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125369_W33sUAA0p1Opldu.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125373_Q2Ob2cKnKquKZPl.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125378_0KszF3oJu8rocuw.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125270_51MhOtQRC0Hbwi8.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125380_gtdTMUUM3YjxfN1.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125382_BjKEMZgemIZhu0k.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125389_fdsU2Hj3ER0TzSx.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125392_yl3Td79NrLyj3b2.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125406_02880T68IyfQHE0.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125410_w3GSnEZ3dBNgBPw.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125412_XXrVFHthUAc9ZtW.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125415_JrDWcQoTiYTG2Rw.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125398_5L4dpOyEOkgBHwz.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125417_l7eWUBAgY3ctG8Q.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125426_XpyH5qcCaTxpfrd.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54126788_yQd5mKGHszMINtL.jpg",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125435_AHu8FrMkJxO8gP4.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125456_fPmeQPUvttiy3CZ.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125462_BywdoRJoO18ryJi.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125467_eEcUEF8yYUGC7fQ.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125474_qwe9i3VoHOdCjT5.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125476_XbZeO3UcBB87tkZ.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125481_11K4hruIirqxDTq.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125485_IzjuKUDJR6QJv9N.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125493_Yx8KkaGjU0uj0sz.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125495_ZImu20GQaXSw23Q.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125281_nIYgheao9ln1FlW.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125504_BR3oPjQImzVDiVM.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125507_gkzgQMBL94JuwOG.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125509_5spHt3RC2kom48r.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125510_FjqMTfrplJoHy05.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125512_sQYBGIKXILcHWyN.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125278_FnwLN2CSWYf8NqB.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125520_SS9moVAvRbeQKxH.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125533_kp55ZXCXA7nFUkq.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125538_68prpvEX6AucXOY.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125543_4eeyjDcsq7ewPG9.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125549_k5onpRq4h2wSoOk.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125551_KePZ7xaFCVj7PrF.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125552_vf5qpg3DkzJtyeo.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125563_4gF5jxceGZ4G6Hr.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125284_5wyxq1wU2mY25J6.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125567_Sp5eLVLJBnAxW7O.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125574_8rfXRnc5lqcEV3R.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125263_XyWRy0ou0sXP4aS.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125592_mX8ulhhj6wwC68y.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125582_h7179fBnahO8aRv.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125595_So4ElwNNM7QMeo6.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125443_f6wsQZ1dkYqqVZV.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125525_XnRQ1Yn0X9s1Fop.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125529_JGF8OED06egBt7N.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54126194_oCQYmLLjuco968B.png",
        width: "256",
        height: "384"
    }, {
        src: "https://f2.toyhou.se/file/f2-toyhou-se/images/54125489_5JJaUMU7yg4xMEo.png",
        width: "256",
        height: "384"
    }];

    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }

    // create random image number
    function getRandomInt(min, max) {
        //  return Math.floor(Math.random() * (max - min + 1)) + min;

        imn = Math.floor(Math.random() * (max - min + 1)) + min;
        return preBuffer[imn];
    }

    // 0 is first image,   preBuffer.length - 1) is  last image

    var newImage = getRandomInt(0, preBuffer.length - 1);

    // remove the previous images
    var images = document.getElementsByTagName('img');
    var l = images.length;
    for (var p = 0; p < l; p++) {
        images[0].parentNode.removeChild(images[0]);
    }
    // display the image  
    document.body.appendChild(newImage);
}
