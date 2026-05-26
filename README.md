# Human-Centric-SRS-1- (인간중심 추천 알고리즘)

## 🎯 프로젝트 개요

본 프로젝트는 **'다빈치가 된 알고리즘' 시대**의 창의성 자동화로 인한 다음 문제들을 해결합니다:
- 🚨 사용자의 **디지털 불안감** (AI 콘텐츠만 노출되는 버블 현상)
- 📉 **플랫폼 양면 시장 붕괴** (인간 창작자 도태)
- 🔒 사용자의 **선택권 박탈** (알고리즘의 독재)

---

## 💡 핵심 솔루션: "안티-버블 슬라이더"

사용자가 **능동적으로** AI vs 인간 창작 콘텐츠의 비율을 조절할 수 있는 UI 슬라이더입니다.

```
┌─────────────────────────────────────┐
│ 안티-버블 슬라이더                    │
│ ●──────────���─────────────────○     │
│ 0.0 (AI중심)         1.0 (인간중심)  │
└─────────────────────────────────────┘
```

---

## 📐 권장 점수 계산 공식

### 최종 점수 공식
```
최종점수 = 우연성점수 × (1 + 알파 × 인간지수)
```

### 공식 설명

| 변수 | 범위 | 설명 |
|------|------|------|
| **우연성점수** | 0.0 ~ 1.0 | 콘텐츠의 기술적 신선도 및 다양성 |
| **인간지수** | 0.0 ~ 1.0 | AI 탐지 모델로 계산한 인간 저작 확률 |
| **알파** | 0.5 ~ 1.5 | 플랫폼 상생 가중치 (사용자 슬라이더 반영) |
| **최종점수** | 0.7 ~ 2.0+ | 추천 알고리즘에 사용되는 최종 순위 점수 |

### 알파(가중치) 계산 규칙

```python
알파 = 0.5  # 기본값

만약 (사용자가 안티-버블 슬라이더를 활성화했다면):
    알파 = 사용자_슬라이더값 × 1.5
```

- **슬라이더 OFF**: 알파 = 0.5 (기본 균형)
- **슬라이더 ON**: 알파 = 슬라이더값 × 1.5 (최대 1.5)

---

## 🔧 구현 코드

```python
class User:
    """사용자 정보 클래스"""
    def __init__(self, anti_bubble_active=False, slider_value=0.5):
        self.anti_bubble_slider_active = anti_bubble_active  # 슬라이더 활성화 여부
        self.slider_value = slider_value                      # 슬라이더 값 (0.0 ~ 1.0)


def get_technical_serendipity(content):
    """
    기술적 우연성 점수 계산
    - 콘텐츠의 신선도, 다양성, 참신함 평가
    - 반환값: 0.0 ~ 1.0
    """
    # 예: 콘텐츠 신선도 20%, 다양성 30%, 참신함 50% 가중치
    freshness = 0.7      # 신선도
    diversity = 0.8      # 다양성
    novelty = 0.6        # 참신함
    
    score = (freshness * 0.2) + (diversity * 0.3) + (novelty * 0.5)
    return score


def check_human_authorship(content):
    """
    인간 저작 여부 확인
    - AI 탐지 모델(예: GPTZero, Hugging Face 등)을 사용
    - 반환값: 0.0(100% AI) ~ 1.0(100% 인간)
    """
    # 예: AI 탐지 모델의 신뢰도
    human_probability = 0.8  # 80% 확률로 인간이 작성
    return human_probability


def calculate_recommendation_score(content, user=None):
    """
    최종 추천 점수 계산
    
    Args:
        content (dict): 콘텐츠 정보 (제목, 본문 등)
        user (User): 사용자 정보 객체 (선택사항)
    
    Returns:
        float: 최종 추천 점수
    
    공식: final_score = srs_score × (1 + alpha × human_index)
    """
    # Step 1: 기존 우연성 점수 계산
    srs_score = get_technical_serendipity(content)
    
    # Step 2: 인간 저작 지수 확인
    human_index = check_human_authorship(content)
    
    # Step 3: 기본 가중치 설정
    alpha = 0.5  # 플랫폼 상생 가중치 기본값
    
    # Step 4: 슬라이더 활성화 여부 확인
    if user and user.anti_bubble_slider_active == True:
        # 사용자가 안티-버블 슬라이더를 활성화했을 때
        alpha = user.slider_value * 1.5
    
    # Step 5: 최종 점수 계산
    final_score = srs_score * (1 + alpha * human_index)
    
    return final_score


# ============== 사용 예시 ==============

# 예시 1: 기본 설정 (슬라이더 OFF)
print("=" * 50)
print("예시 1: 기본 설정 (슬라이더 OFF)")
print("=" * 50)
user1 = User(anti_bubble_active=False)
content = {"title": "흥미로운 기사", "body": "좋은 내용..."}
score1 = calculate_recommendation_score(content, user1)
print(f"우연성점수: 0.7")
print(f"인간지수: 0.8")
print(f"알파: 0.5")
print(f"최종점수: {score1:.4f}")
print(f"계산: 0.7 × (1 + 0.5 × 0.8) = 0.7 × 1.4 = {score1:.4f}\n")

# 예시 2: 인간 창작 선호 (슬라이더 1.0)
print("=" * 50)
print("예시 2: 인간 창작 선호 (슬라이더 1.0)")
print("=" * 50)
user2 = User(anti_bubble_active=True, slider_value=1.0)
score2 = calculate_recommendation_score(content, user2)
print(f"우연성점수: 0.7")
print(f"인간지수: 0.8")
print(f"알파: 1.0 × 1.5 = 1.5")
print(f"최종점수: {score2:.4f}")
print(f"계산: 0.7 × (1 + 1.5 × 0.8) = 0.7 × 2.2 = {score2:.4f}")
print(f"향상도: +{((score2/score1 - 1) * 100):.1f}%\n")

# 예시 3: AI 콘텐츠 선호 (슬라이더 0.0)
print("=" * 50)
print("예시 3: AI 콘텐츠 선호 (슬라이더 0.0)")
print("=" * 50)
user3 = User(anti_bubble_active=True, slider_value=0.0)
score3 = calculate_recommendation_score(content, user3)
print(f"우연성점수: 0.7")
print(f"인간지수: 0.8")
print(f"알파: 0.0 × 1.5 = 0.0")
print(f"최종점수: {score3:.4f}")
print(f"계산: 0.7 × (1 + 0 × 0.8) = 0.7 × 1.0 = {score3:.4f}\n")

# 예시 4: 중간값 (슬라이더 0.5)
print("=" * 50)
print("예시 4: 중간값 (슬라이더 0.5)")
print("=" * 50)
user4 = User(anti_bubble_active=True, slider_value=0.5)
score4 = calculate_recommendation_score(content, user4)
print(f"우연성점수: 0.7")
print(f"인간지수: 0.8")
print(f"알파: 0.5 × 1.5 = 0.75")
print(f"최종점수: {score4:.4f}")
print(f"계산: 0.7 × (1 + 0.75 × 0.8) = 0.7 × 1.6 = {score4:.4f}\n")
```

---

## 📊 결과 분석

### 슬라이더에 따른 점수 변화

| 슬라이더값 | 알파 | 최종점수 | 변화율 | 의미 |
|----------|------|--------|--------|------|
| 0.0 (OFF) | 0.50 | 0.98 | 기준점 | 기본 균형 |
| 0.0 (ON) | 0.00 | 0.70 | -28.6% | AI 콘텐츠만 |
| 0.5 (ON) | 0.75 | 1.12 | +14.3% | 섞임 (AI 우위) |
| 1.0 (ON) | 1.50 | 1.54 | +57.1% | 인간 창작만 |

### 🎯 실제 플랫폼 적용

```
사용자 A (슬라이더 1.0)
↓
최종점수 1.54 → 상위 노출 → 인간 창작자 콘텐츠 우선 추천

사용자 B (슬라이더 0.0)
↓
최종점수 0.70 → 하위 노출 → AI 효율적 콘텐츠 우선 추천

사용자 C (슬라이더 OFF)
↓
최종점수 0.98 → 중간 노출 → 균형잡힌 피드
```

---

## 🔬 테스트 코드

```bash
python test_recommendation_score.py
```

자동화된 테스트 스위트가 다음을 검증합니다:
- ✅ 기본 점수 계산
- ✅ 슬라이더 활성화/비활성화
- ✅ 경계값 (0.0, 1.0)
- ✅ 점수 범위 검증

---

## 💼 비즈니스 임팩트

### Before (현재)
```
❌ 사용자: AI 콘텐츠에 갇혀 있음
❌ 창작자: 인간은 도태됨
❌ 플랫폼: 신뢰도 하락
```

### After (이 솔루션 적용)
```
✅ 사용자: 선택권 회복 (슬라이더 제어)
✅ 창작자: 인간 창작 콘텐츠 생존 가능
✅ 플랫폼: 양면 시장 건강성 유지
```

---

## 🛠️ 향후 개선사항

- [ ] 더 정교한 AI 탐지 모델 통합
- [ ] 사용자 슬라이더 값 학습 (자동 조정)
- [ ] 창작자별 신뢰도 점수 추가
- [ ] 시간대별 콘텐츠 트렌드 반영
- [ ] 다국어 콘텐츠 분석

---

## 📚 참고문헌

- GPTZero: AI 텍스트 탐지
- Hugging Face: 자연어 처리 모델
- Algorithmic Accountability: 알고리즘 투명성

---

## 👨‍💻 개발자

**KJA012** - Human-Centric Recommendation Algorithm
