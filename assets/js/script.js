/**
 * メロンクリームサイダーのお砂糖 - メインスクリプト
 * 共通の JavaScript 機能を提供します
 */

// DOMContentLoaded イベントで初期化
document.addEventListener('DOMContentLoaded', function() {
  console.log('メロンクリームサイダーのお砂糖 - サイトが読み込まれました');
  
  // 現在のページに応じて処理を実行
  const currentPage = getCurrentPage();
  
  if (currentPage === 'lovers.html') {
    loadLoversData();
  }
});

/**
 * 現在のページを取得
 */
function getCurrentPage() {
  const path = window.location.pathname;
  const page = path.split('/').pop();
  return page || 'index.html';
}

/**
 * 図鑑データを読み込む
 * 将来的に JSON ファイルから fetch する予定
 */
function loadLoversData() {
  const contentElement = document.getElementById('lovers-content');
  
  if (!contentElement) {
    return;
  }
  
  // 将来的には以下のように JSON ファイルを fetch する
  // fetch('data.json')
  //   .then(response => response.json())
  //   .then(data => {
  //     displayLoversData(data);
  //   })
  //   .catch(error => {
  //     console.error('データの読み込みに失敗しました:', error);
  //     contentElement.innerHTML = '<p>データの読み込みに失敗しました。</p>';
  //   });
  
  // 現在はサンプルデータを表示
  const sampleData = [
    {
      id: 1,
      title: 'サンプルアイテム 1',
      description: 'これはサンプルのアイテムです。'
    },
    {
      id: 2,
      title: 'サンプルアイテム 2',
      description: 'これもサンプルのアイテムです。'
    },
    {
      id: 3,
      title: 'サンプルアイテム 3',
      description: 'さらにサンプルのアイテムです。'
    }
  ];
  
  displayLoversData(sampleData);
}

/**
 * 図鑑データを表示
 */
function displayLoversData(data) {
  const contentElement = document.getElementById('lovers-content');
  
  if (!contentElement || !Array.isArray(data)) {
    return;
  }
  
  // データグリッドを作成
  const gridHTML = `
    <div class="data-grid">
      ${data.map(item => `
        <div class="data-item">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </div>
      `).join('')}
    </div>
  `;
  
  contentElement.innerHTML = gridHTML;
}

/**
 * HTML エスケープ処理
 */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * JSON データを fetch する関数（将来使用予定）
 */
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('データの取得に失敗しました:', error);
    throw error;
  }
}
