var slider1 = {
    imgsUrls: [document.getElementById('img1').src, document.getElementById('img2').src, document.getElementById('img3').src, document.getElementById('img4').src, document.getElementById('img5').src],
    currentImageIndex: 0,
    ShowPrefImg: document.getElementById('show-pref'),
    ShowNextImg: document.getElementById('show-next'),
    slideimg: document.getElementById('slider-img'),

    start: function () {
        var that = this;
        this.ShowPrefImg.addEventListener('click', function (event) {
            that.onShowPrefimg(event);
        });
        this.ShowNextImg.addEventListener('click', function (event) {
            that.onShowNextimg(event);
        });

        this.slideimg.src = this.imgsUrls[this.currentImageIndex];
        this.ShowPrefImg.disabled = true;
    },

    onShowPrefimg: function (event) {
        this.currentImageIndex--;
        this.slideimg.src = this.imgsUrls[this.currentImageIndex];
        this.ShowNextImg.disabled = false;
        if (this.currentImageIndex == 0) {
            this.ShowPrefImg.disabled = true;
        }
    },

    onShowNextimg: function (event) {
        this.currentImageIndex++;
        this.slideimg.src = this.imgsUrls[this.currentImageIndex];
        this.ShowPrefImg.disabled = false;
        if (this.currentImageIndex == (this.imgsUrls.length - 1)) {
            this.ShowNextImg.disabled = true;
        }
    }

}
