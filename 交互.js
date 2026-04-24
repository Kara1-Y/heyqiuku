// 读取本地存储数据，没有就默认0
let likeNum = localStorage.getItem('likeNum') || 0;
let collectNum = localStorage.getItem('collectNum') || 0;
let isLike = localStorage.getItem('isLike') === 'true';
let isCollect = localStorage.getItem('isCollect') === 'true';

// 获取元素
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');
const collectBtn = document.getElementById('collectBtn');
const collectCount = document.getElementById('collectCount');
const shareBtn = document.getElementById('shareBtn');

// 页面初始化显示上次保存的数字和状态
likeCount.textContent = likeNum;
collectCount.textContent = collectNum;
if(isLike) likeBtn.classList.add('active');
if(isCollect) collectBtn.classList.add('active');


// 点赞逻辑
likeBtn.addEventListener('click', function () {
    if (!isLike) {
        likeNum++;
        isLike = true;
        likeBtn.classList.add('active');
    } else {
        likeNum--;
        isLike = false;
        likeBtn.classList.remove('active');
    }
    likeCount.textContent = likeNum;
    // 保存到本地
    localStorage.setItem('likeNum', likeNum);
    localStorage.setItem('isLike', isLike);
});


// 收藏逻辑
collectBtn.addEventListener('click', function () {
    if (!isCollect) {
        collectNum++;
        isCollect = true;
        collectBtn.classList.add('active');
    } else {
        collectNum--;
        isCollect = false;
        collectBtn.classList.remove('active');
    }
    collectCount.textContent = collectNum;
    // 保存到本地
    localStorage.setItem('collectNum', collectNum);
    localStorage.setItem('isCollect', isCollect);
});


// 转发逻辑不变
shareBtn.addEventListener('click', function () {
    let url = window.location.href;
    let input = document.createElement('input');
    input.value = url;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('链接已复制，可以转发给好友！');
});