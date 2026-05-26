// 요소 선택
const freshnessInput = document.getElementById('freshness');
const diversityInput = document.getElementById('diversity');
const noveltyInput = document.getElementById('novelty');
const humanIndexInput = document.getElementById('human-index');
const antiBubbleToggle = document.getElementById('anti-bubble-toggle');
const sliderContainer = document.getElementById('slider-container');
const sliderValueInput = document.getElementById('slider-value');

// 결과 표시 요소
const resultSRS = document.getElementById('result-srs');
const resultAlpha = document.getElementById('result-alpha');
const resultFinal = document.getElementById('result-final');
const alphaNote = document.getElementById('alpha-note');

// 값 표시 요소
const freshnessValue = document.getElementById('freshness-value');
const diversityValue = document.getElementById('diversity-value');
const noveltyValue = document.getElementById('novelty-value');
const humanIndexValue = document.getElementById('human-index-value');
const sliderValueDisplay = document.getElementById('slider-value-display');

// 테이블 요소
const tableFreshness = document.getElementById('table-freshness');
const tableDiversity = document.getElementById('table-diversity');
const tableNovelty = document.getElementById('table-novelty');
const tableHuman = document.getElementById('table-human');
const tableAlpha = document.getElementById('table-alpha');
const tableFinal = document.getElementById('table-final');

// 비교 카드 요소
const compareMid = document.getElementById('compare-mid');
const compareMax = document.getElementById('compare-max');

/**
 * 우연성 점수 계산
 * 신선도(0.2) + 다양성(0.3) + 참신함(0.5)
 */
function getSerendipityScore(freshness, diversity, novelty) {
    return (freshness * 0.2) + (diversity * 0.3) + (novelty * 0.5);
}

/**
 * 알파(가중치) 계산
 */
function getAlpha(isActive, sliderValue) {
    if (!isActive) {
        return 0.5; // 기본값
    }
    return sliderValue * 1.5; // 최대 1.5
}

/**
 * 최종 점수 계산
 * 최종점수 = 우연성점수 × (1 + 알파 × 인간지수)
 */
function calculateFinalScore(srsScore, alpha, humanIndex) {
    return srsScore * (1 + alpha * humanIndex);
}

/**
 * 모든 값 업데이트
 */
function updateAllValues() {
    // 입력값 가져오기
    const freshness = parseFloat(freshnessInput.value);
    const diversity = parseFloat(diversityInput.value);
    const novelty = parseFloat(noveltyInput.value);
    const humanIndex = parseFloat(humanIndexInput.value);
    const isAntiBubbleActive = antiBubbleToggle.checked;
    const sliderValue = parseFloat(sliderValueInput.value);

    // 값 표시 업데이트
    updateValueDisplay(freshnessValue, freshness);
    updateValueDisplay(diversityValue, diversity);
    updateValueDisplay(noveltyValue, novelty);
    updateValueDisplay(humanIndexValue, humanIndex);
    updateValueDisplay(sliderValueDisplay, sliderValue);

    // 점수 계산
    const srsScore = getSerendipityScore(freshness, diversity, novelty);
    const alpha = getAlpha(isAntiBubbleActive, sliderValue);
    const finalScore = calculateFinalScore(srsScore, alpha, humanIndex);

    // 결과 표시
    updateValueDisplay(resultSRS, srsScore);
    updateValueDisplay(resultAlpha, alpha);
    updateValueDisplay(resultFinal, finalScore);

    // 테이블 업데이트
    updateValueDisplay(tableFreshness, freshness);
    updateValueDisplay(tableDiversity, diversity);
    updateValueDisplay(tableNovelty, novelty);
    updateValueDisplay(tableHuman, humanIndex);
    updateValueDisplay(tableAlpha, alpha);
    updateValueDisplay(tableFinal, finalScore);

    // 알파 설명 업데이트
    if (!isAntiBubbleActive) {
        alphaNote.textContent = '기본값';
    } else {
        const percentage = (sliderValue * 100).toFixed(0);
        alphaNote.textContent = `슬라이더 ${percentage}% (${(sliderValue * 1.5).toFixed(4)})`;
    }

    // 비교 카드 업데이트
    const midScore = getSerendipityScore(freshness, diversity, novelty) * (1 + 0.75 * humanIndex);
    const maxScore = getSerendipityScore(freshness, diversity, novelty) * (1 + 1.5 * humanIndex);
    updateValueDisplay(compareMid, midScore);
    updateValueDisplay(compareMax, maxScore);
}

/**
 * 값을 4자리 소수로 표시
 */
function updateValueDisplay(element, value) {
    element.textContent = parseFloat(value).toFixed(4);
}

/**
 * 안티-버블 슬라이더 토글 이벤트
 */
antiBubbleToggle.addEventListener('change', function() {
    if (this.checked) {
        sliderContainer.style.display = 'block';
    } else {
        sliderContainer.style.display = 'none';
    }
    updateAllValues();
});

// 모든 입력 요소에 이벤트 리스너 추가
freshnessInput.addEventListener('input', updateAllValues);
diversityInput.addEventListener('input', updateAllValues);
noveltyInput.addEventListener('input', updateAllValues);
humanIndexInput.addEventListener('input', updateAllValues);
sliderValueInput.addEventListener('input', updateAllValues);

// 초기 값 계산
updateAllValues();

// 콘솔 로그 (디버깅)
console.log('✅ Human-Centric SRS 계산기 초기화 완료');
console.log('공식: 최종점수 = 우연성점수 × (1 + 알파 × 인간지수)');
