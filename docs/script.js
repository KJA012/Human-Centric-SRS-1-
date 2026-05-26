// 슬라이더와 입력값 업데이트
const sliderToggle = document.getElementById('sliderToggle');
const sliderValue = document.getElementById('sliderValue');
const sliderValueDisplay = document.getElementById('sliderValueDisplay');
const srsScoreInput = document.getElementById('srsScore');
const humanIndexInput = document.getElementById('humanIndex');

// 결과 요소들
const resultSliderValue = document.getElementById('resultSliderValue');
const resultAlpha = document.getElementById('resultAlpha');
const resultSRS = document.getElementById('resultSRS');
const resultHuman = document.getElementById('resultHuman');
const resultFinal = document.getElementById('resultFinal');
const resultCalculation = document.getElementById('resultCalculation');

// 점수 계산 함수
function calculateScore() {
    const isActive = sliderToggle.checked;
    const sliderVal = parseFloat(sliderValue.value);
    const srsScore = parseFloat(srsScoreInput.value);
    const humanIndex = parseFloat(humanIndexInput.value);

    // 알파 계산
    let alpha;
    if (isActive) {
        alpha = sliderVal * 1.5;
    } else {
        alpha = 0.5;
    }

    // 최종 점수 계산: final_score = srs_score × (1 + alpha × human_index)
    const finalScore = srsScore * (1 + alpha * humanIndex);

    // UI 업데이트
    sliderValueDisplay.textContent = sliderVal.toFixed(2);
    resultSliderValue.textContent = sliderVal.toFixed(2);
    resultAlpha.textContent = alpha.toFixed(2);
    resultSRS.textContent = srsScore.toFixed(2);
    resultHuman.textContent = humanIndex.toFixed(2);
    resultFinal.textContent = finalScore.toFixed(2);

    // 계산식 표시
    const calculation = `${srsScore.toFixed(2)} × (1 + ${alpha.toFixed(2)} × ${humanIndex.toFixed(2)}) = ${srsScore.toFixed(2)} × ${(1 + alpha * humanIndex).toFixed(2)} = ${finalScore.toFixed(2)}`;
    resultCalculation.textContent = calculation;

    // 슬라이더 비활성화 시 입력 필드 제어
    sliderValue.disabled = !isActive;
    if (!isActive) {
        sliderValue.style.opacity = '0.5';
    } else {
        sliderValue.style.opacity = '1';
    }
}

// 이벤트 리스너
sliderToggle.addEventListener('change', calculateScore);
sliderValue.addEventListener('input', calculateScore);
srsScoreInput.addEventListener('input', calculateScore);
humanIndexInput.addEventListener('input', calculateScore);

// 초기 계산
calculateScore();

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});