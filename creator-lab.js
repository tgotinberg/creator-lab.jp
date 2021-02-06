jQuery(function($) {
    $('.section-kv::before').bgSwitcher({
      images: ['img/img_1.jpg', 'img/img_11novcampaign.jpg'], // 切り替える背景画像
      Interval: 5000, //切り替えの間隔 1000=1秒
      start: true, //$.fn.bgswitcher(config)をコールした時に切り替えを開始
      loop: true, //切り替えをループする
      shuffle: false, //背景画像の順番をシャッフルする
      effect: "fade", //エフェクトの種類 (fade / blind / clip / slide / drop / hide)
      duration: 1000, //エフェクトの時間 1000=1秒
      easing: "swing", //エフェクトのイージング 
    });
  });
