const API_KEY = 'AIzaSyBz7YdoVfisioa6-Php0HEYYHjU-kz4O50';

// 検索結果１件を表示するカードの雛形
const Card = ({ src, title, description }) => `
    <div class="col-4 mb-5">
        <div class="card">
            <img src="${src}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
            </div>
        </div>
    </div>
`;

$('#search-btn').on('click', () => {

    

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



            $('#results').append(
                Card({ src: url, title: titleText, description: descriptionText,
            }));

            // console.log(array)
        }



    }).fail((error) => {
        console.log(error)


    })

})