/**
 * TBM AI研修事業 業務マニュアル - メインJavaScript
 *
 * このファイルはアプリケーションのインタラクション機能を提供します。
 */

/**
 * タブを切り替える
 * @param {string} tabName - 切り替え先のタブ名 ('manual' | 'links' | 'training')
 */
function switchTab(tabName) {
    // 全てのタブコンテンツを非表示
    document.querySelectorAll('.tab-content').forEach(function(el) {
        el.classList.add('hidden');
    });

    // 全てのタブボタンのスタイルをリセット
    document.querySelectorAll('.tab-btn').forEach(function(el) {
        el.classList.remove('bg-navy-900', 'text-white');
        el.classList.add('text-navy-600');
    });

    // 選択されたタブコンテンツを表示
    var contentEl = document.getElementById('content-' + tabName);
    if (contentEl) {
        contentEl.classList.remove('hidden');
    }

    // 選択されたタブボタンをアクティブ状態に
    var btnEl = document.getElementById('tab-' + tabName);
    if (btnEl) {
        btnEl.classList.add('bg-navy-900', 'text-white');
        btnEl.classList.remove('text-navy-600');
    }
}

/**
 * アコーディオンの開閉を切り替える
 * @param {string} id - アコーディオン要素のID
 */
function toggleAccordion(id) {
    var el = document.getElementById(id);
    var icon = document.getElementById('icon-' + id);

    if (el) {
        el.classList.toggle('open');
    }

    if (icon) {
        icon.classList.toggle('rotate-180');
    }
}

/**
 * ページ読み込み時の初期化処理
 */
document.addEventListener('DOMContentLoaded', function() {
    // 必要に応じて初期化処理を追加
    console.log('TBM AI研修事業 業務マニュアル initialized');
});
