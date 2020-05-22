const API_KEY = 'AIzaSyBz7YdoVfisioa6-Php0HEYYHjU-kz4O50';

// 検索結果１件を表示するカードの雛形
const Card = ({ src, title, description, videoId }) => `
    <div class="col-4 mb-5">
        <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
            <div class="card">
                <img src="${src}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                </div>
            </div>
        </a>
    </div>
`;

$('#search-btn').on('click', () => {
    

    // サムネイル表示をクリア
    $("#results").empty();
    
    // 検索ワードの取得
    const word = $('#search-word').val()

    // Ajax開始
    $.ajax({
        url:'https://www.googleapis.com/youtube/v3/search',
        type: 'GET',
        data: {
            key: API_KEY,
            part: 'snippet',
            q: word,
            maxResults: '50',
            type: 'video',
        }
    }).done((response) => {

        for(let i = 0; i < response.items.length; i++) {
            let url = response.items[i].snippet.thumbnails.high.url
            let titleText = response.items[i].snippet.title
            let descriptionText = response.items[i].snippet.description
            let id = response.items[i].id.videoId

            console.log(id)

            $('#results').append(
                Card({ src: url, title: titleText, description: descriptionText, videoId: id
            }));


        }





    }).fail((error) => {
        console.log(error)
    })

    

})