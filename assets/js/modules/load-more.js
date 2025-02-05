export const LoadMore = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('#item-list');
    const loadMoreBtn = document.querySelector('#load-more');
    let page = 1; // ページ番号
    let loading = false; // ロード中のフラグ

    // データを取得して表示する関数
    async function loadMoreItems() {
      if (loading) return;
      loading = true;
      loadMoreBtn.textContent = '読込中…';

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts`,
        );
        const data = await response.json();

        if (data.length > 0) {
          data.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item.title;
            list.appendChild(li);
          });
          page++;
        } else {
          loadMoreBtn.textContent = 'これ以上データはありません';
          loadMoreBtn.disabled = true;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        loadMoreBtn.content = 'エラーが発生しました';
      } finally {
        loading = false;
        loadMoreBtn.textContent = 'もっと見る';
      }
    }

    // 「もっと見る」ボタンのクリックイベント
    loadMoreBtn.addEventListener('click', loadMoreItems);
    // loadMoreBtn.addEventListener('click', () => loadMoreItems());

    // 初回ロード
    loadMoreItems();
  });
};
