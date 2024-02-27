$(function () {
    const $modal = $('#modal')
    $closeBtn = $modal.find('.close-btn')
    $vid = $modal.find('video')//4개의 비디오

    $('article').on('mouseenter', function () {
        let $article = $(this),
            $video = $article.find('video'),
            mov = $video.get(0)


        //비디오제어
        mov.currentTime = 0
        mov.play()

        //1-1 article -> width: 22.5%
        //1-2 h4,p -> right: 20px

        $article.stop().animate({
            width: '22.5%'
        }, 1000, function () {
            $article.find('h4').stop().animate({
                right: 20
            }, 500).delay(3500).animate({
                right: -250
            })
            $article.find('p').stop().animate({
                right: 20
            }, 500).delay(3500).animate({
                right: -250
            })

            //비디오 삽입
            $video.stop().fadeIn(1000)
        })
    })
        .on('mouseleave', function () {
            $article = $(this);
            $video = $article.find('video');
            mov = $video.get(0);

            //비디오 제어 (일시정지)
            mov.pause();

            $article.stop().animate({
                width: 12.5 + '%'
            });

            $article.find('h4, p')
                .stop().animate({ right: -250 }, 'fast');

            //비디오 => 숨김
            $video.stop().fadeOut();
        }).on('click', function () {
            $modal.slideDown(1000)
            let i = $(this).index()
            let mov = $vid.eq(i).get(0)

            moveBy.currentTime = 0
            mov.play()

            $vid.eq(i).css({
                display: 'block',
                zIndex: 1
            }).prop({
                muted: false,
                controls: true
            })
        })
    //모달 닫기
    $closeBtn.on('click', function () {
        $modal.fadeOut();
        $vid.css({ display: 'none', zIndex: 0 })
            .prop({
                muted: true,
                controls: false
            })
    });
})