const API_KEY = 'AIzaSyBz7YdoVfisioa6-Php0HEYYHjU-kz4O50';

// 検索結果１件を表示するカードの雛形
const Card = () => `
    <div class="col-4 mb-5">
        <div class="card">
            <img src="https://i.ytimg.com/vi/Dx_fKPBPYUI/hqdefault.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">米津玄師 MV「LOSER」</h5>
            <p class="card-text">Honda「JADE」CM 5th Single「LOSER / ナンバーナイン」</p>
            </div>
        </div>
    </div>
`;

$('#search-btn').on('click', () => {

    // $('#results').append(Card());

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
            // type: 'video',
        }
    }).done((response) => {
        console.log(response)

    }).fail((error) => {
        console.log(error)


    })

})