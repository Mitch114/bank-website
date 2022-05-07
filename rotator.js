var banner = [
    ["https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-gesture-bank-card-data-information-image_19030.jpg", "img/bank.jpeg"],
    ["https://media.istockphoto.com/vectors/bank-building-isolated-on-white-background-vector-illustration-flat-vector-id900791430?k=20&m=900791430&s=612x612&w=0&h=IKTkhxiIwAL6-HMfm9tfW6ti2e4V2roX2IgpUUrbLME=", "img/bank2.jpeg"],
    ["https://d.newsweek.com/en/full/1632375/newsweek-amplify-choosing-right-bank.png?w=790&f=a0c47fd99d5d90721378da34e2cf6877", "img/bank3.jpeg"]
    ];
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    shuffle(banner);
    document.getElementById('ad-container').innerHTML = '<a href="'+banner[0][0]+
    '" target="_blank" rel="nofollow"><img src="'+banner[0][1]+
    '" height="300" width="460" alt="300x460 Banner Ad" /></a>';