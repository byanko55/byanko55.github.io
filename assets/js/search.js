function searchPost(pages){
    document.getElementById('search-input').addEventListener('keyup', function() {
        var keyword = this.value.toLowerCase();
        var matchedPosts = [];
        const searchResults = document.getElementById('search-result');
        const prevResults = document.querySelector(".result-item");
    
        if (keyword.length > 0) {
            searchResults.style.display = 'block';
            document.getElementById('btn-clear').style.display = 'block';
        } else {
            searchResults.style.display = 'none';
            document.getElementById('btn-clear').style.display = 'none';
        }
        
        Array.from(document.querySelectorAll('.result-item')).forEach(function (item) {
            item.remove();
        });
    
        for (var i = 0; i < pages.length; i++) {
            var post = pages[i];
    
            if (post.title === 'Home' && post.type == 'category') continue;
    
            if (post.title.toLowerCase().indexOf(keyword) >= 0
            || post.path.toLowerCase().indexOf(keyword) >= 0
            || post.tags.toLowerCase().indexOf(keyword) >= 0){
                matchedPosts.push(post);
            }
        }
    
        if (matchedPosts.length === 0) {
            insertItem('<span class="description">There is no search result.</span>');

            return;
        } 
    
        matchedPosts.sort(function (a, b) {
            if (a.type == 'category') return 1;
    
            return -1;
        });
    
        for (var i = 0; i < matchedPosts.length; i++) {
            var highlighted_path = highlightKeyword(matchedPosts[i].path, keyword);
    
            if (highlighted_path === '')
                highlighted_path = "Home";
    
            if (matchedPosts[i].type === 'post'){
                var highlighted_title = highlightKeyword(matchedPosts[i].title, keyword);
                var highlighted_tags = highlightKeyword(matchedPosts[i].tags, keyword);
    
                if (highlighted_tags === '')
                    highlighted_tags = "none";

                insertItem('<a href="' +
                    matchedPosts[i].url +
                    '"><table><thead><tr><th><svg class="ico-book"></svg></th><th>' + highlighted_title +  
                    '</th></tr></thead><tbody><tr><td><svg class="ico-folder"></svg></td><td>' + highlighted_path +
                    '</td></tr><tr><td><svg class="ico-tags"></svg></td><td>' + highlighted_tags +
                    '</td></tr><tr><td><svg class="ico-calendar"></svg></td><td>' + matchedPosts[i].date +
                    '</td></tr></tbody></table></a>'
                );
            }
            else {
                insertItem('<a href="' +
                    matchedPosts[i].url +
                    '"><table><thead><tr><th><svg class="ico-folder"></svg></th><th>' + highlighted_path + 
                    '</th></tr></thead></table></a>'
                );
            }
        }

        function insertItem(inner_html){
            let contents = document.createElement("li");
            contents.classList.add("result-item");
            contents.innerHTML = inner_html;
            searchResults.append(contents);
        }
    });

    function highlightKeyword(txt, keyword) {
        var index = txt.toLowerCase().lastIndexOf(keyword);
    
        if (index >= 0) { 
            out = txt.substring(0, index) + 
                "<span class='highlight'>" + 
                txt.substring(index, index+keyword.length) + 
                "</span>" + 
                txt.substring(index + keyword.length);
            return out;
        }
    
        return txt;
    }
}

function searchRelated(pages){
    const refBox = document.getElementById('related-box');
    const refResults = document.getElementById('related-posts');

    if (!refBox) return;

    var relatedPosts = [];
    var currPost = pages.find(obj => {return obj.url === location.pathname});

    let currTags = currPost.tags.split(', ');
    let currCategory = currPost.path.split(' > ').pop();

    for (var i = 0; i < pages.length; i++) {
        let page = pages[i];

        if (page.type === 'category') continue;

        if (page.title === currPost.title) continue;

        let tags = page.tags.split(', ');
        let category = page.path.split(' > ').pop();
        let correlationScore = 0;

        for (var j = 0; j < currTags.length; j++){
            if (tags.indexOf(currTags[j]) != -1) correlationScore += 1;
        }

        if (category === currCategory) correlationScore += 1;

        if (correlationScore == 0) continue;

        relatedPosts.push({
            'title': page.title,
            'date': page.date,
            'category': category,
            'url': page.url,
            'thumbnail': page.image,
            'score': correlationScore
        });
    }

    relatedPosts.sort(function (a, b) {
        if(a.hasOwnProperty('score')){
            return b.score - a.score;
        }
    });

    if (relatedPosts.length == 0){
        refBox.style.display = 'none';
        return;
    }

    for (var i = 0; i < Math.min(relatedPosts.length, 6); i++){
        let post = relatedPosts[i];
        let date = '-';
        let category = 'No category';

        if (post.date !== '1900-01-01'){
            date = new Date(post.date);
            date = date.toLocaleString('en-US', {day: 'numeric', month:'long', year:'numeric'});
        }

        if (post.category !== '') category = post.category;

        if (post.thumbnail === ''){
            post.thumbnail = "/assets/img/thumbnail/empty.jpg";
        }

        let contents = document.createElement("li");
        contents.classList.add("related-item");
        contents.innerHTML = '<a href="' + post.url +
            '"><img src="' + post.thumbnail + 
            '"/><p class="category">' + category +  
            '</p><p class="title">' + post.title + 
            '</p><p class="date">' + date +
            '</p></a>';

        refResults.append(contents);
    }
}