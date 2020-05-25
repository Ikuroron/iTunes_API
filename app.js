// 検索結果１件を表示するカードの雛形
const Card = ({ src, title, artist, musicId }) => `
    <div class="col-4 mb-5">
        <a href="${musicId}" target="_blank">
            <div class="card">
                <img src="${src}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="album-title">${title}</h5>
                    <p class="artist">${artist}</p>
                    <button type="button" class="btn btn-primary">Detail</button>
                </div>
            </div>
        </a>
    </div>
`;

$('#search-btn').on('click', () => {

    $("#results").empty();

    
    // 検索ワードの取得
    const word = $('#search-word').val();
    // alert(word)
    
    // データを出すのがajax
    $.ajax({
        url: 'https://itunes.apple.com/search',
        type: 'GET',
        dataType: 'jsonp', // 通信結果のデータ形式(例：html, json, jsonp, xml)
        data: {
            term: word,
            country: 'jp',
            maxResults: '50',
        }
        
    }).done((response) => {
        for(let i = 0; i < response.results.length; i++) {
            let url = response.results[i].artworkUrl100
            let titleText = response.results[i].collectionName
            let artistText = response.results[i].artistName
            let id = response.results[i].collectionViewUrl

            // let url = response.results[i].artworkUrl100;
            let convertedUrl = url.replace(/100/g, '600');
            

            console.log(convertedUrl);

            $('#results').append(Card({src: convertedUrl, title: titleText, artist: artistText, musicId: id}));

            console.log(url)
        }


    }).fail((error) => {
        console.log(error)

    })

})